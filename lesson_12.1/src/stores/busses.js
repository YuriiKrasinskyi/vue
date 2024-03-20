import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useAssignmentsStore } from './assignments'

export const useBussesStore = defineStore('busses', () => {
  const bussesList = ref([
    {
      id: 1,
      number: 'AO2312HA',
      placesNumber: 40
    },
    {
      id: 2,
      number: 'AO7416HA',
      placesNumber: 30
    }
  ])

  const getBusById = computed(() => (busId) => bussesList.value.find((bus) => bus.id == busId))

  function deleteBus(busId) {
    bussesList.value = bussesList.value.filter((bus) => bus.id !== busId)
    useAssignmentsStore().deleteAssignmentByBusId(busId)
  }

  function addBus(busData) {
    bussesList.value.push({
      id: new Date().getTime(),
      ...busData
    })
  }

  function updateBus(updateBusData) {
    const busIndex = bussesList.value.findIndex((bus) => bus.id == updateBusData.id)
    bussesList.value[busIndex] = updateBusData
  }
  return { bussesList, getBusById, deleteBus, addBus, updateBus }
})
