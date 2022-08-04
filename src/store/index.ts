import { createStore } from 'vuex'
import text from './modules/text' 

import getters from './getters'
import mutations from './mutations'

export default createStore({
  modules: { 
   text,
  },
  getters,
  mutations
})