<template>
   <div>
      <h1>Додати призначення</h1>
      <div>
         <label>
            Шофер
            <select v-model="assignment.driverId">
               <option v-for="driver in driversList" :key="driver.id" :value="driver.id">{{ driver.name }} - {{ driver.exp
               }}</option>
            </select>
         </label>
      </div>
      <div>
         <label>
            Автобус
            <select v-model="assignment.busId">
               <option v-for="bus in bussesList" :key="bus.id" :value="bus.id">{{ bus.number }} - {{ bus.placesNum }}
               </option>
            </select>
         </label>
      </div>
      <button @click="onAdd">Додати призначення</button>
   </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';


export default {
   name: 'AssignmentCreator',
   data() {
      return {
         assignment: {},
      }
   },
   computed: {
      ...mapGetters('drivers', ['driversList', 'bussesList']),
      ...mapGetters('busses', ['bussesList']),
   },
   methods: {
      ...mapActions('assignments', ['addAssignment']),
      onAdd() {
         this.addAssignment(this.assignment)
         this.assignment = {}
      }
   },
}
</script>

<style lang="scss" scoped></style>