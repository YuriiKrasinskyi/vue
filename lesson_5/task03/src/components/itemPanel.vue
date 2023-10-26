<template>
   <div>
      <item-card v-for="card in cardsListData" :key="card.id" :card-data="card" />
   </div>
</template>

<script>
import itemCard from './itemCard.vue';

export default {
   name: 'itemPanel',

   components: { itemCard },

   props: {
      cardsListData: {
         type: Array,
         default: () => [],
      },
   },
}
</script>

<style lang="scss" scoped></style>