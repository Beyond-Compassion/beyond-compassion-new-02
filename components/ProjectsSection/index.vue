<template>
  <core-carousel
    :height="$vuetify.breakpoint.mdAndUp ? 800 : 800"
    :jumbotron="false"
    :items="allProjectPhotos"
    :delimiter-icon="$vuetify.icons.delimiter"
    :hide-delimiters="true"
    :cycle="false"
    @change="setCurrentProjectIndex"
    gradient="to top, rgba(19, 66, 101, .9) 20%, rgba(19, 66, 101, .55) 70%"
    class="mt-3"
    dark
  >
    <project-body v-bind="pick(['title', 'body', 'past'], currentProject)" />
  </core-carousel>
</template>

<script>
import * as R from 'ramda'
import ProjectBody from './ProjectBody'
import CoreCarousel from '~/components/core/Carousel'
import utilMixin from '~/mixins/util'

export default {
  components: {
    CoreCarousel,
    ProjectBody
  },

  mixins: [utilMixin],

  props: {
    items: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      currentProjectIndex: 0
    }
  },

  computed: {
    currentProject () {
      return this.items[this.currentProjectIndex]
    },

    allProjectPhotos () {
      return R.map(R.prop('image'), this.items)
    }
  },

  methods: {
    // MIKE: modify the original component in the alpha plugin instead of
    // using this hack (the new text will change too early and it looks
    // slightly off)
    setCurrentProjectIndex (i) {
      if (i !== undefined) {
        this.currentProjectIndex = i
      }
    }
  }
}
</script>
