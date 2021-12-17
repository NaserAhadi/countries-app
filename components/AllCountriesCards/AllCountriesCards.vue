<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="(country, index) in countriesData"
        :key="index"
        cols="12"
        md="3"
      >
        <nuxt-link
          :to="`${country.name.toLowerCase()}`"
          class="country-card-link"
        >
          <CountryCard :country-specification="country" />
        </nuxt-link>
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
@import './AllCountriesCards.scss';
</style>
