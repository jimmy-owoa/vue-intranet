export function published (state){
  return state.posts.filter(post => post.status == 'Publicado')
}