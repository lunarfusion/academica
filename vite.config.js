import fs from "fs"
import liveReload from "vite-plugin-live-reload"
import postcss from "postcss"
import { normalizePath } from "vite"
import autoprefixer from "autoprefixer"
import postcssImport from "postcss-import"
import postcssNested from "postcss-nested"
import postcssCustomMedia from "postcss-custom-media"

const { readFile, writeFile } = fs.promises

function drupalSDC() {
  return {
    name: "drupal-sdc",
    enforce: "pre",
    async handleHotUpdate({ file, server }) {
      console.log("Hot update:", file)
      // Check if the changed file is a .pcss file
      if (file.includes("components") && file.endsWith(".pcss")) {
        try {
          const css = await readFile(file, "utf-8")
          let result = await postcss([postcssImport(), postcssNested(), postcssCustomMedia(), autoprefixer()]).process(
            css,
            {
              from: file,
            },
          )

          const cssFileName = file.replace(".pcss", ".css")
          await writeFile(cssFileName, result.css)

          const cssModule = server.moduleGraph.getModuleById(normalizePath(cssFileName))
          if (cssModule) {
            server.moduleGraph.invalidateModule(cssModule)
          }

          server.ws.send({
            type: "update",
            updates: [
              {
                type: "css-update",
                path: normalizePath(cssFileName),
                timestamp: Date.now(),
              },
            ],
          })
        } catch (error) {
          console.error(`Error processing ${file}: ${error}`)
        }
        return []
      }
    },
  }
}

export default {
  plugins: [drupalSDC(), liveReload(__dirname + "/**/*.(php|inc|theme|twig|js|pcss)")],

  css: {
    postcss: {
      plugins: [postcssImport(), postcssNested(), postcssCustomMedia(), autoprefixer()],
    },
  },

  build: {
    // generate manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: ["/src/style.css", "assets/js/main.js"],
      // Remove the [hash] since Drupal will take care of that.
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `chunks/[name].[hash].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },

  server: {
    // required to load scripts from custom host
    cors: true,

    // we need a strict port to match on PHP side
    // change freely, but update on PHP to match the same port
    strictPort: true,
    port: 12321,

    hmr: {
      host: "localhost",
      protocol: "ws",
    },
  },

  resolve: {
    alias: {
      jquery: "/js/jquery.module.js",
    },
  },
}
