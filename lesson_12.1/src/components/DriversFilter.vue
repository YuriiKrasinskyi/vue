<template>
   <div class="cnt">
      <h3>Filter</h3>
      <div>
         <label>
            Driver name
            <input v-model.lazy="filterData.name" type="text">
         </label>
      </div>
      <div>
         <label>
            Driver experience from:
            <input v-model.lazy="filterData.expMin" type="number">
         </label>
         <label>
            to:
            <input v-model.lazy="filterData.expMax" type="number">
         </label>
      </div>
      <button @click="onReset">reset filter</button>
   </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useDriversStore } from '@/stores/drivers';
const { setFilter } = useDriversStore()


const filterData = ref({})

function onReset() {
   filterData.value = {}
}


watch(filterData.value, (newValue) => { setFilter(newValue) }, { deep: true });

</script>

<style lang="scss" scoped>
.cnt {
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   gap: 20px;
}
</style>