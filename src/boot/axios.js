import axios from 'axios'

export default async ({ Vue, store }) => {
  Vue.prototype.$axios = axios

  let defaultBaseURL = 'https://minipost-django.herokuapp.com'
  axios.defaults.baseURL = localStorage.getItem('token') || defaultBaseURL
  let token = localStorage.getItem('token')
  if (token) {
    axios.defaults.headers.common['Authorization'] = 'Token ' + token
    store.dispatch('auth/refreshCurrentUser')
  }
}
