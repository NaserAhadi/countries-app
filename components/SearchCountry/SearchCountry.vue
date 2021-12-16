<template>
  <div>
    <BaseSearch
      v-model="searchedValue"
      label="search for a country"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BaseSearch from '~/components/DesignSystem/BaseSearch/BaseSearch'
export default {
  name: 'SearchCountry',
  components: {
    BaseSearch
  },
  data () {
    return {
      searchedValue: ''
    }
  },
  watch: {
    searchedValue (value) {
      if (value) {
        this.getSearchedCountryInformation(value)
      } else {
        this.getAllCountriesInformation()
      }
    }
  },
  methods: {
    ...mapActions('home', ['getSearchedCountryInformation', 'getAllCountriesInformation'])
  }
}
</script>

<style lang="scss" scoped>

</style>
