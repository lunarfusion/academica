const config = {
  stories: ["../components/**/*.component.yml"], // Your components directory.
  addons: [
    {
      name: "storybook-addon-sdc",
      options: {
        sdcStorybookOptions: {
          namespace: "academica", // Your namespace.
          validate: false,
          storySort: {
              method: 'alphabetical',
              locales: 'en-US'
          }
        },
        vitePluginTwigDrupalOptions: {}, // vite-plugin-twig-drupal options.
        jsonSchemaFakerOptions: {} // json-schema-faker options
      }
    },
    "@storybook/addon-essentials"
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {
      storySort: {
          method: 'alphabetical',
          order: ['Atoms', 'Molecules', 'Organisms', 'Templates'],
          locales: 'en-US'
      }
    }
  }
}
export default config
