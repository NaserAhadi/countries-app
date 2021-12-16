export default $axios => ({
  getAllCountriesData () {
    return $axios({
      method: 'GET',
      url: '/all'
    })
  },
  getRegionalCountriesData (region) {
    return $axios({
      method: 'GET',
      url: `/regionalbloc/${region}`
    })
  },
  getSearchedCountryData (countryName) {
    return $axios({
      method: 'GET',
      url: `/name/${countryName}`
    })
  }
})
