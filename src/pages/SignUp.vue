<template>
  <q-page class="flex flex-center">
    <q-form
      @submit="onRegister"
      @reset="onReset"
      class="column q-gutter-lg register-form"
    >
      <!--      style="width: 80%;max-width: 500px"-->
      <q-input
        v-model="username"
        :label="$t('username')"
        stack-label
        :error-message="errorMessages.username&&errorMessages.username.join('\n')"
        :error="Boolean(errorMessages.username)"
        outlined
      />
      <q-input
        type="password"
        v-model="password"
        :label="$t('password')"
        stack-label
        :error-message="errorMessages.password&&errorMessages.password.join('\n')"
        :error="Boolean(errorMessages.password)"
        outlined
      />
      <q-input
        v-model="nickname"
        :label="$t('nickname')"
        stack-label
        :error-message="errorMessages.nickname&&errorMessages.nickname.join('\n')"
        :error="Boolean(errorMessages.nickname)"
        outlined
      />
      <q-select
        v-model="gender"
        :options="genderOptions"
        emit-value
        map-options
        :label="$t('gender')"
        :error-message="errorMessages.gender&&errorMessages.gender.join('\n')"
        :error="Boolean(errorMessages.gender)"
        outlined
      />
      <q-btn
        type="submit"
        :label="$t('register')"
        color="primary"
        class="q-pa-md"
      />
    </q-form>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageSignUp',
  data () {
    return {
      username: '',
      password: '',
      nickname: '',
      gender: 0,
      genderOptions: [
        { label: this.$t('unknown'), value: 0 },
        { label: this.$t('male'), value: 1 },
        { label: this.$t('female'), value: 2 }
      ],
      errorMessages: {}
    }
  },
  methods: {
    onRegister () {
      this.$axios.post('/users/', {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
        gender: this.gender
      })
        .then(response => {
          console.log(response.data)
          this.$router.push('/login')
        })
        .catch(error => {
          console.log(error)
          console.log(error.response)
          if (error.response) {
            this.errorMessages = error.response.data
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
