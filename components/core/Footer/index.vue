<template>
  <v-footer
    :app="$attrs.app"
    :fixed="false"
    padless
  >
    <v-card
      flat
      tile
      color="greyDark"
      class="white--text text-center"
      width="100%"
    >
      <v-card-text>
        <template v-for="footerLink in footerLinks">
          <footer-button
            v-if="notNilOrEmpty(footerLink.link)"
            :key="footerLink.name"
            :icon="notNilOrEmpty(footerLink.icon) ? footerLink.icon : defaultIcon"
            :href="footerLink.link"
            target="_blank"
          />

          <v-tooltip
            v-else
            :key="footerLink.name"
            top
          >
            <template v-slot:activator="{ on }">
              <footer-button
                :key="footerLink.name"
                :icon="notNilOrEmpty(footerLink.icon) ? footerLink.icon : defaultIcon"
                :on="on"
              />
            </template>

            <span>{{ `official ${footerLink.name}` | titleCase }} coming soon!</span>
          </v-tooltip>
        </template>
      </v-card-text>

      <v-card-text class="white--text">
        If you have any questions, please send us an email
        <a
          :href="`mailto:${email}`"
          class="white--text"
        >here</a>
        to get in touch
      </v-card-text>

      <template v-if="notNilOrEmpty(legalTop || legalBottom)">
        <v-divider />

        <v-card-text class="white--text">
          <span v-if="notNilOrEmpty(legalTop)">{{ legalTop }}</span>

          <template v-if="notNilOrEmpty(legalBottom)">
            <br>
            <span>{{ legalBottom }}</span>
          </template>
        </v-card-text>
      </template>
    </v-card>
  </v-footer>
</template>

<script>
import FooterButton from './Button'
import utilMixin from '~/mixins/util'

export default {
  components: {
    FooterButton
  },

  mixins: [utilMixin],

  props: {
    footerLinks: {
      type: Array,
      default: () => []
    },
    legalTop: {
      type: String,
      default: null
    },
    legalBottom: {
      type: String,
      default: null
    },
    email: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      defaultIcon: 'file-cancel-outline'
    }
  }
}
</script>
