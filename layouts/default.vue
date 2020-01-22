<template>
  <v-app>
    <core-app-bar />

    <core-drawer />

    <v-content class="pt-0">
      <nuxt />
    </v-content>

    <!-- NOTE: adding "app" to this also adds the "fixed" prop with no easy way to
    remove the associated class -->
    <core-footer
      v-if="footer"
      v-bind="footer"
    />
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

  head () {
    return {
      title: this.meta.title,
      meta: [
        {
          name: 'description',
          hid: 'description',
          content: this.$options.filters.sentenceCase(this.meta.description)
        },
        // Open Graph
        {
          name: 'og:title',
          hid: 'og:title',
          content: this.$options.filters.titleCase(this.meta.title)
        },
        {
          name: 'og:site_name',
          hid: 'og:site_name',
          content: 'Beyond Compassion'
        },
        {
          name: 'og:description',
          hid: 'og:description',
          content: this.$options.filters.sentenceCase(this.meta.description)
        },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://bccharity.org' },
        { name: 'og:image', content: this.meta.ogImage }
      ]
    }
  },

  computed: {
    ...mapGetters(['footer', 'meta'])
  }
}
</script>
