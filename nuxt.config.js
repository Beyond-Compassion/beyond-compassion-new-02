export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/filters',
    '~plugins/breakpoint.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    ['storyblok-nuxt', {
      accessToken: '1CoAgX5bDKJJgnmQI5fdnQtt',
      cacheProvider: 'memory'
    }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    treeShaking: true,
    customVariables: ['~/assets/variables.scss'],
    optionsPath: './vuetify.options.js',
    font: {
      family: 'Roboto'
    },
    // icons: 'mdi',
    theme: {
      dark: false,
      themes: {
        light: {
          // primary: '#F7C948',

          // // MIKE: replace above with:
          // primaryLight: '#F7C948',
          // primaryDark: '#40C3F7',

          primary: '#2680C2',

          // MIKE: replace above with:
          primaryLightest: '#62B0E8',
          primaryLighter: '#4098D7',
          primaryLight: '#2680C2',
          primaryDark: '#186FAF', // #186FAF = rgba(24, 111, 175, 1)

          secondary: '#243B53', // NOTE: used as a grey right now - rename to grey and replace with new greys

          greyDark: '#243B53',
          greyLessDark: '#9FB3C8',
          greyLight: '#829AB1',
          greyLightest: '#F0F4F8',

          // accent: '#40C3F7',
          // accent: '#CB6E17',
          accent: '#F0B429',

          // accentLight: '#DE911D', // #DE911D = rgba(222, 145, 29, 1)
          accentLight: '#F0B429', // #F0B429 = rgb(240, 180, 41, 1)
          accentLighter: '#F7C948',
          accentLightest: '#FADB5F',
          // accentDark: '#CB6E17', // #CB6E17 = rgba(203, 110, 23, 1)
          accentDark: '#F0B429',
          accentDarker: '#B44D12', // #B44D12 = rgba(180, 77, 18, 1)

          error: '#E12D39',

          info: '#2196F3', // MIKE: remove

          success: '#3EBD93',

          warning: '#FFC107' // MIKE: remove
        }
        // dark: {
        //   primary: colors.blue.darken2,
        //   accent: colors.grey.darken3,
        //   secondary: colors.amber.darken3,
        //   info: colors.teal.lighten1,
        //   warning: colors.amber.base,
        //   error: colors.deepOrange.accent4,
        //   success: colors.green.accent3
        // }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
