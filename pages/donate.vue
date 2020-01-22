<template>
  <div>
    <core-page-banner
      v-if="pageBanner"
      v-bind="pageBanner"
    />

    <v-container
      fill-height
      class="greyDark--text"
    >
      <v-layout
        justify-center
        align-center
        wrap
        class="py-12"
      >
        <v-flex
          xs12
          class="text-center"
        >
          <p :class="titleClass">
            {{ 'Ways to Donate' }}
          </p>
          <p
            :style="{ lineHeight: '2.8rem' }"
            class="mx-7"
          >
            Click here to donate through our paypal:
            <v-btn
              :ripple="{ class: 'primaryLight--text' }"
              :loading="loading"
              @click="loading = !loading"
              x-large
              color="accentLightest"
              class="greyDark--text cta ml-3"
              href="https://www.paypal.me/beyondcompassion"
              fab
            >
              <v-icon large>
                {{ mdiPaypal }}
              </v-icon>
            </v-btn>
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mdiPaypal } from '@mdi/js'
import { mapGetters } from 'vuex'
import CorePageBanner from '~/components/core/PageBanner'

export default {
  components: {
    CorePageBanner
  },

  data: () => ({
    loading: false,
    mdiPaypal
  }),

  computed: {
    ...mapGetters(['pageBanner']),

    titleClass () {
      return {
        'display-2': this.$breakpoint.xs,
        'display-3': this.$breakpoint.smAndUp,
        'mb-12': true,
        'px-7': true
      }
    }
  },

  fetch (context) {
    return context.store.dispatch('fetchStory', context)
  }
}
</script>
