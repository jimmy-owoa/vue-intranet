import Vue from 'vue'

export async function fetchPosts ({commit}){
  try
  {
    const {data} = await Vue.axios({
      url: '/frontend/posts'
    })
    commit('setPosts', data)
  }catch
  {
    commit('postsError', e.message)
  }
  finally
  {
    console.log('La petición para obtener los posts ha finalizado')
  }
}
 
export async function addPost ({commit, dispatch}, post){
  try
  {
    await Vue.axios({
      method: 'POST',
      url: '/posts',
      data: {
        title: post.title,
        content: post.content
      }
    })
    dispatch('fetchPosts')
  }catch
  {
    commit('postsError', e.message)
  }
  finally
  {
    console.log('La petición para crear los posts ha finalizado')
  }
}

