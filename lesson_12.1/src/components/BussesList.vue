<template>
   <div>
      <ul>
         <li v-for="bus in bussesList" :key="bus.id">
            {{ bus.number }} - {{ bus.placesNumber }}
            <div>
               <button @click="onEdit(bus.id)">edit</button>
               <button @click="deleteBus(bus.id)">delete</button>
            </div>
         </li>
      </ul>
   </div>
</template>

<script setup>
import { useBussesStore } from '@/stores/busses';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
const router = useRouter()

const bussesStore = useBussesStore()
const { deleteBus } = bussesStore
const { bussesList } = storeToRefs(bussesStore)

function onEdit(busId) {
   router.push({
      name: 'busses-config',
      params: {
         id: busId
      }
   })
}
</script>

<style lang="scss" scoped></style>