<template>
  <div><h4>Register</h4>
    <input type="text" v-model="username">
    <input type="password" v-model="password">
    <button>Register</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data(){
    return{
      username: '',
      password: ''
    }
  }
}
</script>

