<template>
   <div>
      <label>
         ПІБ шофера
         <input v-model="driverData.name" type="text">
      </label>
   </div>
   <div>
      <label>
         Досвід шофера
         <input v-model="driverData.exp" type="text">
      </label>
   </div>
   <button @click="onAction">{{ actionButtonTitle }}</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
   name: 'DriverEdit',

   data() {
      return {
         driverData: {}
      }
   },

   computed: {
      ...mapGetters('drivers', ['getDriverByID']),
      receivedId() {
         return this.$route.params.id
      },
      actionButtonTitle() {
         return this.receivedId ? 'Зберегти' : 'Створити'
      }
   },

   created() {
      this.driverData = { ...this.getDriverByID(this.receivedId) };
   },
   methods: {
      ...mapActions('drivers', ['addDriver', 'updateDriver']),
      onAction() {
         if (!this.receivedId)
            this.addDriver(this.driverData)
         else this.updateDriver(this.driverData)
         this.$router.push({ name: 'drivers' })
      }
   },
}
</script>

<style lang="scss" scoped></style>