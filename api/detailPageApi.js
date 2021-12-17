export default $axios => ({
  getCountryDataByAlphaCode (code) {
    return $axios({
      method: 'GET',
      url: `/alpha/${code}`
    })
  }
})
