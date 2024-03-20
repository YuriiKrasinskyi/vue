<template>
   <layout-page>
      <busses-list />
      <RouterLink :to="{name:'busses-config'}">Add bus</RouterLink>
   </layout-page>
</template>

<script setup>
import BussesList from '@/components/BussesList.vue';
import LayoutPage from '@/components/layouts/LayoutPage.vue';


</script>

<style lang="scss" scoped></style>