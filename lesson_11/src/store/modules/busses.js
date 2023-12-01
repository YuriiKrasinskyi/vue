export default {
    namespaced: true,
    state: {
        bussesList: [
            { id: 1, number: 'AO1244BA', placesNum: 30 },
            { id: 2, number: 'AO6457KA', placesNum: 40 },
        ],
    },
    getters: {
        bussesList: ({ bussesList }) => bussesList,
        getBusById: (state) => (busId) => state.bussesList.find((bus) => bus.id == busId),
    },
    mutations: {
        deleteBus(state, busId) {
            state.bussesList = state.bussesList.filter((bus) => bus.id !== busId)
        },
        addBus(state, bus) {
            state.bussesList.push(bus)
        },
        updateBus(state, busToUpdate) {
            const busIndex = state.bussesList.findIndex((bus) => bus.id === busToUpdate.id)
            state.bussesList[busIndex] = busToUpdate
        },
    },
    actions: {
        deleteBus({ commit, dispatch }, busId) {
            commit('deleteBus', busId)
            dispatch('assignments/deleteAssignmentByBusId', busId, { root: true })
        },
        addBus({ commit }, busData) {
            commit('addBus', {
                id: new Date().getTime(),
                ...busData,
            })
        },
        updateBus({ commit }, bus) {
            commit('updateBus', bus)
        },
    },
    modules: {},
}
