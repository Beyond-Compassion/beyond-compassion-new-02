<template>
  <div>
    <core-quote-banner v-bind="quoteBanner" />
    <core-cta-banner v-bind="ctaBanner" />
    <mission-section
      v-bind="missionSection"
      :titleClass="titleClass"
    />
    <projects-section v-bind="projectsSection" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CoreQuoteBanner from '~/components/core/QuoteBanner'
import CoreCtaBanner from '~/components/core/CtaBanner'
import MissionSection from '~/components/MissionSection'
import ProjectsSection from '~/components/ProjectsSection'

export default {
  components: {
    CoreQuoteBanner,
    CoreCtaBanner,
    MissionSection,
    ProjectsSection
  },

  computed: {
    ...mapGetters(['quoteBanner', 'ctaBanner', 'missionSection', 'projectsSection']),

    titleClass () {
      return {
        'display-2': this.$vuetify.breakpoint.xs,
        'display-3': this.$vuetify.breakpoint.smAndUp,
        'font-weight-thin': true
      }
    }
  }
}
</script>
