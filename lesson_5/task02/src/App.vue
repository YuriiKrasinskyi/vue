<template>
  <cards-panel :card-list-data="raspberryList" />
</template>

<script>
import cardsPanel from "./components/cardsPanel.vue";
import { raspberryList } from "./constants/2_data_raspberry";
export default {
  name: 'App',

  components: {
    cardsPanel,
  },

  data() {
    return {
      raspberryList
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
