<template>
  <div>Lesson 1</div>
  <nav>
    <router-link to="/Lesson_1/methods-reactive-computed"
    >methods-reactive-computed
    </router-link
    >
    |
    <router-link to="/Lesson_1/watchers">Watchers</router-link>
    |
    <router-link to="/Lesson_1/v-for__ref">v-for and ref</router-link>
    |
    <router-link to="/Lesson_1/cake">cake</router-link>
    |
    <router-link to="/Lesson_1/hw1">hw1</router-link>
    |
  </nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Lesson_1",
  props: {
    msg: String
  }
});
</script>

<style scoped>

* {
  text-align: center;
}

</style>