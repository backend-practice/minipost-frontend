<template>
  <q-card class="user-info q-ma-lg q-pa-sm row q-gutter-x-md ">
    <div>
      <!-- avatar必须包含在div中，否则q-card会导致avatar圆角消失 -->
      <q-avatar size="80px">
        <img :src="user.avatar||require('assets/minipost-icon.svg')" class="bg-grey-3 q-pa-xs">
      </q-avatar>
    </div>

    <div class="column justify-around col-grow items-start">
      <div class="row flex-center text-body1">
        <span class="q-mx-xs">{{user.nickname}}</span>
        <q-icon name="ion-male" class="text-blue-4" v-if="user.gender===1"/>
        <q-icon name="ion-female" class="text-pink-4" v-else-if="user.gender===2"/>
      </div>
      <div class="row q-gutter-x-md">
        <div>{{$t('miniPosts')}} {{user.posts_count}}</div>
        <div>{{$t('following')}} {{user.following_count}}</div>
        <div>{{$t('followers')}} {{user.followers_count}}</div>
      </div>
    </div>

    <!--
    <div class="column flex-center">
      <q-btn flat label="Follow"></q-btn>
    </div>
    -->
  </q-card>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
    user: Object
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
</style>
