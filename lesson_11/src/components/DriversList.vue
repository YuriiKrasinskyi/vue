<template>
  <div class="home">
    <ol>
      <li v-for="driver in getFilteredList" :key="driver.id">
        {{ driver.name }} - досвід: {{ driver.exp }}
        <router-link :to="{
          name: 'drivers-config', params: {
            id: driver.id
          }
        }">edit</router-link>
        <button @click="deleteDriver(driver.id)">delete</button>
      </li>
    </ol>
    <router-link :to="{ name: 'drivers-config' }">Додати водія</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';


export default {
  name: "DriversList",
  computed: {
    ...mapGetters('drivers', ['getFilteredList'])
  },
  methods: {
    ...mapActions('drivers', ['deleteDriver', 'updateDriver']),
  },
};
</script>
