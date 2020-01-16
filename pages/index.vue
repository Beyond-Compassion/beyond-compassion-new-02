<template>
  <div>
    <core-quote-banner v-bind="quoteBanner" />
    <core-cta-banner v-bind="ctaBanner" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CoreQuoteBanner from '~/components/core/QuoteBanner'
import CoreCtaBanner from '~/components/core/CtaBanner'

export default {
  components: {
    CoreQuoteBanner,
    CoreCtaBanner
  },

  computed: {
    ...mapGetters(['quoteBanner', 'ctaBanner'])
  }
}
</script>
