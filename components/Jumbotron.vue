<template>
  <v-fade-transition mode="out-in">
    <!-- gradient="to top, rgba(240, 180, 41, .6), rgba(43, 176, 237, .7)" -->
    <!-- gradient="to bottom, rgb(240, 180, 41, .9), rgba(24, 111, 175, .2) 40%" -->
    <!-- rgba(19, 66, 101, .55) 80% -->
    <v-img
      v-if="namespace"
      :key="$route.path"
      :src="heroImage"
      :height="$vuetify.breakpoint.mdAndDown ? '55vh' : '70vh'"
      :gradient="gradient"
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
                text-xs-center
              >
                <h1
                  :class="titleClass"
                  v-html="$options.filters.titleCase(title)"
                />
                <div
                  v-if="subTitle"
                  class="body greyLightest--text"
                  v-html="$options.filters.titleCase(subTitle)"
                />
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
    data: () => ({
      isBooted: false
    }),

    computed: {
      titleClass () {
        return {
          'display-1': this.$vuetify.breakpoint.xs,
          'display-3': this.$vuetify.breakpoint.smAndUp,
          'greyLightest--text': true,
          'font-weight-thin': true
        }
      },

      gradient () {
        // if (this.$vuetify.breakpoint.xs) {
        //   return 'to bottom, rgba(240, 244, 248, 1), 30%, rgba(33, 111, 171, .8) 55%, rgba(21, 65, 98, .8) 90%'
        // }

        // return 'to bottom, rgba(240, 244, 248, 1), 15%, rgba(33, 111, 171, .8) 40%, rgba(21, 65, 98, .8) 90%'
        return 'to bottom, rgba(240, 244, 248, 1), 30%, rgba(33, 111, 171, .8) 55%, rgba(21, 65, 98, .8) 90%'
      },

      isHome () {
        return this.$route.path === '/'
      },
      namespace () {
        return this.$route.name
      },
      title () {
        return this.$t(`${this.namespace}.jumbotronTitle`)
      },
      subTitle () {
        return this.$t(`${this.namespace}.jumbotronSubTitle`)
      },
      heroImage () {
        return `/static/${this.namespace.toLowerCase()}-hero.jpg`
      }
      // heroImage () {
      //   return `/static/shoes-003-BW.png`
      // }
    },

    mounted () {
      setTimeout(() => {
        this.isBooted = true
      }, 200)
    }
  }
</script>
