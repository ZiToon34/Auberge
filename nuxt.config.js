import fr from './langs/fr.json'
import nl from './langs/nl.json'
import en from './langs/en.json'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Auberge',
    script:[{
     src: "https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"
    }],
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Libre+Franklin&display=swap"},
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Parisienne&display=swap" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      { rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"},
    ]

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/default.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/recaptcha',
    [
      '@nuxtjs/i18n',
      { locales: ['en', 'fr', 'nl'],
      defaultLocale: 'fr',
      vueI18n: {
        fallbackLocale: 'fr',
        messages: {
          en,
          fr,
          nl
        }
      }}
    ]

  ],
  recaptcha: {
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    language: 'fr',   // Recaptcha language (v2)
    siteKey: process.env.RECAPTCHA_SITE_KEY,    // Site key for requests
    version: 'v2',     // Version
    size: 'normal'        // Size: 'compact', 'normal', 'invisible' (v2)
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  env: {
    serviceId: process.env.YOUR_SERVICE_ID,
    templateId: process.env.YOUR_TEMPLATE_ID,
    userId: process.env.YOUR_USER_ID,
    siteKey: process.env.SITE_KEY
  }
}
