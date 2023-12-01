import { createStore } from 'vuex'
import drivers from './modules/drivers'
import busses from './modules/busses'
import assignments from './modules/assignments'

export default createStore({
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        drivers,
        busses,
        assignments,
    },
})
