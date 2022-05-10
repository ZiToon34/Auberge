import fr from './langs/fr.json'
import nl from './langs/nl.json'
import en from './langs/en.json'
import de from './langs/de.json'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Auberge de la cascade Cirque de Navacelles',
    script:[{
     src: "https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"
    }],
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'google-site-verification', content: 'O-APpDp4_S4j8HrzBcEnlwSXW_wS7ZDTIhDOYXcgJbY' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: "description", content: "Bienvenue sur le site de l'Auberge de la Cascade à Navacelles - Hérault. Profitez d'un cadre exceptionnel pour vos vacances." },
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

  // Google Analytics
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: './plugins/vue-carousel.js', mode: 'client'},
  { src: './plugins/vue-country-flag.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/recaptcha',
    [
      '@nuxtjs/i18n',
    { locales: ['en', 'de', 'nl', 'fr',],
    strategy: 'prefix_except_default',
      defaultLocale: 'fr',
      parsePages: false,   // Disable babel parsing
      pages: {
        index: {
          fr: '/', 
          en: '/',
          de: '/',
          nl: '/'
        },
        hotel: {
          fr: '/hotel', 
          en: '/hostel',
          de: '/hotel',
          nl: '/hotel'
        },
        restaurant: {
          fr: '/restaurant', 
          en: '/restaurant',
          de: '/restaurant',
          nl: '/restaurant'
        },
        alentour: {
          fr: '/alentour', 
          en: '/around',
          de: '/umgebung',
          nl: '/rondom'
        },
        contact: {
          fr: '/contact', 
          en: '/contact',
          de: '/kontakt',
          nl: '/contact'
        },
        reservation: {
          fr: '/reservation', 
          en: '/reservation',
          de: '/reservierung',
          nl: '/reservering'
        }
      },
      vueI18n: {
        fallbackLocale: 'fr',
        messages: {
          en,
          de,
          nl,
          fr
        },
        detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        redirectOn: 'root',  // recommended
          }
        
      }}
    ],
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],
  sitemap: {
    hostname: 'https://www.coqhaw.fr/sitemap.xml',
    gzip: true,
    routes: [
      '/hotel',
      '/reservation',
      '/contact',
      '/restaurant',
      '/alentour'
    ]
  },
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
