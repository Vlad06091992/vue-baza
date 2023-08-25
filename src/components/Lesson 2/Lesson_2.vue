<template>
  <div>Lesson 2</div>
  <nav>
    <router-link to="/Lesson_2/lifecycles"
    >lifecycles
    </router-link>
    |
    <router-link to="/Lesson_2/hw1refs"

    >hw-1-refs
    </router-link>
    |
    <router-link to="/Lesson_2/ClassesAndForms">ClassesAndForms
    </router-link>
    |<router-link to="/Lesson_2/hw2scroll">hw2scroll
    </router-link>
    <!--    |-->
    <!--    <router-link to="/Lesson_1/watchers">Watchers</router-link>-->
    <!--    |-->
    <!--    <router-link to="/Lesson_1/v-for__ref">v-for and ref</router-link>-->
    <!--    |-->
    <!--    <router-link to="/Lesson_1/cake">cake</router-link>-->
    <!--    |-->
    <!--    <router-link to="/Lesson_1/hw1">hw1</router-link>-->
    <!--    |-->
  </nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hw2scroll from "@/components/Lesson 2/hw2scroll.vue";

export default defineComponent({
  name: "Lesson_2",
  components: { Hw2scroll },
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