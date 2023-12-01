export default {
    namespaced: true,
    state: {
        assignmentsList: [
            {
                id: 1,
                driverId: 2,
                busId: 1,
            },
            {
                id: 2,
                driverId: 1,
                busId: 2,
            },
        ],
    },
    getters: {
        assignmentsList: ({ assignmentsList }) => assignmentsList,
        getFilledAssignmentsList: (state, getters, rootState, rootGetters) =>
            state.assignmentsList.map((assignment) => ({
                id: assignment.id,
                driverName: rootGetters['drivers/getDriverByID'](assignment.driverId).name,
                busNumber: rootGetters['busses/getBusById'](assignment.busId).number,
            })),
    },
    mutations: {
        deleteAssignment(state, id) {
            state.assignmentsList = state.assignmentsList.filter((assignment) => assignment.id !== id)
        },
        addAssignment(state, assignment) {
            state.assignmentsList.push(assignment)
        },
        deleteAssignmentByBusId(state, busId) {
            state.assignmentsList = state.assignmentsList.filter((assignment) => assignment.busId !== busId)
        },
        deleteAssignmentByDriverId(state, driverId) {
            state.assignmentsList = state.assignmentsList.filter((assignment) => assignment.driverId !== driverId)
        },
    },
    actions: {
        deleteAssignmentByBusId({ commit }, busId) {
            commit('deleteAssignmentByBusId', busId)
        },
        deleteAssignmentByDriverId({ commit }, driverId) {
            commit('deleteAssignmentByDriverId', driverId)
        },
        deleteAssignment({ commit }, id) {
            commit('deleteAssignment', id)
        },
        addAssignment({ commit }, assignmentData) {
            commit('addAssignment', {
                id: new Date().getTime(),
                ...assignmentData,
            })
        },
    },
    modules: {},
}
