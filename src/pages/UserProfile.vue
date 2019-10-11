<template>
  <div class="user-profile column flex-center items-stretch q-pa-lg q-gutter-y-lg">
    <div class="column flex-center q-pa-lg q-gutter-y-md">
      <q-avatar size="100px">
        <img :src="user.avatar||require('assets/minipost-icon.svg')" class="bg-grey-3 q-pa-sm">
      </q-avatar>
      <div class="row flex-center text-h6">
        <span class="q-mx-xs">{{user.nickname}}</span>
        <q-icon name="ion-male" class="text-blue-4" v-if="user.gender===1"/>
        <q-icon name="ion-female" class="text-pink-4" v-else-if="user.gender===2"/>
      </div>
      <div class="row flex-center no-wrap q-gutter-x-md">
        <div class="column flex-center col-4">
          <div>{{user.posts_count}}</div>
          <div>{{$t('miniPosts')}}</div>
        </div>
        <q-separator vertical/>
        <div class="column flex-center col-4">
          <div>{{user.following_count}}</div>
          <div>{{$t('following')}}</div>
        </div>
        <q-separator vertical/>
        <div class="column flex-center col-4">
          <div>{{user.followers_count}}</div>
          <div>{{$t('followers')}}</div>
        </div>
      </div>
    </div>

    <div class="flex flex-center">
      <div class="tabs-container col-grow">
        <q-tabs
          v-model="tab"
          class="text-grey-7 self-stretch"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          no-caps
        >
          <q-tab name="miniPosts" :label="$t('miniPosts')"/>
          <q-tab name="following" :label="$t('following')"/>
          <q-tab name="followers" :label="$t('followers')"/>
        </q-tabs>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="miniPosts">
            <mini-post
              v-for="(post,index) in posts"
              :key="post.id"
              :mini-post="post"
              @toggle-like="toggleLike(index)"
            />
          </q-tab-panel>

          <q-tab-panel name="following">
            <div class="text-h6">Following</div>
          </q-tab-panel>

          <q-tab-panel name="followers">
            <div class="text-h6">Followers</div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </div>
</template>

<script>
import MiniPost from '../components/MiniPost'

export default {
  name: 'UserProfile',
  components: { MiniPost },
  props: {
    id: Number
  },
  data () {
    return {
      user: {},
      tab: 'miniPosts',
      posts: [],
      following: [],
      followers: []
    }
  },
  created () {
    console.log(this.id)
    this.$axios.get('/users/' + this.id + '/')
      .then(response => {
        this.user = response.data
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    this.$axios.get('/users/' + this.id + '/posts/')
      .then(response => {
        this.posts = response.data.results
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    toggleLike (index) {
      let post = this.posts[index]
      if (post.is_liked) {
        this.$axios.delete('/posts/' + post.id + '/like/')
          .then(response => {
            console.log(response)
            post.is_liked = false
            post.likes_count--
          })
          .catch(error => {
            console.log(error)
          })
      } else {
        this.$axios.post('/posts/' + post.id + '/like/')
          .then(response => {
            post.is_liked = true
            post.likes_count++
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
}
</script>

<style scoped>
  .tabs-container {
    max-width: 800px;
  }
</style>
