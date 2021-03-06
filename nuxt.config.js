require('dotenv').config({path:'.env'})
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'InventoryApr2021',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  
    //insert external javascript files here to be compiled by Nuxt
  script: [
    // <script src="https://kit.fontawesome.com/c035f787fc.js" crossorigin="anonymous"></script>
    {crossorigin:'anonymous', type:'text/javascript', src:"https://kit.fontawesome.com/c035f787fc.js"}
  ]
},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/firebase',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:5000'
  },

  firebase: {
    config: JSON.parse(process.env.FS360_FB_KEY?process.env.FS360_FB_KEY:"{}"),
    services:{
      realtimeDB:false, //Just as an example. Can be any other service
      auth:{
        persistence: 'session',
        initialize: {
          onAuthStateChangedAction: 'auth/onAuthStateChangedAction',
        },
        ssr: true
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
