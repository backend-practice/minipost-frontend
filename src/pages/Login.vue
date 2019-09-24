<template>
  <q-page class="flex flex-center">
    <q-form
      @submit="onLogin"
      class="column q-gutter-lg register-form"
    >
      <q-input
        v-model="username"
        :label="$t('username')"
        stack-label
        :error-message="errorMessages.username && errorMessages.username.join('\n')"
        :error="Boolean(errorMessages.username)"
        outlined
      />
      <q-input
        type="password"
        v-model="password"
        :label="$t('password')"
        stack-label
        :error-message="errorMessages.password && errorMessages.password.join('\n')"
        :error="Boolean(errorMessages.password)"
        outlined
      />
      <q-btn
        type="submit"
        :label="$t('login')"
        color="primary"
        class="q-pa-md"
      />
    </q-form>
  </q-page>
</template>

<style>
</style>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PageLogin',
  data () {
    return {
      username: '',
      password: '',
      errorMessages: {}
    }
  },
  methods: {
    ...mapActions('auth', [
      'login'
    ]),
    onLogin () {
      console.log('onLogin')
      console.log(this.username)
      console.log(this.password)
      this.login({
        username: this.username,
        password: this.password
      })
        .then(() => {
          this.$router.push('/')
        })
        .catch(error => {
          if (error.response) {
            this.errorMessages = error.response.data
            if (this.errorMessages.non_field_errors) {
              this.$q.notify({
                message: this.errorMessages.non_field_errors.join('\n'),
                position: 'center',
                color: 'negative',
                timeout: 1000
              })
            }
          }
        })
    }
  }
}
</script>

<style scoped>
  .register-form {
    width: 80%;
    max-width: 500px;
  }
</style>
