<template>
  <div>
    <!-- quote section -->
    <v-container
      fill-height
      class="greyDark--text pt-5"
    >
      <v-layout
        justify-center
        align-center
        wrap
      >
        <v-flex
          :class="{'mb-12': true, 'mt-12': true, 'mr-4': $vuetify.breakpoint.xs}"
          xs12
          sm8
          md6
        >
          <core-quote-banner
            :author="quote.author"
            :title="quote.title"
            :body="quote.body"
          />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CoreQuoteBanner from '~/components/core/QuoteBanner'

export default {
  components: {
    CoreQuoteBanner
  },

  computed: {
    ...mapGetters({ quote: 'quoteBanner' })
  }
}
</script>
