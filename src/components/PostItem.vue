<template>
  <div>
    <b-row class="mb-2">
      <b-col cols="1">{{ post.user_id }} </b-col>
      <b-col cols="2">{{ post.title }} </b-col>
      <b-col cols="2">{{ post.content }} </b-col>
      <b-col cols="1">{{ post.status }} </b-col>
      <b-col cols="1">{{ post.created_at }} </b-col>
    </b-row>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    props: {
      post: {
        type: Object,
        required: true
      }
    },
    methods: {
      ...mapMutations('posts', ['setPost']),
      goToShowPost (post) {
        this.setPost(post)
        this.$router.push({
          name: 'post-show',
          params: {id: post.id}
        })
      }
    }

  }
</script>