<template>
   <div>
      <h1>Призначення</h1>
      <div v-for="{ driverName, busNumber, id } in getFilledAssignmentsList" :key="id">
         {{ driverName }} - {{ busNumber }}
         <button @click="deleteAssignment(id)">Delete</button>
      </div>
   </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';


export default {
   name: 'AssignmentsList',

   computed: {
      ...mapGetters('assignments', ['getFilledAssignmentsList']),
   },
   methods: {
      ...mapActions('assignments', ['deleteAssignment'])
   },
}
</script>

<style lang="scss" scoped></style>