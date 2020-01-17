<template>
  <div>
    <v-carousel
      v-bind="$attrs"
      :height="height"
      :hide-delimiters="hideDelimiters || items.length <= 1"
      v-on="$listeners"
      class="elevation-0"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :gradient="gradient"
        :height="height"
        :src="item === Object(item) ? item.src : item"
        v-bind="item === Object(item) ? item.bind || {} : {}"
      >
        <slot
          :index="i"
          :item="item"
        />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
// Components
// import { VCarousel, VCarouselItem } from 'vuetify/lib'

export default {
  // components: {
  //   VCarousel,
  //   VCarouselItem
  // },

  inheritAttrs: false,

  props: {
    delimiterIcon: {
      type: String,
      default: 'mdi-minus'
    },
    gradient: {
      type: String,
      default: undefined
    },
    height: {
      type: [Number, String],
      default: 600
    },
    hideControls: {
      type: Boolean,
      default: false
    },
    hideDelimiters: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: () => ([])
    },
    timeout: {
      type: [Number, String],
      default: 10000
    }
  }
}
</script>
