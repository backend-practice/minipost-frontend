<template>
  <q-chip class="user-chip" clickable @click="goUserProfile">
    <q-avatar>
      <img :src="user.avatar||require('assets/minipost-icon.svg')" class="bg-grey-3 q-pa-xs">
    </q-avatar>
    <span class="q-mx-sm">{{user.nickname}}</span>
  </q-chip>
</template>

<script>
export default {
  name: 'UserChip',
  props: {
    user: Object
  },
  methods: {
    goUserProfile () {
      let path = '/u/' + this.user.id
      if (this.$route.path !== path) {
        this.$router.push('/u/' + this.user.id)
      }
    }
  }
}
</script>

<style scoped>

</style>
