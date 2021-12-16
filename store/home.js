import Vue from 'vue'

const state = () => ({
  countriesInformation: []
})

const mutations = {
  SET_COUNTRIES_INFORMATION (state, countriesInformation) {
    Vue.set(state, 'countriesInformation', countriesInformation)
  }
}

const actions = {
  async getAllCountriesInformation (vuexContext) {
    const { data } = await this.$callApiService.homePageService.getAllCountriesData()
    vuexContext.commit('SET_COUNTRIES_INFORMATION', data)
  },
  async getRegionalCountriesInformation (vuexContext, region) {
    const { data } = await this.$callApiService.homePageService.getRegionalCountriesData(region)
    vuexContext.commit('SET_COUNTRIES_INFORMATION', data)
  },
  async getSearchedCountryInformation (vuexContext, countryName) {
    const { data } = await this.$callApiService.homePageService.getSearchedCountryData(countryName)
    vuexContext.commit('SET_COUNTRIES_INFORMATION', data)
  }
}

export default ({
  namespaced: true,
  state,
  mutations,
  actions
})
