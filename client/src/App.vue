<template>
  <div id="app">
    
    <div id="nav" v-if="!currentUser">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/login">Login</router-link> | 
      <router-link to="/register">Register</router-link>
    </div>
    <div id="nav" v-else>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link :to="{path: '/profile/' + currentUser.id}">{{currentUser.user}}</router-link> |  
      <button @click="logoutMethod">Logout</button>
    </div>
    <router-view/>
  </div>
</template>

<script>


export default {
  methods: {
    logoutMethod() {
      console.log('we redirect here');
      this.$store.commit('logoutMutation', localStorage.getItem('token'))
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser
    }
  },
  mounted() {
    console.log(this.$route.path);
    let token;
    // if currentUser is null, check localstorage for token
    let {currentUser} = this.$store.state;
    if(currentUser === null) {
      token = localStorage.getItem('token');
      if(token !== null) { // token, auto login
        this.$store.commit('loginMutation', token);
      } else { // no token, redirect to login
        this.$router.push('/login')
      }
    }


    // if(token) {
    //   // do stuff
    // } else {
    //   // there is no token obviously
    // }
    // if token is missing, well then he is not in...
    // console.log(this.$store.state.currentUser)
  }
}
</script>






<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
