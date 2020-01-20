<template>
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
        <p class="mx-7" :style="{ lineHeight: '2.8rem' }">
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
        <!-- <p>
          <v-btn
            :ripple="{ class: 'primaryLight--text' }"
            :loading="loading"
            @click="loading = !loading"
            large
            color="accentLightest"
            class="greyDark--text cta"
            href="https://www.paypal.me/beyondcompassion"
          >
            <v-icon> {{ mdiPaypal }} </v-icon>
          </v-btn>
        </p> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mdiPaypal } from '@mdi/js'

export default {
  // metaInfo: {
  //   title: 'Beyond Compassion',
  //   meta: [{ name: 'description', content: 'A pretty cool NPO' }]
  // },

  data: () => ({
    loading: false,
    mdiPaypal
  }),

  computed: {
    titleClass () {
      return {
        'display-2': this.$breakpoint.xs,
        'display-3': this.$breakpoint.smAndUp,
        'mb-12': true,
        'px-7': true
      }
    }
  }
}
</script>
