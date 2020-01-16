<template>
  <v-fade-transition mode="out-in">
    <!-- gradient="to top, rgba(240, 180, 41, .6), rgba(43, 176, 237, .7)" -->
    <!-- gradient="to bottom, rgb(240, 180, 41, .9), rgba(24, 111, 175, .2) 40%" -->
    <!-- rgba(19, 66, 101, .55) 80% -->
    <v-img
      :key="$route.path"
      :height="$vuetify.breakpoint.xs ? '150px' : '200px'"
      :gradient="gradient"
      :src="backgroundImage"
      position="bottom"
    >
      <v-fade-transition mode="out-in">
        <v-container
          v-if="isBooted"
          :key="$route.path"
          fill-height
        >
          <v-layout align-center>
            <v-fade-transition mode="out-in">
              <v-flex
                :key="$route.path"
                text-center
              >
                <div
                  class="body-1 greyLightest--text"
                >
                  {{ body | sentenceCase }}<div />
                  <v-btn
                    :ripple="{ class: 'primaryLight--text' }"
                    x-large
                    tile
                    color="accentLightest"
                    class="greyDark--text cta mt-3"
                  >
                    <!-- to="/donate" -->
                    {{ buttonText }}
                  </v-btn>
                </div>
              </v-flex>
            </v-fade-transition>
          </v-layout>
        </v-container>
      </v-fade-transition>
    </v-img>
  </v-fade-transition>
</template>

<script>
export default {
  props: {
    body: {
      type: String,
      default: null
    }
  },

  data: () => ({
    isBooted: false,
    backgroundImage:
      'https://res.cloudinary.com/dscfugb4z/image/upload/v1579152598/Static/beyond-compassion/blank-hero-003_twpuku.jpg',
    gradient: 'to top, #243B53, #243B53',
    buttonText: 'donate now'
  }),

  computed: {
    titleClass: () => ({
      'display-1': this.$vuetify.breakpoint.xs,
      'display-3': this.$vuetify.breakpoint.smAndUp,
      'white--text': true,
      'font-weight-thin': true
    })
  },

  mounted () {
    setTimeout(() => {
      this.isBooted = true
    }, 200)
  }
}
</script>
