<template>
  <v-container fluid class="all-countries-cards">
    <v-row>
      <v-col

        v-for="(item, index) in countriesData"
        :key="index"
        cols="12"
        md="3"
      >
        <CountryCard :country-specification="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CountryCard from './CountryCard/CountryCard'

export default {
  name: 'AllCountriesCards',
  components: {
    CountryCard
  },
  props: {
    countriesData: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
// .all-countries-cards{
//     width: 100%;
// }
</style>
