<template>
   <div>
      <div>
         <label>
            Bus number
            <input v-model="busData.number" type="text">
         </label>
      </div>
      <div>
         <label>
            Places number
            <input v-model="busData.placesNumber" type="text">
         </label>
      </div>
      <button @click="onAction">{{ actionButtonTitle }}</button>
      <button @click="onCancel">Cancel</button>
   </div>
</template>

<script setup>

import { useBussesStore } from '@/stores/busses';
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const route = useRoute()

const bussesStore = useBussesStore()
const { addBus, getBusById, updateBus } = bussesStore

let busData = ref({})

const receivedBusId = computed(() => route.params.id)
console.log(receivedBusId);
const actionButtonTitle = computed(() => {
   return receivedBusId.value ? 'Save' : 'Add'
})
function onAction() {
   if (!receivedBusId.value) {
      addBus(busData.value)
   }
   else {
      updateBus(busData.value)
   }
   router.push({
      name: 'busses'
   })
}

function onCancel() {
   router.push({
      name: 'busses'
   })
}

busData.value = { ...getBusById(receivedBusId.value) }

</script>

<style lang="scss" scoped></style>