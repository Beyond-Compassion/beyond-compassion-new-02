<template>
  <div>
    <core-page-banner
      v-if="pageBanner"
      v-bind="pageBanner"
    />

    <v-container fill-height>
      <v-layout
        justify-center
        align-center
        wrap
      >
        <v-flex
          xs12
          class="text-center"
        >
          <core-media-dialog
            :current-image="currentImage"
            :video="currentVideo"
          />
        </v-flex>

        <v-flex
          xs11
          class="mb-5"
        >
          <core-gallery
            :categories="categories"
            :mediaItems="computedMediaItems"
            @selectImg="handleSelectImg"
          />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { map, lensProp, set } from 'ramda'
import CoreGallery from '~/components/core/Gallery.vue'
import CorePageBanner from '~/components/core/PageBanner'
import CoreMediaDialog from '~/components/core/MediaDialog'

const categoriesLens = lensProp('categories')

export default {
  components: {
    CoreGallery,
    CorePageBanner,
    CoreMediaDialog
  },

  data () {
    return {
      currentImage: '',
      currentVideo: ''
    }
  },

  computed: {
    ...mapGetters(['pageBanner', 'eventMedia']),

    categories () {
      return [
        {
          text: 'All',
          filter: null
        },
        {
          text: '2018 Holiday Celebration',
          filter: 1
        }
      ]
    },

    computedMediaItems () {
      return map(
        set(categoriesLens, [1]),
        this.eventMedia
      )
    }
  },

  fetch (context) {
    return context.store.dispatch('fetchStory', context)
  },

  methods: {
    handleSelectImg ({ img, video }) {
      this.currentImage = img
      this.currentVideo = video
      this.dialog = true
    },

    setCurrentImage (image) {
      this.currentImage = image
    }
  }
}
</script>
