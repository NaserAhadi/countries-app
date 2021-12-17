<template>
  <v-container fluid class="home-page">
    <v-row class="d-flex justify-space-between px-3">
      <v-col cols="4">
        <SearchCountry />
      </v-col>
      <v-col cols="3">
        <RegionFilter />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="my-col">
        <AllCountriesCards
          :countries-data="countriesInformation"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AllCountriesCards from '~/components/AllCountriesCards/AllCountriesCards'
import RegionFilter from '~/components/RegionFilter/RegionFilter'
import SearchCountry from '~/components/SearchCountry/SearchCountry'

export default {
  name: 'HomePage',
  components: {
    AllCountriesCards,
    RegionFilter,
    SearchCountry
  },
  computed: {
    ...mapState('home', ['countriesInformation'])
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
