<template>
  <v-app>
    <core-app-bar />

    <core-drawer />

    <v-content class="pt-0">
      <nuxt />
    </v-content>

    <!-- NOTE: adding "app" to this also adds the "fixed" prop with no easy way to
    remove the associated class -->
    <core-footer v-if="footer" v-bind="footer" />
  </v-app>
</template>

<script>
/* eslint-disable no-console */

import { mapGetters } from 'vuex'
import CoreFooter from '~/components/core/Footer'
import CoreAppBar from '~/components/core/AppBar'
import CoreDrawer from '~/components/core/Drawer'

export default {
  components: {
    CoreFooter,
    CoreAppBar,
    CoreDrawer
  },

  computed: {
    ...mapGetters(['footer'])
  }
}
</script>
