<template>
  <v-container fluid class="home-page">
    <v-row class="search-and-filter-container">
      <v-col lg="4" cols="12">
        <SearchCountry />
      </v-col>
      <v-col lg="3" cols="12">
        <RegionFilter />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
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
@import './index.scss';
</style>
