<template>
  <v-app-bar
    v-scroll="onScroll"
    :color="!isScrolling ? 'transparent' : 'greyLightest'"
    elevate-on-scroll
    app
  >
    <v-toolbar-title>
      <nuxt-link
        class="title primaryLight--text"
        tag="span"
        to="/"
      >
        <a :style="{ textDecoration: 'none', position: 'relative', bottom: '5px' }">
          <!-- Beyond Compassion logo -->
          <img
            :style="{ position: 'relative', top: '8px', left: '-5px' }"
            src="~/assets/beyond-compassion-logo-V2-text-light.svg"
            width="160"
          >
        </a>
      </nuxt-link>

      <span class="title primaryLight--text" />
    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
      <!-- navigation buttons -->
      <v-btn
        v-for="(item, i) in items"
        :key="i"
        :to="{ path: item.to, ...(item.hash ? { hash: item.hash } : {}) }"
        class="button-class"
        active-class="primaryLight--text"
        text
        nuxt
      >
        <span v-text="item.text" />
      </v-btn>

      <!-- donate button -->
      <v-btn
        :ripple="{ class: 'primaryLight--text' }"
        :to="{ path: '/donate'}"
        depressed
        color="accentLightest cta"
        class="greyDark--text"
        nuxt
      >
        <span>donate</span>
      </v-btn>
    </v-toolbar-items>
    <v-btn
      @click="toggleDrawer"
      v-else
      icon
    >
      <v-icon color="greyDark">
        mdi-menu
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    isScrolling: false
  }),

  computed: {
    items () {
      return [
        {
          'to': '/',
          'text': 'Home'
        },
        {
          'to': '/',
          'hash': 'mission-section',
          'text': 'Mission'
        },
        {
          'to': '/',
          'hash': 'projects-section',
          'text': 'Projects'
        },
        {
          'to': '/gallery',
          'text': 'Gallery'
        }
      ]
    }
  },

  methods: {
    ...mapMutations(['toggleDrawer']),

    onScroll () {
      this.isScrolling =
        (window.pageYOffset || document.documentElement.scrollTop || 0) > 20
    }
  }
}
</script>

<style scoped>
.button-class {
  color: #243b53;
}
</style>
