# Academica Overview

An experimental design system and Drupal theme built with Storybook, postCSS, CSS variables, and Single Directory Components.

Academica follows atomic design practices with Drupal Single Directory Components. Integrates PostCSS, which is compiled per component using vite. Uses CSS variables, including primitive and semantic layers for the color palette.

# Starting

Storybook University uses Storybook with Vite and type of HTML. It uses the storybook sdc addon provided by iberdinsky: https://github.com/iberdinsky-skilld/sdc-addon

Clone this repo and do:

<code>npm run storybook</code>

To run postCSS compiling without launching Storybook:

<code>npm run dev</code>

# Using PostCSS

<code>npm install autoprefixer</code>
<code>npm i postcss-nested</code>
<code>npm i postcss-import</code>
<code>npm i -D postcss-load-config</code>

## postcss.config.js
Create a file named postcss.config.js in the root of your project, and add this content:

<code>
module.exports = {
  // Add your installed PostCSS plugins here:
  plugins: [
    require('postcss-import'), // postcss-import must be first
    require('autoprefixer'),
    require('postcss-nested')
    // don't put devDependencies here, only dependencies
  ],
};
</code>
