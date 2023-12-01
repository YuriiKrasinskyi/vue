<template>
   <div>
      <label>
         Номер автобуса
         <input v-model="busData.number" type="text">
      </label>
   </div>
   <div>
      <label>
         Кількість місць
         <input v-model="busData.placesNum" type="text">
      </label>
   </div>
   <button @click="onAction">{{ actionButtonTitle }}</button>
   <button @click="onCancel">Відмінити</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
   name: 'BusEdit',
   data() {
      return {
         busData: {}
      }
   },
   computed: {
      ...mapGetters('busses', ['getBusById']),
      receivedBusId() {
         return this.$route.params.id
      },
      actionButtonTitle() {
         return this.receivedBusId ? 'Зберегти' : 'Змінити'
      }
   },
   created() {
      this.busData = { ...this.getBusById(this.receivedBusId) };
   },
   methods: {
      ...mapActions('busses', ['addBus', 'updateBus']),
      onAction() {
         if (!this.receivedBusId)
            this.addBus(this.busData)
         else this.updateBus(this.busData)
         this.$router.push({ name: 'busses' })
      },
      onCancel() {
         this.$router.push({ name: 'busses' })
      }
   },
}
</script>

<style lang="scss" scoped></style>