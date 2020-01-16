<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      flat
      tile
      color="greyDark"
      class="white--text text-xs-center"
      width="100%"
    >
      <v-card-text>
        <template v-for="button in buttons">
          <footer-button
            v-if="!isNilOrEmpty(button.link)"
            :key="button.name"
            :icon="button.icon"
            :href="button.link"
            target="_blank"
          />

          <v-tooltip
            v-else
            :key="button.name"
            top
          >
            <template v-slot:activator="{ on }">
              <footer-button
                :key="button.icon"
                :icon="button.icon"
                :on="on"
              />
            </template>

            <span>{{ `official ${button.name}` | titleCase }} coming soon!</span>
          </v-tooltip>
        </template>

        <!--
        <v-btn
          v-for="button in buttons"
          :key="button.icon"
          class="mx-3 white--text"
          icon
        >
          <v-icon medium>
            {{ button.icon }}
          </v-icon>
        </v-btn> -->
      </v-card-text>

      <!-- <v-card-text class="white--text pt-0"> -->
      <v-card-text class="white--text">
        <!-- Check us out on social media or send us an email -->
        If you have any questions, please send us an email
        <!-- <router-link
          tag="span"
          to="/"
        > -->
        <a
          class="white--text"
          href="mailto:alex@bccharity.org"
        >here</a>
        <!-- </router-link> -->
        to get in touch
      </v-card-text>

      <v-divider />

      <v-card-text class="white--text">
        <span>Beyond compassion is a 501(c)(3) organization. All Donations are TAX EXEMPT</span>
        <br>
        <span>&copy;2019 — <strong>{{ 'beyond compassion' | titleCase }}</strong></span>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import utilMixin from '../../mixins/util'
import FooterButton from './Button'

export default {
  components: {
    FooterButton
  },

  mixins: [
    utilMixin
  ],

  data: () => ({
    iconLinks: [
      {
        icon: 'mdi-facebook-box',
        link: 'https://www.facebook.com/beyondcompassion/',
        name: 'facebook'
      },
      {
        icon: 'mdi-instagram',
        link: 'https://www.instagram.com/beyondcompassion/',
        name: 'instagram'
      },
      {
        icon: 'mdi-twitter-box',
        name: 'twitter'
      },
      {
        icon: 'mdi-linkedin-box',
        name: 'linkedin'
      }
    ]
  })

  // methods: {
  //   handleButtonClick (button) {
  //     if (isNilOrEmpty(button.link)) {
  //       window.location = button.link
  //     } else {

  //     }
  //   }
  // }
}
</script>
