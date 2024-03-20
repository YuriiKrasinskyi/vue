<template>
   <h2>Add assignment</h2>
   <div>
      <label>Driver:
         <select v-model="assignment.driverId">
            <option v-for="driver in driversList" :key="driver.id" :value="driver.id">
               {{ driver.name }} - {{ driver.exp }}
            </option>
         </select>
      </label>
      <label>Bus:
         <select v-model="assignment.busId">
            <option v-for="bus in bussesList" :key="bus.id" :value="bus.id">
               {{ bus.number }} - {{ bus.placesNumber }}
            </option>
         </select>
      </label>
      <button @click="onAdd">Add assignment</button>
   </div>
</template>

<script setup>
import { useAssignmentsStore } from '@/stores/assignments';
import { useBussesStore } from '@/stores/busses';
import { useDriversStore } from '@/stores/drivers';
const { addAssignment } = useAssignmentsStore()

import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const driversStore = useDriversStore()
const { driversList } = storeToRefs(driversStore)

const bussesStore = useBussesStore()
const { bussesList } = storeToRefs(bussesStore)

let assignment = ref({})

function onAdd() {
   addAssignment(assignment.value)
   assignment.value = {}
}

</script>

<style lang="scss" scoped></style>