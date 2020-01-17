<template>
  <!-- <v-container
    grid-list-xs
    fill-height
  > -->
  <v-container
    :grid-list-xs="$vuetify.breakpoint.smAndDown"
    :grid-list-xl="$vuetify.breakpoint.mdAndUp"
    fill-height
  >
    <v-btn
      v-if="$vuetify.breakpoint.xs"
      :style="{bottom: '330px', left: '22px'}"
      color="accentLightest"
      to="/donate"
      class="greyDark--text cta mt-3"
      absolute
      tile
      small
    >
      donate
    </v-btn>

    <v-layout
      :column="$vuetify.breakpoint.xs"
      :justify-end="$vuetify.breakpoint.xs"
      :align-end="$vuetify.breakpoint.smAndUp"
      wrap
    >
      <v-flex
        xs5
        sm6
        xl4
      >
        <v-card
          color="transparent"
          class="elevation-0"
        >
          <v-card-title class="pb-0 px-2">
            <span class="headline greyLightest--text">{{ title | titleCase }}</span>
          </v-card-title>
          <v-card-text class="pb-1 pt-2 px-2">
            <p :class="{'body-2': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.smAndUp, 'greyLightest--text': true}">
              {{ body }}
            </p>
            <!-- <span class="title accentLightest--text">$3,000 </span>
              <span class="body-1 greyLessDark--text">of $10,000</span>
              <v-progress-linear
                background-color="greyLight"
                color="accentLightest"
                value="30"
              /> -->
          </v-card-text>
          <v-card-actions v-if="!past">
            <!-- <v-btn
                flat
                large
                color="primaryLightest"
                depressed
              >
                learn more
              </v-btn> -->
            <v-spacer />
            <v-btn
              v-if="$vuetify.breakpoint.smAndUp"
              large
              tile
              color="accentLightest"
              to="/donate"
              class="greyDark--text cta mt-3"
            >
              donate now
            </v-btn>
            <v-spacer />
            <!-- <v-btn
                color="accentLightest"
                class="greyDark--text mr-2 cta"
                :ripple="{ class: 'primaryLight--text' }"
                depressed
              >
                donate now
              </v-btn> -->
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    past: {
      type: Boolean,
      default: false
    }
  }
}
</script>
