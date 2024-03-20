import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { useBussesStore } from './busses'
import { useDriversStore } from './drivers'

export const useAssignmentsStore = defineStore('assignments', () => {
  const assignmentsList = ref([
    {
      id: 1,
      driverId: 2,
      busId: 1
    },
    {
      id: 2,
      driverId: 1,
      busId: 2
    }
  ])

  const getFilledAssignmentsList = computed(() => {
    // const bussesStore = useBussesStore()
    // const driversStore = useDriversStore()
    return assignmentsList.value.map((assignment) => ({
      id: assignment.id,
      driverName: useDriversStore().getDriverById(assignment.driverId).name,
      busNumber: useBussesStore().getBusById(assignment.busId).number
    }))
  })

  function deleteAssignment(assignmentId) {
    assignmentsList.value = assignmentsList.value.filter(
      (assignment) => assignment.id !== assignmentId
    )
  }

  function deleteAssignmentByBusId(busId) {
    assignmentsList.value = assignmentsList.value.filter((assignment) => assignment.busId !== busId)
  }

  function deleteAssignmentByDriverId(driverId) {
    assignmentsList.value = assignmentsList.value.filter(
      (assignment) => assignment.driverId !== driverId
    )
  }

  function addAssignment(assignment) {
    assignmentsList.value.push({
      id: new Date().getTime(),
      ...assignment
    })
  }

  return {
    assignmentsList,
    getFilledAssignmentsList,
    deleteAssignment,
    deleteAssignmentByBusId,
    deleteAssignmentByDriverId,
    addAssignment
  }
})
