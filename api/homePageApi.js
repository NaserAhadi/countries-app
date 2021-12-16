export default $axios => ({
  getAllCountriesData () {
    return $axios({
      method: 'GET',
      url: '/all'
    })
  }
})
