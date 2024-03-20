<template>
   <div>
      <ul>
         <li v-for="driver in getFilteredList" :key="driver.id">
            {{ driver.name }} - {{ driver.exp }}
            <div>
               <button @click="onEdit(driver.id)">edit</button>
               <button @click="deleteDriver(driver.id)">delete driver</button>
            </div>
         </li>
      </ul>
   </div>
</template>

<script setup>
import { useDriversStore } from '@/stores/drivers';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
const router = useRouter()
const driversStore = useDriversStore()
const { deleteDriver } = driversStore
const { getFilteredList } = storeToRefs(driversStore)


function onEdit(driverId) {
   router.push({
      name: 'drivers-config',
      params: {
         id: driverId
      }
   })
}
</script>

<style lang="scss" scoped></style>