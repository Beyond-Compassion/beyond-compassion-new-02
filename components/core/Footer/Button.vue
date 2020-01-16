<template>
  <!-- MIKE: i should be able to find a way to get v-on to work properly without
doing this random attrs thing -->
  <v-btn
    v-bind="$attrs"
    :ripple="false"
    v-on="$attrs.on"
    class="mx-3 white--text"
    icon
  >
    <v-icon medium>
      {{ icon }}
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
