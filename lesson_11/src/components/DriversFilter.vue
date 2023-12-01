<template>
   <h1>Фільтри</h1>
   <div class="cnt">
      <div>
         <label>
            ПІБ шофера
            <input v-model="filterData.name" type="text">
         </label>
      </div>
      <div>
         Стаж шофера:
         <label>
            від
            <input v-model="filterData.expMin" type="number">
         </label>
         <label>
            до
            <input v-model="filterData.expMax" type="number">
         </label>
      </div>
   </div>
   <button @click="onReset">Reset filter</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
   name: 'DriversFilter',
   data() {
      return {
         filterData: {},
      }
   },
   watch: {
      filterData: {
         handler(newFilterValue) {
            this.setFilter(newFilterValue)
         },
         deep: true,
      }
   },
   methods: {
      ...mapActions('drivers', ['setFilter']),
      onReset() {
         this.filterData = {}
      }
   },
}
</script>

<style lang="scss" scoped>
.cnt {
   display: flex;
}
</style>