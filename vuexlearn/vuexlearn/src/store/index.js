import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

import mapState from 'vuex'

Vue.use(Vuex)

const state = {
   name:"stateName",
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})