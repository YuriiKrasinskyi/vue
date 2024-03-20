<template>
   <header>
      <nav class="nav">
         <RouterLink to="/">Home</RouterLink>
         <router-link :to="{ name: 'drivers' }">Drivers</router-link>
         <RouterLink :to="{ name: 'busses' }">Busses</RouterLink>
         <RouterLink :to="{ name: 'assignments' }">Assignments</RouterLink>
         <!-- <RouterLink to="/about">About</RouterLink> -->
      </nav>
   </header>
   <div>
      <slot></slot>
   </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>


<style lang="scss" scoped>

.nav {
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   gap: 20px;
}
</style>