<template>
  <div class="box">
    <div>
      <athletes-panel :athletes-list-data="athletesList" @add="AddOnSelectList" />
    </div>
    <div>
      <selected-athletes-panel :selected-athletes-data-list="selectedAthletesList" @delete="removeFromSelectList" />
    </div>
  </div>
</template>



<script>
// import selectedAthletesPanel from "./components/selectedAthletesPanel.vue"
import AthletesPanel from "./components/athletesPanel.vue";
import selectedAthletesPanel from "./components/selectedAthletesPanel.vue";
import { athletesList } from "./constants/9_athletes";
export default {
  name: 'App',

  components: {
    AthletesPanel,
    selectedAthletesPanel
  },

  data() {
    return {
      athletesList,
      selectedAthletesList: [
      ]
    }
  },
  methods: {
    getAthleteById(athleteID) {
      const athlete = athletesList.find(athlete => athlete.id === athleteID)
      return athlete
    },
    AddOnSelectList(athleteID) {
      this.selectedAthletesList.push(this.getAthlete(athleteID))
      this.athletesList = this.athletesList.filter((el) => el.id !== athleteID)
    },
    removeFromSelectList(athleteID) {
      this.athletesList.push(this.getAthlete(athleteID))
      this.selectedAthletesList = this.selectedAthletesList.filter((el) => el.id !== athleteID)
    },
  },
}
</script>

<style>
.box {
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

#app {
  color: #000;
}
</style>
