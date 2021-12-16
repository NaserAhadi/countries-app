<template>
  <v-row class="home-page">
    <v-col cols="12" class="my-col">
      <AllCountriesCards
        :countries-data="allCountriesInformation"
      />
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AllCountriesCards from '~/components/AllCountriesCards/AllCountriesCards'
export default {
  name: 'IndexPage',
  components: {
    AllCountriesCards
  },
  computed: {
    ...mapState('home', ['allCountriesInformation'])
  },
  mounted () {
    this.getAllCountriesInformation()
  },
  methods: {
    ...mapActions('home', ['getAllCountriesInformation'])
  }
}
</script>

<style lang="scss" scoped>
.home-page{
  padding: 3rem;
}
</style>
