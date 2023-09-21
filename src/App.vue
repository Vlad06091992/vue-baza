<template>
  <div class="flex">


    <nav>
      <router-link to="/Lesson_1">Lesson 1</router-link>
      |
      <router-link to="/Lesson_2">Lesson 2</router-link>
      |
      <router-link to="/Lesson_3">Lesson 3-4</router-link>
      |
      <router-link to="/Lesson_5">Lesson 5</router-link>
      |
      <router-link to="/about">About</router-link>
      |
    </nav>
  </div>
  <router-view />


</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 10px;
}

.flex {
  display: flex;
  justify-content: center;
}

nav {
  padding: 30px;


  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script setup lang="ts">
</script>

