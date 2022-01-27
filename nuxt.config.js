export default {
  // Used in components/dev/Toolbar to only render that component if we're in development mode.
  env: {
    dev: process.env.NODE_ENV === 'development',
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'smj-nuxt2-starter',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A Nuxt 2 starter by @schwartzmj',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // @nuxtjs/google-fonts plugin configuration
  googleFonts: {
    display: 'swap',
    families: {
      'Roboto Slab': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/postcss8',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    html: {
      minify: {
        // Some aspects of Tailwind 3 (drop-shadow, not-prose) break when using Nuxt's default CSS minifier.
        // https://nuxtjs.org/docs/configuration-glossary/configuration-build/#optimizecss
        // Can probably customize the underlying package? https://github.com/NMFR/optimize-css-assets-webpack-plugin
        minifyCSS: false,
      },
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
