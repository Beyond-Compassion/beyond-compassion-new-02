import Vue from 'vue'
import * as R from 'ramda'
import * as filters from './misc'

const registerFilter = (value, key) => Vue.filter(key, value)

const registerFilters = R.forEachObjIndexed(registerFilter)

const setupFilters = () => {
  registerFilters(filters)
}

export default setupFilters
