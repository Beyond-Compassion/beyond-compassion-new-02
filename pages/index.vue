<template>
  <div>
    <core-quote-banner
      v-if="quoteBanner"
      v-bind="quoteBanner"
    />
    <core-cta-banner
      v-if="ctaBanner"
      v-bind="ctaBanner"
    />
    <mission-section
      id="mission-section"
      v-if="missionSection"
      v-bind="missionSection"
      :titleClass="titleClass"
    />
    <projects-section
      id="projects-section"
      v-if="projectsSection"
      v-bind="projectsSection"
    />
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
    ...mapGetters([
      'quoteBanner',
      'ctaBanner',
      'missionSection',
      'projectsSection'
    ]),

    titleClass () {
      return {
        'display-2': this.$breakpoint.xs,
        'display-3': this.$breakpoint.smAndUp
      }
    }
  },

  fetch (context) {
    return context.store.dispatch('fetchStory', context)
  }
}
</script>
