<template>
   <div>
      <h2>Обрані для змагання</h2>
      <selected-card v-for="athlete in selectedAthletesDataList" :key="athlete.id" :selected-athletes-data="athlete"
         @delete="$emit('delete', athlete.id)" />
   </div>
</template>

<script>
import selectedCard from './selectedCard.vue';


export default {
   name: 'selectedAthletesPanel',
   props: {
      selectedAthletesDataList: {
         type: Array,
         default: () => []
      },
   },
   components: {
      selectedCard,
   },
}
</script>

<style lang="scss" scoped></style>