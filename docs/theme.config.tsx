import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Interaktive Webkarte Ballenberg</span>,
  project: {
    link: 'https://github.com/InteraktiveWebkarteBallenberg/InteraktiveWebkarteBallenberg.git',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
  search: {
    placeholder: 'Suche...',
  },
};

export default config