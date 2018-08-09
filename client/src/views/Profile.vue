<template>
  <div>
    <h1 v-if="currentUserGetter !== null">Profile of {{currentUserGetter.user}}</h1>
    <h1 v-else>Profile of nobody</h1>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['currentUserGetter'])
  }
}
</script>
