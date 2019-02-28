import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

import mapState from 'vuex'

Vue.use(Vuex)

const state = {
   name:"stateName",
   num:1,
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})