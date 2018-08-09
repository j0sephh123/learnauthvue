<template>
  <div>
    <h1>Profile of {{currentUserGetter.user}}</h1>
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
