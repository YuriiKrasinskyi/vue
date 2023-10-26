<template>
   <div class="athletes">
      <h2 class="athletes__title">{{ athletesData.name }}</h2>
      <button class="athletes__button" @click="$emit('add')">x</button>
   </div>
</template>

<script>
export default {
   name: 'athleteCard',

   props: {
      athletesData: {
         type: Object,
         default: () => ({})
      },
   },
}
</script>

<style lang="css" scoped>
.athletes {
   display: flex;
   justify-content: space-between;
   max-width: 200px;
   border: 1px solid grey;
   margin-bottom: 20px;
}

.athletes__title {}

.athletes__button {
   width: 40px;
   border: none;
   background: url(../assets/arrow.png) 100% / contain no-repeat;
}
</style>