<template>
  <div>
    <core-quote-banner v-bind="quoteBanner" />
    <core-cta-banner v-bind="ctaBanner" />
    <mission-section
      v-bind="missionSection"
      :titleClass="titleClass"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CoreQuoteBanner from '~/components/core/QuoteBanner'
import CoreCtaBanner from '~/components/core/CtaBanner'
import MissionSection from '~/components/MissionSection'

export default {
  components: {
    CoreQuoteBanner,
    CoreCtaBanner,
    MissionSection
  },

  computed: {
    ...mapGetters(['quoteBanner', 'ctaBanner', 'missionSection']),

    titleClass () {
      return {
        'display-1': this.$vuetify.breakpoint.xs,
        'display-3': this.$vuetify.breakpoint.smAndUp,
        'font-weight-thin': true
      }
    }
  }
}
</script>
