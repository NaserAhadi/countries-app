import Vue from 'vue'

const state = () => ({
  allCountriesInformation: []
})

const mutations = {
  SET_ALL_COUNTRIES_INFORMATION (state, allCountriesInformation) {
    Vue.set(state, 'allCountriesInformation', allCountriesInformation)
  }
}

const actions = {
  async getAllCountriesInformation (vuexContext) {
    const { data } = await this.$callApiService.homePageService.getAllCountriesData()
    vuexContext.commit('SET_ALL_COUNTRIES_INFORMATION', data)
  }
}

export default ({
  namespaced: true,
  state,
  mutations,
  actions
})
