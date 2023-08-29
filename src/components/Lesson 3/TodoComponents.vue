<template>
  <div class="wrapper">
    <div class="sample">
      <div class="Todo">
        <h1>Your actions</h1>
        <div class="action" v-for="(action, i) in todoList">
          <TodoItem :todo-item="action" :make-step="makeStep" :key="i"></TodoItem>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TodoItem from "@/components/Lesson 3/TodoItem.vue";

export type TodoType = {
  title: string, current: number, max: number
}

export default defineComponent({
  name: "TodoComponents",
  components: { TodoItem },
  props: {},

  setup() {
    const todoList: TodoType[] = ref([
      { title: "First action", current: 0, max: 5 },
      { title: "Other work", current: 0, max: 10 },
      { title: "Some fun", current: 0, max: 7 }
    ]).value;

    const makeStep = (todoItem: TodoType) => {
      if (todoItem.current < todoItem.max) {
        todoItem.current++;
      }
    };
    return { todoList, makeStep };
  }
});

</script>

<style lang="css" scoped></style>