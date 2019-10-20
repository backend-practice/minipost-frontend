<template>
  <q-page class="index">
    <div class="flex flex-center q-my-lg">
      <div class="tabs-container col-grow">
        <q-tabs
          v-model="tab"
          class="text-grey-7 self-stretch"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          no-caps
        >
          <q-tab name="recent" :label="$t('recent')"/>
          <q-tab name="feed" :label="$t('feed')"/>
        </q-tabs>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="recent">
            <q-infinite-scroll @load="onLoadRecentPosts" :offset="250">
              <div v-if="recentPosts.length>0">
                <mini-post
                  v-for="(post,index) in recentPosts"
                  :key="post.id"
                  :mini-post="post"
                  @toggle-like="toggleRecentPostLike(index)"
                />
              </div>
              <div v-else class="flex flex-center q-ma-lg text-body1">
                <div>{{$t('noRecentMiniPosts')}}</div>
              </div>
              <template v-slot:loading>
                <div class="row justify-center q-my-md">
                  <q-spinner-dots color="primary" size="40px"/>
                </div>
              </template>
            </q-infinite-scroll>
          </q-tab-panel>

          <q-tab-panel name="feed">
            <q-infinite-scroll @load="onLoadFeedPosts" :offset="250">
              <div v-if="feedPosts.length>0">
                <mini-post
                  v-for="(post,index) in feedPosts"
                  :key="post.id"
                  :mini-post="post"
                  @toggle-like="toggleFeedPostLike(index)"
                />
              </div>
              <div v-else class="flex flex-center q-ma-lg text-body1">
                <div>{{$t('noFeedMiniPosts')}}</div>
              </div>
              <template v-slot:loading>
                <div class="row justify-center q-my-md">
                  <q-spinner-dots color="primary" size="40px"/>
                </div>
              </template>
            </q-infinite-scroll>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import MiniPost from '../components/MiniPost'

export default {
  name: 'PageIndex',
  components: { MiniPost },
  data () {
    return {
      tab: 'recent',
      recentPosts: [],
      feedPosts: []
    }
  },
  mounted () {
    this.$axios.get('/posts/')
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    onLoadRecentPosts (index, done) {
      console.log('loading recent posts, index ' + index)
      this.$axios.get('/posts/', {
        params: {
          offset: this.recentPosts.length
        }
      })
        .then(response => {
          this.recentPosts.push(...response.data.results)
          done(this.recentPosts.length >= response.data.count)
          console.log(response)
        })
        .catch(error => {
          console.log(error)
          done(true)
        })
    },
    onLoadFeedPosts (index, done) {
      console.log('loading feed posts, index ' + index)
      this.$axios.get('/posts/feed/', {
        params: {
          offset: this.feedPosts.length
        }
      })
        .then(response => {
          this.feedPosts.push(...response.data.results)
          done(this.feedPosts.length >= response.data.count)
          console.log(response)
        })
        .catch(error => {
          console.log(error)
          done(true)
        })
    },
    toggleRecentPostLike (index) {
      this.toggleLike(this.recentPosts[index])
    },
    toggleFeedPostLike (index) {
      this.toggleLike(this.feedPosts[index])
    },
    toggleLike (post) {
      // TODO: 先更新点赞状态，再调用接口，如失败则恢复状态
      // TODO: 与UserProfile中合并
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
