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

export default {
  // metaInfo: {
  //   title: 'Gallery',
  //   meta: [
  //     {
  //       name: 'description',
  //       content: 'Customized vue-cli templates for Vue and Vuetify'
  //     }
  //   ]
  // },

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
      const categoriesLens = lensProp('categories')

      return map(
        set(categoriesLens, [1]),
        this.eventMedia
      )
    },

    projects () {
      return [
        {
          name: 'event-2019-002',
          img: 'event-2019-002.jpg',
          categories: [1]
        },
        {
          name: 'event-2019-003',
          img: 'event-2019-003.jpg',
          categories: [1]
        },
        {
          name: 'event-2019-004',
          img: 'event-2019-004.jpg',
          categories: [1]
        },
        {
          name: 'event-2019-005',
          img: 'event-2019-005.jpg',
          categories: [1]
        },
        {
          name: 'event-2019-006',
          img: 'event-2019-006.jpg',
          categories: [1]
        },
        {
          name: 'event-2019-001 video',
          img: 'event-2019-001-thumbnail.jpg',
          video: 'event-2019-001.mp4',
          categories: [1]
        }
      ]
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
