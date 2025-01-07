const config = {
  stories: ["../components/**/*.component.yml"], // Your components directory.
  addons: [
    {
      name: "storybook-addon-sdc",
      options: {
        sdcStorybookOptions: {
          namespace: "academica" // Your namespace.
        },
        vitePluginTwigDrupalOptions: {}, // vite-plugin-twig-drupal options.
        jsonSchemaFakerOptions: {} // json-schema-faker options
      }
    },
    "@storybook/addon-essentials"
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {}
  }
}
export default config
