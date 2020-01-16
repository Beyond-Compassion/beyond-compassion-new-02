<template>
  <v-app>
    <core-page-banner
      v-bind="pageBanner"
    />

    <v-content>
      <nuxt />
    </v-content>

    <core-footer
      v-bind="footer"
    />
  </v-app>
</template>

<script>
/* eslint-disable no-console */

import { mapGetters } from 'vuex'
import utilMixin from '~/mixins/util'
import CoreFooter from '~/components/core/Footer'
import CorePageBanner from '~/components/core/PageBanner'

export default {
  components: {
    CoreFooter,
    CorePageBanner
  },

  mixins: [utilMixin],

  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },

  computed: {
    ...mapGetters(['footer', 'pageBanner'])
  }
}
</script>
