<template>
  <div><h4>Login</h4>
    <input type="text" v-model="name" placeholder="name"><br>
    <input type="password" v-model="password" placeholder="password"><br>
    <button @click="loginAction({name, password})"
      >Login</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data(){
    return{
      name: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['loginAction'])
  }
}
</script>

