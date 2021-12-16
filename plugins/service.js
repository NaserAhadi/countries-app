import repositoryServices from '~/api/repositoryServices.js'

export default (context, inject) => {
  inject('callApiService', repositoryServices(context.$axios))
}
