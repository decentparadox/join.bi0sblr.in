import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel/serverless';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  integrations: [starlight({
    title: 'bi0sblr Recruitment',
    logo: {
      src: './src/assets/logo.svg',
      replacesTitle: true
    },
    sidebar: [{
      label: '[list] Getting Started',
      link: '/getting-started/'
    }, {
      label: '[task] Submitting Tasks',
      link: '/submit-tasks/'
    }, {
      label: '[box] Concepts',
      autogenerate: {
        directory: 'concepts'
      }
    }, {
      label: '[book] Domains',
      autogenerate: {
        directory: 'domains'
      }
    }],
    components: {
      Sidebar: './src/components/Sidebar.astro',
      Pagination: './src/components/Pagination.astro'
    },
    customCss: ['./src/styles/props.css', './src/styles/styles.css'],
    expressiveCode: {
      themes: ['vitesse-dark']
    }
  }), tailwind()]
});