<template>
   <div class="selected">
      <h2 class="selected__title">{{ selectedAthletesData.name }}</h2>
      <button class="selected__button" @click="$emit('delete')"></button>
   </div>
</template>

<script>
export default {
   name: 'selectedCard',

   props: {
      selectedAthletesData: {
         type: Object,
         default: () => ({})
      },
   },
}
</script>

<style lang="css">
.selected {
   display: flex;
   justify-content: space-between;
   max-width: 200px;
   border: 1px solid grey;
   margin-bottom: 20px;
   padding: 10px;
}

.selected__title {}

.selected__button {
   width: 40px;
   border: none;
   background: url(../assets/arrow.png) 100% / contain no-repeat;
   transform: rotate(180deg);
}
</style>