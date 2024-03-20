<template>
   <div>
      <div>
         <label>
            <input v-model="driverData.name" type="text">
         </label>
      </div>
      <div>
         <label>
            <input v-model="driverData.exp" type="text">
         </label>
      </div>
      <button @click="onAction">{{ actionButtonTitle }}</button>
      <button @click="onCancel">Cancel</button>
   </div>
</template>

<script setup>
import { useDriversStore } from '@/stores/drivers';
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const driversStore = useDriversStore()
const { getDriverById, addDriver, updateDriver } = driversStore

let driverData = ref({})

// const receivedDriverId = computed(() => route.params.id)

const props = defineProps({
   receivedDriverId: {
      type: Number,
   }
})

const actionButtonTitle = computed(() => {
   return props.receivedDriverId ? 'Save' : 'Add'
})

function onAction() {
   if (!props.receivedDriverId) {
      addDriver(driverData.value)
   }
   else {
      updateDriver(driverData.value)
   }
   router.push({
      name: 'drivers'
   })
}

function onCancel() {
   router.push({
      name: 'drivers'
   })
}


driverData.value = { ...getDriverById(props.receivedDriverId) }

</script>

<style lang="scss" scoped></style>