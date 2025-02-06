import search, {
  Preview as SearchPreview,
} from '../components/02-molecules/search/search.component.yml'

export default {
  title: 'Page with imported SDC',
  render: () => {
    return `
      ${search.component({ ...SearchPreview.args })}
    `
  },
  play: async ({ canvasElement }) => {
    Drupal.attachBehaviors(canvasElement, window.drupalSettings)
  },
}

export const Basic = {}
