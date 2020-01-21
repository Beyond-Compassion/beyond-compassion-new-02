<template>
  <div>
    <core-page-banner
      v-if="pageBanner"
      v-bind="pageBanner"
    />
    <core-quote-banner
      v-if="quoteBanner"
      v-bind="quoteBanner"
    />
    <core-cta-banner
      v-if="ctaBanner"
      v-bind="ctaBanner"
    />
    <mission-section
      id="mission"
      v-if="missionSection"
      v-bind="missionSection"
      :titleClass="titleClass"
    />
    <projects-section
      id="projects"
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
import CorePageBanner from '~/components/core/PageBanner'

export default {
  components: {
    CoreQuoteBanner,
    CoreCtaBanner,
    MissionSection,
    ProjectsSection,
    CorePageBanner
  },

  computed: {
    ...mapGetters([
      'quoteBanner',
      'ctaBanner',
      'missionSection',
      'projectsSection',
      'pageBanner'
    ]),

    titleClass () {
      return {
        'display-2': this.$breakpoint.xs,
        'display-3': this.$breakpoint.smAndUp
      }
    }
  },

  // transition: {
  //   name: 'v-fade-transition',
  //   mode: 'out-in'
  // },

  // transition: 'v-fade-transition',

  fetch (context) {
    return context.store.dispatch('fetchStory', context)
  }
}
</script>
