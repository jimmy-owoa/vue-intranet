export function setPosts (state, posts) {
  state.posts = posts;
}

export function setPost (state, post){
  state.selectedPost = post
}

export function postsError(state, payload){
  state.error = true
  state.errorMessage = payload
  state.posts = []
}