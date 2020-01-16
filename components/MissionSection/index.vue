<template>
  <v-container
    fill-height
    class="greyDark--text py-12"
  >
    <v-layout
      class="py-12"
      justify-center
      align-center
      wrap
    >
      <!-- mission title -->
      <v-flex
        id="mission-section"
        xs12
        class="text-center"
      >
        <span :class="titleClass">
          {{ 'Our Mission' | titleCase }}
        </span>

        <!-- mission body -->
        <v-flex
          xs12
          class="mt-2 mb-5"
        >
          <v-layout
            row
            wrap
            justify-space-around
            fill-height
          >
            <!-- features -->
            <mission-section-feature
              v-for="item in items"
              :key="item.title"
              v-bind="item"
            />
          </v-layout>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MissionSectionFeature from './feature'

export default {
  components: {
    MissionSectionFeature
  },

  props: {
    items: {
      type: Array,
      required: true
    },
    titleClass: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
