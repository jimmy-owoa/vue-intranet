<template>
  <div class="mt-5">
     <b-row>
       <b-col cols="12">
         <h2>Posts</h2>
         <post-list :posts="published"></post-list>
       </b-col>
     </b-row>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import PostList from '@/components/PostList'
  export default {
    components:{
      PostList
    },
    mounted (){
      this.fetchPosts()
    },
    methods: {
      ...mapActions('posts', ['fetchPosts'])
    },
    computed: {
      ...mapGetters('posts', ['published'])
    }
  }
</script>
