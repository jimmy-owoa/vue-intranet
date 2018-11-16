<template>
  <div id="app">
    <b-container>
      <b-nav tabs>
        <b-nav-item exact to="/posts">Listado de posts</b-nav-item>
        <b-nav-item exact to="/post">post</b-nav-item>

      </b-nav>
    </b-container>
    <router-view/>
  </div>
</template>
