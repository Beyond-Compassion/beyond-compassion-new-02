/* eslint-disable no-console */
import { pick } from 'ramda'
import { set, toggle } from '~/utils/vuex'

export const state = () => ({
  counter: 0,
  story: null,
  drawer: null
})

export const mutations = {
  increment (state) {
    state.counter++
  },

  setStory: set('story'),
  setDrawer: set('drawer'),
  toggleDrawer: toggle('drawer')
}

export const actions = {
  // NOTE: nuxtServerInit must return a promise according to docs
  nuxtServerInit ({ dispatch }, context) {
    // console.log('context:')
    // console.log(context)

    return dispatch('fetchStory', context)
  },

  fetchStory ({ commit }, context) {
    // Check if we are in the editor mode
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    const routeName = context.app.router.app.context.route.name

    // Load the JSON from the API
    return context.app.$storyapi.get(`cdn/stories/${routeName}?resolve_relations=global_reference.reference`, {
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
    if (state.story.content.quoteBanner) {
      return pick(
        ['author', 'title', 'body'],
        state.story.content.quoteBanner[0]
      )
    }

    return null
  },

  pageBanner (state) {
    return pick(
      ['subTitle', 'title', 'heroImage'],
      state.story.content.pageBanner[0]
    )
  },

  ctaBanner (state) {
    if (state.story.content.ctaBanner) {
      return pick(
        ['body'],
        state.story.content.ctaBanner[0]
      )
    }

    return null
  },

  missionSection (state) {
    if (state.story.content.missionSection) {
      return pick(
        ['items'],
        state.story.content.missionSection[0]
      )
    }

    return null
  },

  projectsSection (state) {
    if (state.story.content.projectsSection) {
      return pick(
        ['items'],
        state.story.content.projectsSection[0]
      )
    }

    return null
  }
}
