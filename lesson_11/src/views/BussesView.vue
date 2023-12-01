<template>
  <div class="home">
    <ul>
      <li v-for="bus in bussesList" :key="bus.id">
        {{ bus.number }} - {{ bus.placesNum }}
        <button @click="onEdit(bus.id)">edit</button>
        <button @click="deleteBus(bus.id)">delete</button>
      </li>

    </ul>
    <router-link :to="{ name: 'busses-config' }">Додати автобус</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';


export default {
  name: "BussesView",
  computed: {
    ...mapGetters('busses', ['bussesList']),
  },
  methods: {
    ...mapActions('busses', ['deleteBus']),
    onEdit(busId) {
      this.$router.push({
        name: 'busses-config',
        params: {
          id: busId
        }
      })
    }
  },
};
</script>
