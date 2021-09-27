<template>
  <div>
    <h1 class="h1">Pets</h1>
    <b-alert :show="loading" variant="info">Loading...</b-alert>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Price</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="pet in pets" :key="pet.id">
        <td>{{ pet.id }}</td>
        <td>{{ pet.name }}</td>
        <td>{{ pet.price }}</td>
        <td>{{ pet.description }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from '@/api'
import axios from 'axios'
export default {
  data () {
    return {
      loading: false,
      pets: [],
      msg: ''
    }
  },
  async created () {
    await this.refreshPets()
  },
  methods: {
    async refreshPets () {
      let config = {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      }
      this.loading = true
      axios
        .get('http://localhost:3000/pets', config)
        .then(response => { this.pets = response.data })
      this.loading = false
    }
  }
}
</script>

<style scoped>

</style>
