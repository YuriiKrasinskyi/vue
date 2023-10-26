<template>
   <div class="main">
      <h2>Загальний список</h2>
      <athlete-card v-for="athlete in athletesListData" :key="athlete.id" :athletes-data="athlete"
         @add="$emit('add', athlete.id)" />
   </div>
</template>

<script>
import AthleteCard from './athleteCard.vue';

export default {
   name: 'athletesPanel',
   props: {
      athletesListData: {
         type: Array,
         default: () => []
      },
   },
   components: { AthleteCard },
}
</script>

<style lang="css">
.main {
   display: inline-block;
   border: 1px solid grey;
   padding: 10px;
}
</style>