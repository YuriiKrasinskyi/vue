<template>
   <div class="page__card">
      <a :href="cardData.imgSrc" target="_blank" class="page__image">
         <img :src="cardData.imgSrc" alt="Image">
      </a>
      <div class="page__body">
         <div class="page__subTitle">
            <img :src="cardData.logo" alt="Logo">
            <span>{{ cardData.companyTitle }}</span>
         </div>
         <div class="page__info">В наявності</div>
      </div>
      <h3 class="page__title">{{ cardData.description }}</h3>
   </div>
</template>

<script>
export default {
   name: 'cardItem',

   props: {
      cardData: {
         type: Object,
         default: () => ({})
      },
      // data() {
      //    return {
      //       currentStatus: null,
      //    }
      // },
   },
}
</script>

<style lang="css" scoped>
.page__card {}

.page__image {
}

.page__image img {
   border-radius: 20px;
   width: 300px;
   height: 300px;
  
}

.page__body {
   display: flex;
   justify-content: space-between;
   gap: 10px;
}

.page__subTitle {
   font-size: 20px;
}
.page__subTitle img {
   padding-right: 10px;
}

.page__info {
   color: green;
}

.page__title {
   text-align: left;
   font-size: 28px;
}
</style>