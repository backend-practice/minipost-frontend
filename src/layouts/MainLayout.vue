<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn flat to="/">
            <img class="logo" src="../assets/minipost-white.svg">
          </q-btn>
        </q-toolbar-title>
        <div v-if="isLoggedIn">
          <div @click="goUserProfile">{{currentUser.nickname}}</div>
          <!-- avatar -->
        </div>
        <div v-else>
          <q-btn flat :label="$t('signUp')" to="/sign-up"/>
          <q-btn flat :label="$t('login')" to="/login"/>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState('auth', [
      'currentUser'
    ]),
    ...mapGetters('auth', [
      'isLoggedIn'
    ])
  },
  methods: {
    goUserProfile () {
      let path = '/u/' + this.currentUser.id
      if (this.$route.path !== path) {
        this.$router.push(path)
      }
    }
  }
}
</script>

<style scoped>
  .logo {
    height: 36px;
    vertical-align: middle;
  }
</style>
