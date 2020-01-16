/* eslint-disable no-console */
export const state = () => ({
  counter: 0,
  story: null
})

export const mutations = {
  increment (state) {
    state.counter++
  },

  setStory (state, story) {
    console.log('setStory called')
    state.story = story
  }
}

export const actions = {
  // NOTE: nuxtServerInit must return a promise according to docs
  nuxtServerInit ({ dispatch }, context) {
    return dispatch('fetchStory', context)
  },

  fetchStory ({ commit }, context) {
    // Check if we are in the editor mode
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    // Load the JSON from the API
    return context.app.$storyapi.get(`cdn/stories/index?resolve_relations=global_reference.reference`, {
      version
    }).then((res) => {
      commit('setStory', res.data.story)
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  }
}

export const getters = {
  footer (state) {
    return state.story.content.footer[0].reference.content.global[0]
  }
}
