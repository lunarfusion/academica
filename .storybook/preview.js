/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

import '../dist/vars.css';
import '../dist/academicatheme.css';
import '../dist/base.css';

export default preview;
