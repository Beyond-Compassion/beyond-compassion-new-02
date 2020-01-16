<template>
  <v-flex
    xs10
    lg4
    class="mt-8 mb-1"
  >
    <v-layout
      row
      wrap
      class="text-center"
    >
      <!-- image -->
      <v-flex xs12>
        <v-layout
          row
          wrap
          align-center
          justify-space-around
        >
          <v-flex
            xs4
            sm2
            md3
            lg4
          >
            <v-img :src="image" />
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- text -->
      <v-flex xs12>
        <v-layout
          row
          wrap
          align-center
          justify-space-around
        >
          <v-flex
            xs10
            sm6
            md7
          >
            <p class="headline px-5">
              {{ title | titleCase }}
            </p>
            <p>
              {{ body }}
            </p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-flex>
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
    image: {
      type: String,
      required: true
    }
  }
}
</script>
