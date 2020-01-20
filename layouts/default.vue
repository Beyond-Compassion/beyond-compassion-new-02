<template>
  <v-app>
    <core-app-bar />

    <core-page-banner v-bind="pageBanner" />

    <v-content class="pt-0">
      <nuxt />
    </v-content>

    <!-- NOTE: adding "app" to this also adds the "fixed" prop with no easy way to
    remove the associated class -->
    <core-footer v-bind="footer" />
  </v-app>
</template>

<script>
/* eslint-disable no-console */

import { mapGetters } from 'vuex'
import utilMixin from '~/mixins/util'
import CoreFooter from '~/components/core/Footer'
import CorePageBanner from '~/components/core/PageBanner'
import CoreAppBar from '~/components/core/AppBar'

export default {
  components: {
    CoreFooter,
    CorePageBanner,
    CoreAppBar
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
