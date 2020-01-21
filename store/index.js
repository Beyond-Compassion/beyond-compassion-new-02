/* eslint-disable no-console */
import { pick, map } from 'ramda'
import { set, toggle, commitTimeout } from '~/utils/vuex'

export const state = () => ({
  story: null,
  drawer: null,
  imageDialog: false

})

export const mutations = {
  setStory: set('story'),
  setDrawer: set('drawer'),
  toggleDrawer: toggle('drawer'),
  setImageDialog: set('imageDialog'),
  toggleImageDialog: toggle('imageDialog')
}

export const actions = {
  // NOTE: nuxtServerInit must return a promise according to docs
  nuxtServerInit ({ dispatch }, context) {
    return dispatch('fetchStory', context)
  },

  fetchStory ({ commit }, context) {
    // check if we are in the editor mode
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    const routeName = context.app.router.app.context.route.name

    // load the JSON from the API
    return context.app.$storyapi.get(`cdn/stories/${routeName}?resolve_relations=global_reference.reference`, {
      version
    }).then((res) => {
      commitTimeout(() => commit('setStory', res.data.story))
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  }
}

export const getters = {
  footer (state) {
    if (state.story && state.story.content.footer) {
      return pick(
        ['footerLinks', 'legalTop', 'legalBottom', 'email'],
        state.story.content.footer[0].reference.content.global[0]
      )
    }

    return null
  },

  quoteBanner (state) {
    if (state.story && state.story.content.quoteBanner) {
      return pick(
        ['author', 'title', 'body'],
        state.story.content.quoteBanner[0]
      )
    }

    return null
  },

  pageBanner (state) {
    if (state.story && state.story.content.pageBanner) {
      return pick(
        ['subTitle', 'title', 'heroImage'],
        state.story.content.pageBanner[0]
      )
    }

    return null
  },

  ctaBanner (state) {
    if (state.story && state.story.content.ctaBanner) {
      return pick(
        ['body'],
        state.story.content.ctaBanner[0]
      )
    }

    return null
  },

  missionSection (state) {
    if (state.story && state.story.content.missionSection) {
      return pick(
        ['items'],
        state.story.content.missionSection[0]
      )
    }

    return null
  },

  projectsSection (state) {
    if (state.story && state.story.content.projectsSection) {
      return pick(
        ['items'],
        state.story.content.projectsSection[0]
      )
    }

    return null
  },

  eventMedia (state) {
    if (state.story && state.story.content.eventMedia) {
      return map(
        pick(['eventName', 'file']),
        state.story.content.eventMedia
      )
    }

    return null
  }
}
