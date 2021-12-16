import homePageApi from './homePageApi'
// import detailPageApi from './detailPageApi'

export default $axios => ({
  homePageService: homePageApi($axios)
  // detailPageService: detailPageApi($axios)
})
