<template>
  <div class="home">
    <drivers-filter />
    <drivers-list />
  </div>
</template>

<script>

import DriversFilter from "@/components/DriversFilter.vue";
import DriversList from "@/components/DriversList.vue"
export default {
  name: "DriversView",
  components: {
    DriversFilter,
    DriversList,
  },
};
</script>
