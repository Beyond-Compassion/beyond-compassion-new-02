<template>
  <v-container class="greyDark--text pt-5">
    <v-layout
      justify-center
      align-center
      wrap
    >
      <v-flex
        :class="{'mb-12': true, 'mt-12': true, 'mr-4': $breakpoint.xs}"
        xs12
        sm8
        md6
      >
        <div
          :class="[dark ? 'alpha-testimonial--dark' : '']"
          class="alpha-testimonial"
        >
          <div class="alpha-testimonial__content">
            <v-icon
              :dark="dark"
              x-large
              class="primary--text"
            >
              {{ mdiFormatQuoteOpen }}
            </v-icon>
            <p v-text="body" />
          </div>
          <footer>
            <div
              :class="[dark ? 'white' : 'primary']"
              class="alpha-testimonial__footer-bar"
            />
            <div
              v-text="author"
              class="headline"
            />
            <div
              v-text="title"
              class="title"
            />
          </footer>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mdiFormatQuoteOpen } from '@mdi/js'

export default {

  props: {
    author: {
      type: String,
      default: ''
    },
    dark: Boolean,
    body: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      mdiFormatQuoteOpen
    }
  }
}
</script>

<style lang="sass">
.alpha-testimonial__content
  align-items: flex-start
  display: flex
  justify-content: space-between

.alpha-testimonial__footer-bar
  height: 4px
  margin: 20px 0 20px auto
  width: 100px

.alpha-testimonial
  .v-icon
    justify-content: flex-end
    flex: 0 1 10%
    margin-top: -8px
    transform: rotate(180deg)

  p
    flex: 1 1 85%
    line-height: 2

  footer
    flex: 1 0 auto
    text-align: right
    .title
      font-weight: 300

.alpha-testimonial--dark
  color: #fff

</style>
