<template>
  <v-fade-transition mode="out-in">
    <!-- gradient="to top, rgba(240, 180, 41, .6), rgba(43, 176, 237, .7)" -->
    <!-- gradient="to bottom, rgb(240, 180, 41, .9), rgba(24, 111, 175, .2) 40%" -->
    <!-- rgba(19, 66, 101, .55) 80% -->
    <v-img
      :gradient="gradient"
      :src="heroImage"
      height="70vh"
      position="bottom"
    >
      <v-container
        fill-height
      >
        <v-layout align-center>
          <v-flex
            text-center
          >
            <h1
              :class="titleClass"
            >
              {{ title | titleCase }}
            </h1>
            <div
              v-if="subTitle"
              class="body white--text"
            >
              {{ subTitle | sentenceCase }}
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
  </v-fade-transition>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    subTitle: {
      type: String,
      default: null
    },
    heroImage: {
      type: String,
      default: 'https://res.cloudinary.com/dscfugb4z/image/upload/v1579152598/Static/beyond-compassion/blank-hero-003_twpuku.jpg'
    }
  },

  data: () => ({
    isBooted: false
  }),

  computed: {
    titleClass () {
      return {
        'display-2': this.$breakpoint.xs,
        'display-3': this.$breakpoint.smAndUp,
        'mb-2': this.$breakpoint.xs,
        'mb-5': this.$breakpoint.smAndUp,
        'white--text': true
      }
    },

    gradient () {
      // if (this.$vuetify.breakpoint.xs) {
      //   return 'to bottom, rgba(240, 244, 248, 1), 30%, rgba(33, 111, 171, .8) 55%, rgba(21, 65, 98, .8) 90%'
      // }

      // return 'to bottom, rgba(240, 244, 248, 1), 15%, rgba(33, 111, 171, .8) 40%, rgba(21, 65, 98, .8) 90%'
      return 'to bottom, rgba(240, 244, 248, 1), 30%, rgba(33, 111, 171, .8) 55%, rgba(21, 65, 98, .8) 90%'
    }
  },

  mounted () {
    setTimeout(() => {
      this.isBooted = true
    }, 0)
  }
}
</script>
