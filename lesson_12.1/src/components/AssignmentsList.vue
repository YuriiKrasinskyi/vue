<template>
   <table>
      <thead>
         <tr>
            <th>Driver name</th>
            <th>Bus number</th>
         </tr>
      </thead>
      <tbody>
         <tr v-for="{ driverName, busNumber, id } in getFilledAssignmentsList" :key="id">
            <td>{{ driverName }}</td>
            <td>{{ busNumber }}</td>
            <button @click="deleteAssignment(id)">delete</button>
         </tr>
      </tbody>
   </table>
</template>

<script setup>
import { useAssignmentsStore } from '@/stores/assignments';
import { storeToRefs } from 'pinia';

const assignmentsStore = useAssignmentsStore();
const { deleteAssignment } = assignmentsStore
const { getFilledAssignmentsList } = storeToRefs(assignmentsStore);


</script>

<style lang="scss" scoped></style>