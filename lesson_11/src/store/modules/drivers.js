function isMatchFilter(driver, filter) {
    if (filter.name) {
        if (!driver.name.toLowerCase().includes(filter.name.toLowerCase())) return false
    }
    if (filter.expMin) {
        if (filter.expMin > driver.exp) return false
    }
    if (filter.expMax) {
        if (filter.expMax < driver.exp) return false
    }
    return true
}
export default {
    namespaced: true,
    state: {
        driversList: [
            { id: 1, name: 'Ivan', exp: 12 },
            { id: 2, name: 'Petro', exp: 23 },
        ],
        filter: {},
    },
    getters: {
        driversList: ({ driversList }) => driversList,
        getFilteredList: (state) => state.driversList.filter((driver) => isMatchFilter(driver, state.filter)),
        getDriverByID: (state) => (driverId) => state.driversList.find((driver) => driver.id == driverId),
    },
    mutations: {
        deleteDriver(state, driverId) {
            state.driversList = state.driversList.filter((driver) => driver.id !== driverId)
        },
        addDriver(state, driver) {
            state.driversList.push(driver)
        },
        updateDriver(state, driverObj) {
            const driverIndex = state.driversList.findIndex((driver) => driver.id == driverObj.id)
            state.driversList[driverIndex] = driverObj
        },
        setFilter(state, filterData) {
            state.filter = filterData
        },
    },
    actions: {
        deleteDriver({ commit, dispatch }, driverId) {
            commit('deleteDriver', driverId)
            dispatch('assignments/deleteAssignmentByDriverId', driverId, { root: true })
        },
        addDriver({ commit }, driverData) {
            commit('addDriver', {
                id: new Date().getTime(),
                ...driverData,
            })
        },
        updateDriver({ commit }, driver) {
            commit('updateDriver', driver)
        },
        setFilter({ commit }, filterData) {
            commit('setFilter', filterData)
        },
    },
    modules: {},
}
