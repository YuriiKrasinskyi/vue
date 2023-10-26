<template>
   <div class="main">
      <a :href="cardData.link" target="_blank" class="main__image">
         <img :src="cardData.imgSrc" alt="Image">
      </a>
      <div class="main__items">
         <a :href="cardData.link" target="_blank" class="main__title">
            <h2>{{ cardData.title }}</h2>
         </a>
         <div class="main__body">
            <div class="main__prices prices">
               <div class="prices__label">Ваша економія: <span>{{ cardData.discount }}₴</span></div>
               <div class="prices__old">{{ cardData.oldPrice }}₴</div>
               <div class="prices__price">{{ cardData.price }}₴</div>
            </div>
            <button class="main__button">Купити</button>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'itemCard',

   props: {
      cardData: {
         type: Object,
         default: () => ({})
      },
   },
}
</script>

<style lang="css" scoped>
.main {
   display: flex;
   gap: 20px;
   max-width: 600px;
   border-bottom: 1px solid grey;
   padding-top: 20px;
   padding-bottom: 40px;
}

.main__image {
   flex: 1 0 200px;
   position: relative;
}

img {
   position: absolute;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   object-fit: cover;
}

.main__items {
   flex: 1 1 auto;
}

.main__title {
   text-decoration: none;
}

h2 {
   margin: 0;
}

.main__body {
   display: flex;
   justify-content: space-between;
   text-align: left;
}

.main__prices {}

.prices {
   display: grid;
   gap: 5px;
}

.prices__label {
   margin-bottom: 15px;
   font-size: 12px;
}

span {
   color: red;
}

.prices__old {
   color: grey;
   text-decoration: line-through;
   font-size: 14px;
}

.prices__price {
   font-size: 20px;
   color: red;
}

.main__button {
   flex: 0 1 auto;
   align-self: end;
   color: white;
   padding: 7px 18px;
   background-color: green;
   cursor: pointer;
   transition: all 0.3s ease 0s;
   border: 1px solid green;
   border-radius: 7px;
}

.main__button:hover {
   background-color: white;
   color: green;
   border: 1px solid grey;
}
</style>