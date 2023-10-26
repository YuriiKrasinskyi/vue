<template>
   <div class="page">
      <card-item v-for="card in cardListData" :key="card.id" :card-data="card" />
   </div>
</template>

<script>

import cardItem from './cardItem.vue';
export default {
   name: 'cardsPanel',

   components: { cardItem },

   props: {
      cardListData: {
         type: Array,
         default: () => []
      },
   },
}
</script>

<style lang="css" scoped>
.page {
   max-width: 1200px;
   padding: 20px;
   overflow: auto;
   background-color: #000;

   display: flex;
   align-items: center;
   justify-content: center;
   gap: 40px;
   color: #fff;
}
</style>