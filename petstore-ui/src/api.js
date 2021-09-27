/* import Vue from 'vue' */
import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:3000/',
  json: true
})

export default {
  async execute (method, resource, data) {
    /* let accessToken = await Vue.prototype.$auth.getAccessToken() */
    return client({
      method,
      url: resource,
      data,
      headers: {
        Authorization: `Bearer`
      }
    }).then(req => {
      return req.data
    })
  },
  getPets () {
    return this.execute('get', '/api/pets')
  },
  getPet (id) {
    return this.execute('get', `/api/pet/${id}`)
  },
  addPet (data) {
    return this.execute('post', '/api/pet', data)
  },
  updatePet (data, id) {
    return this.execute('put', `/api/pet/${id}`, data)
  },
  deletePet (id) {
    return this.execute('delete', `/api/pet/${id}`)
  }
}
