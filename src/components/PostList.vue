<template>
  <div v-if="posts.length">
    <post-item
      v-for="post in posts"
      :key="post.id"
      :post="post">
    </post-item>
  </div>
  <b-alert show variant="info" v-else> No hay posts </b-alert>
</template>

<script>
import PostItem from './PostItem'
  export default {
    components:{
      PostItem
    },
    props: {
      posts: {
        type: Array,
        required: true
      }
    }
  }
</script>
