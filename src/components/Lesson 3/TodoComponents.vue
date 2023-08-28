<template>
  <div class="wrapper">
    <div class="sample">
      <div class="Todo">
        <h1>Your actions</h1>
        <div class="action" v-for="(action, i) in todoList">
          <div class="alert" :class="getActionClass(action)">
            <h2>{{ action.title }}</h2>
            <div class="progress">
              <div :style="{width: (action.current / action.max * 100) + '%'}"
                   class="progress-bar"
              >
              </div>
            </div>
            <hr>
            <h3 v-if="action.current === action.max">All done!</h3>
            <button v-else type="button" class="btn btn-primary" @click="makeStep(i)">
              I make step!
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

type TodoType = {
  title: string, current: number, max: number
}

export default defineComponent({
  name: "TodoComponents",
  components: {},
  props: {},

  setup() {
    const todoList: TodoType[] = ref([
      { title: "First action", current: 0, max: 5 },
      { title: "Other work", current: 0, max: 10 },
      { title: "Some fun", current: 0, max: 7 }
    ]).value;


    const makeStep = (i: number) => {
      let step = todoList[i] as TodoType;
      console.log(todoList[i]);
      if (step.current < step.max) {
        step.current++;
      }
    };

    const getActionClass = (action: TodoType) => {
      let rel = action.current / action.max;


    };
  });

</script>

<style lang="css" scoped></style>