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
            :src="video"
            :style="{maxHeight: `${maxHeights[$vuetify.breakpoint.name]}px`}"
          />
        </vue-plyr>

        <v-img
          v-else
          :max-height="maxHeights[$vuetify.breakpoint.name]"
          :src="currentImage"
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

    maxHeights () {
      return {
        xs: 500,
        sm: 500,
        md: 850,
        lg: 850,
        xl: 850
      }
    }
  },

  watch: {
    imageDialog (newVal) {
      if (!newVal) {
        if (this.isVideo) {
          this.stopPlayer()
        }
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
