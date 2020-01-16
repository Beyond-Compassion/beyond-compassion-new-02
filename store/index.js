/* eslint-disable no-console */

import { pick } from 'ramda'

export const state = () => ({
  counter: 0,
  story: null
})

export const mutations = {
  increment (state) {
    state.counter++
  },

  setStory (state, story) {
    console.log('story')
    console.log(story.content.quoteBanner[0])
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
    return pick(
      ['footerLinks', 'legalTop', 'legalBottom', 'email'],
      state.story.content.footer[0].reference.content.global[0]
    )
  },

  quoteBanner (state) {
    return pick(
      ['author', 'title', 'body'],
      state.story.content.quoteBanner[0]
    )
  },

  pageBanner (state) {
    return pick(
      ['subTitle', 'title', 'heroImage'],
      state.story.content.pageBanner[0]
    )
  },

  ctaBanner (state) {
    return pick(
      ['body'],
      state.story.content.ctaBanner[0]
    )
  }
}
