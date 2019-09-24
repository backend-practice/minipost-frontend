import axios from 'axios'

export function login ({ commit }, { username, password }) {
  return axios.post('/authentications/', {
    username, password
  })
    .then(response => {
      let token = response.data.token
      setAxiosToken(token)
      localStorage.setItem('token', token)
    })
}

export function refreshCurrentUser ({ commit }) {
  return axios.get('/user/')
    .then(response => {
      commit('setCurrentUser', response.data)
    })
}

function setAxiosToken (token) {
  axios.defaults.headers.common['Authorization'] = 'Token ' + token
}
