// NOTE: copied from https://gist.github.com/douira/6d3f99fa4546adee470637467931ed19

import Vue from 'vue'

// the properties of breakpoint that we want to mirror
const defaults = {
  xs: true,
  xsOnly: true,
  xsAndUp: true,
  sm: false,
  smOnly: false,
  smAndDown: true,
  smAndUp: false,
  md: false,
  mdOnly: false,
  mdAndDown: true,
  mdAndUp: false,
  lg: false,
  lgOnly: false,
  lgAndDown: true,
  lgAndUp: false,
  xl: false,
  xlOnly: false,
  xlAndDown: true
}

// create a property on the prototype of all instances that holds the breakpoint state
Vue.prototype.$breakpoint = new Vue({
  data: () => ({ ...defaults })
})

// eslint-disable-next-line require-await
export default async function ({ app }) {
  // init mixins and the watchers if it doesn't exist yet
  app.mixins = app.mixins || []
  app.watch = app.watch || {}

  // create a watcher for each breakpoint
  for (const prop in defaults) {
    // the watcher sets the breakpoint prop to cause an update
    app.watch[`$vuetify.breakpoint.${prop}`] = function (value) {
      // update our mirrored value properly
      this.$breakpoint[prop] = value
    }
  }

  // add a mixing that does the client prop setting
  app.mixins.push({
    // here is the magic, if the set the state with the correct value on client init it works
    mounted () {
      // for all props that we are processing
      for (const prop in defaults) {
        // set the initial value from vuetify
        this.$breakpoint[prop] = this.$vuetify.breakpoint[prop]
      }
    }
  })
}
