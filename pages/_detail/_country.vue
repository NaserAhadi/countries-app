<template>
  <div v-if="filteredCountry.name">
    <CountryDetail
      v-if="isRecievedData"
      :filtered-country-data="filteredCountry"
      :border-countries-data="borderCountriesData"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CountryDetail from '~/components/CountryDetail/CountryDetail'

export default {
  name: 'DetailPage',
  components: {
    CountryDetail
  },
  data () {
    return {
      filteredCountry: {},
      borderCountriesData: [],
      isRecievedData: false
    }
  },
  computed: {
    ...mapState('home', ['countriesInformation']),
    checkHasBoderCountries () {
      return this.filteredCountry.borders && this.filteredCountry.borders.length > 0
    }
  },
  async mounted () {
    await this.getAllCountriesInformation()
    await this.getFilteredCountryInformation()
    await this.getAllBorderCountriesInformation()
    this.isRecievedAllData()
  },
  methods: {
    ...mapActions('home', ['getAllCountriesInformation']),
    getFilteredCountryInformation () {
      this.filteredCountry = this.countriesInformation.find(country => country.name.toLowerCase() === this.$route.params.detail)
    },
    async getAllBorderCountriesInformation () {
      if (this.checkHasBoderCountries) {
        for (const code of this.filteredCountry.borders) {
          await this.getCountryInformationByAlphaCode(code)
        }
      }
    },
    async getCountryInformationByAlphaCode (code) {
      const { data } = await this.$callApiService.detailPageService.getCountryDataByAlphaCode(code)
      this.borderCountriesData.push(data)
    },
    isRecievedAllData () {
      this.isRecievedData = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
