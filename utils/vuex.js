export const set = property => (state, payload) => (state[property] = payload)

export const toggle = property => state => (state[property] = !state[property])

// hack to fix transitions, taken from
// https://github.com/nuxt/nuxt.js/issues/4132#issuecomment-511295083
export const commitTimeout = (f) => {
  if (process.client) {
    setTimeout(() => {
      f()
    }, 0)
  } else {
    f()
  }
}
