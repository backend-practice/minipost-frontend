<template>
  <q-card class="mini-post q-my-lg q-px-md q-pb-md q-gutter-y-md column">
    <div class="row flex-center">
      <user-chip :user="miniPost.owner"/>
      <div class="col-grow text-right">{{timeCreated}}</div>
    </div>
    <div class="post-content text-body1">
      {{miniPost.content}}
    </div>
    <div class="self-stretch text-right">
      <!--
      <q-btn
        flat
        icon="o_launch"
      />
      <q-btn
        flat
        icon="o_comment"
        @click="toggleComments"
      />
      -->
      <q-btn
        flat
        :icon="miniPost.is_liked?'thumb_up':'o_thumb_up'"
        :class="miniPost.is_liked?'text-primary':''"
        :label="miniPost.likes_count"
        @click="$emit('toggle-like')"
      />
    </div>
    <div v-if="showComment">
      <q-input filled v-model="newComment" dense>
        <template v-slot:prepend>
          <q-avatar>
            <img :src="miniPost.owner.avatar||require('assets/minipost-icon.svg')" class="bg-grey-3 q-pa-xs">
          </q-avatar>
        </template>
      </q-input>
      <div class="relative-position" style="min-height: 50px">
        <div v-for="comment in comments" :key="comment.id">
          <q-chip>
            <q-avatar>
              <img :src="comment.owner.avatar||require('assets/minipost-icon.svg')" class="bg-grey-3 q-pa-xs">
            </q-avatar>
            {{miniPost.owner.nickname}}
          </q-chip>
          {{comment.content}}
        </div>
        <q-inner-loading :showing="commentLoading">
          <q-spinner-dots size="50px" color="primary"/>
        </q-inner-loading>
      </div>
    </div>
  </q-card>
</template>

<script>
import UserChip from './UserChip'

export default {
  name: 'MiniPost',
  components: { UserChip },
  props: {
    miniPost: Object
  },
  data () {
    return {
      showComment: false,
      newComment: '',
      commentLoading: false,
      commentPageIndex: 0,
      commentPageCount: 20,
      commentsCount: 0,
      comments: []
    }
  },
  computed: {
    timeCreated () {
      let date = new Date(this.miniPost.time_created)
      return date.toLocaleString()
    }
  },
  methods: {
    toggleComments () {
      this.showComment = !this.showComment
      if (this.showComment) {
        this.commentLoading = true
        this.$axios.get('/posts/' + this.miniPost.id + '/comments/')
          .then(response => {
            console.log(response)
            this.commentsCount = response.data.count
            this.comments = response.data.results
            this.commentLoading = false
          })
          .catch(error => {
            console.log(error)
            this.commentLoading = false
          })
      } else {
        this.comments = []
      }
    }
  }
}
</script>

<style scoped>
</style>
