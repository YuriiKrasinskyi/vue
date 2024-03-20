import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useAssignmentsStore } from './assignments'

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

export const useDriversStore = defineStore('drivers', () => {
  const driversList = ref([
    {
      id: 1,
      name: 'Ivan',
      exp: 12
    },
    {
      id: 2,
      name: 'Petro',
      exp: 23
    }
  ])

  const filter = ref({})

  const getDriverById = computed(
    () => (driverId) => driversList.value.find((driver) => driver.id == driverId)
  )

  const getFilteredList = computed(() =>
    driversList.value.filter((driver) => isMatchFilter(driver, filter.value))
  )

  function deleteDriver(driverId) {
    driversList.value = driversList.value.filter((driver) => driver.id !== driverId)
    useAssignmentsStore().deleteAssignmentByDriverId(driverId)
  }

  function addDriver(driverData) {
    driversList.value.push({
      id: new Date().getTime(),
      ...driverData
    })
  }

  function updateDriver(updateDriverData) {
    const driverIndex = driversList.value.findIndex((driver) => driver.id === updateDriverData.id)
    driversList.value[driverIndex] = updateDriverData
  }

  function setFilter(filterData) {
    filter.value = filterData
  }

  return {
    driversList,
    getDriverById,
    getFilteredList,
    deleteDriver,
    addDriver,
    updateDriver,
    setFilter
  }
})
