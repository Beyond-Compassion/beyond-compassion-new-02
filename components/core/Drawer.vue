<template>
  <v-navigation-drawer
    v-model="inputValue"
    :width="175"
    class="greyLightest greyDark--text"
    temporary
    right
    fixed
  >
    <v-list>
      <v-list-item>
        <v-spacer />
        <v-btn
          @click="toggleDrawer"
          icon
        >
          <v-icon color="greyDark">
            mdi-close
          </v-icon>
        </v-btn>
      </v-list-item>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="{ path: item.to, ...(item.hash ? { hash: item.hash } : {}) }"
        color="primaryDark"
      >
        <v-list-item-title v-text="item.text" />
      </v-list-item>
      <!-- :to="{ path: '/', hash: 'donate-section' }" -->
      <v-list-item
        :to="{ path: '/donate' }"
        class="accentLightest"
        color="primaryDark"
        nuxt
      >
        <v-list-item-title class="greyDark--text">
          Donate
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['drawer']),

    inputValue: {
      get () {
        return this.drawer
      },

      set (val) {
        this.setDrawer(val)
      }
    },

    items () {
      return [
        {
          'to': '/',
          'text': 'Home'
        },
        {
          'to': '/',
          'hash': 'mission',
          'text': 'Mission'
        },
        {
          'to': '/',
          'hash': 'projects',
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
    ...mapMutations(['setDrawer', 'toggleDrawer'])
  }
}
</script>
