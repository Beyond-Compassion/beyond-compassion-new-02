<template>
  <v-card class="alpha-gallery">
    <v-tabs>
      <v-tab
        v-for="(category, i) in categories"
        :key="i"
        @click="select(category)"
      >
        <span v-text="category.text" />
      </v-tab>
    </v-tabs>
    <v-container
      :grid-list-sm="$breakpoint.xs"
      :grid-list-md="$breakpoint.smAndUp"
      fluid
      style="min-height: 450px"
    >
      <transition-group
        tag="v-layout"
        name="fade-transition"
        class="wrap child-flex"
      >
        <v-flex
          v-for="mediaItem in computedMediaItems"
          :key="mediaItem.file"
          sm2
          xs3
          gallery-card
        >
          <slot
            v-if="$scopedSlots.default"
            :mediaItem="mediaItem"
          />
          <v-img
            v-else
            v-ripple
            :src="mediaItem.file"
            :style="{cursor: 'pointer'}"
            @click="handleSelectImg(mediaItem.file, mediaItem.video)"
            hover
            class="white--text"
            aspect-ratio="1"
            gradient="to top, rgba(200, 200, 200, 1), rgba(200, 200, 200, .4), rgba(200, 200, 200, 0), rgba(200, 200, 200, 0)"
          >
            <v-layout
              :style="{ position: 'relative', right: '13px' }"
              justify-end
              align-end
              fill-height
            >
              <v-icon
                x-large
                color="primaryDark"
              >
                {{ mediaItem.video ? mdiVideo : mdiCamera }}
              </v-icon>
            </v-layout>
          </v-img>
        </v-flex>
      </transition-group>
    </v-container>
  </v-card>
</template>

<script>
import { map, lensProp, set, pipe } from 'ramda'
import { mdiVideo, mdiCamera } from '@mdi/js'
import { mapMutations } from 'vuex'

export default {
  name: 'CoreGallery',

  props: {
    categories: {
      type: Array,
      default: () => []
    },
    mediaItems: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      selectedCategory: null,
      mdiVideo,
      mdiCamera
    }
  },

  computed: {
    computedMediaItems () {
      const ret = !this.selectedCategory
        ? this.mediaItems
        : this.mediaItems.filter(p => p.categories.includes(this.selectedCategory))

      const fileLens = lensProp('file')
      const videoLens = lensProp('video')

      return map(
        (mediaItem) => {
          // MIKE: this needs to match other video extentions - not just mp4
          if (mediaItem.file.match(/\.[0-9a-z]+$/i)[0] === '.mp4') {
            return pipe(
              set(
                fileLens,
                // eslint-disable-next-line no-useless-escape
                // `${mediaItem.file.match(/([^\/]+)(?=\.\w+$)/)[0]}.jpg`
                `${mediaItem.file.replace('.mp4', '.jpg')}`
              ),
              set(
                videoLens,
                mediaItem.file
              )
            )(mediaItem)
          } else {
            return mediaItem
          }
        },
        ret
      )
    }
  },

  methods: {
    ...mapMutations(['toggleImageDialog']),

    handleSelectImg (img, video) {
      this.toggleImageDialog()
      this.$emit('selectImg', { img, video })
    },

    select (category) {
      this.selectedCategory = category.filter
    }
  }
}
</script>

<style scoped>
.gallery-card {
  transform-origin: center center 0;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}

.fade-transition-leave,
.fade-transition-leave-active,
.fade-transition-leave-to {
  display: none;
}
</style>
