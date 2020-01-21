<template>
  <v-dialog
    v-model="inputValue"
  >
    <v-layout
      @click="handleClick"
      justify-center
    >
      <v-flex
        :xs11="!isVideo"
        :xs12="isVideo"
      >
        <vue-plyr
          ref="plyr"
          v-if="isVideo"
        >
          <video
            :src="`/static/${video}`"
            :style="{maxHeight: `${maxHeights[$breakpoint.name]}px`}"
          />
        </vue-plyr>

        <v-img
          v-else
          :max-height="maxHeights[$breakpoint.name]"
          :src="`/static/${currentImage}`"
          contain
        />
      </v-flex>
    </v-layout>
  </v-dialog>
</template>

<script>
import { isNilOrEmpty } from 'ramda-adjunct'
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    currentImage: {
      type: String,
      required: true
    },
    video: {
      type: String,
      required: false,
      default: ''
    }
  },

  computed: {
    ...mapState(['imageDialog']),

    inputValue: {
      get () {
        return this.imageDialog
      },
      set (val) {
        this.setImageDialog(val)
      }
    },

    isVideo () {
      return !isNilOrEmpty(this.video)
    },

    currentImageExtension () {
      return this.currentImage.split('.').pop()
    },

    maxHeights () {
      return {
        xs: 500,
        sm: 500,
        md: 900,
        lg: 900,
        xl: 900
      }
    }
  },

  watch: {
    imageDialog (newVal) {
      if (!newVal) {
        this.stopPlayer()
      }
    }
  },

  methods: {
    ...mapMutations(['setImageDialog', 'toggleImageDialog']),

    handleClick () {
      if (!this.isVideo) {
        this.toggleImageDialog()
      }
    },

    stopPlayer () {
      this.$refs.plyr.player.stop()
    }
  }
}
</script>

<style lang="sass">
// .v-dialog--active {
// box-shadow: unset !important;
// -webkit-box-shadow: unset !important;
// }
.v-dialog
  box-shadow: unset !important
  -webkit-box-shadow: unset !important
</style>
