<template>
  <div>Lesson 3-4</div>
  <nav>
    <router-link to="/Lesson_3/todo-components"
    >
      Todo
    </router-link>
    |
    <router-link to="/Lesson_3/hw3"
    >
      hw3
    </router-link>
    |
    <router-link to="/Lesson_3/ParentComponentForInput"
    >
      ParentComponentForInput
    </router-link>
    |
    <router-link to="/Lesson_3/slot"
    >
      slot
    </router-link>

  </nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoComponents from "@/components/Lesson 3-4/TodoComponents.vue";

export default defineComponent({
  name: "Lesson_3",
  components: { TodoComponents },
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