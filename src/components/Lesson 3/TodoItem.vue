<template>
  <div class="alert" :class="getActionClass">
    <h2>{{ todoItem.title }}</h2>
    <div class="progress">
      <div :style="progressStyle"
           class="progress-bar"
      >
      </div>
    </div>
    <hr>
    <h3 v-if="todoItem.current === todoItem.max">All done!</h3>
    <button v-else type="button" class="btn btn-primary" @click="props.makeStep(todoItem)">
      I make step!
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { TodoType } from "./TodoComponents.vue";
import "@/styles/styles.css";
import "@/styles/font-awesome.min.css";
import "@/styles/bootstrap.min.css";

export default defineComponent({
  name: "TodoItem",
  components: {},
  props: {
    todoItem: {
      type: Object as () => TodoType,
      required: true
    },
    makeStep: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const { todoItem } = props;
    const getActionClass = computed(() => {
      let val = todoItem.current / todoItem.max;

      return {
        "alert-danger": val < 0.25,
        "alert-warning": val >= 0.25 && val < 0.75,
        "alert-success": val >= 0.75
      };
    });

    const progressStyle = computed(() => {
      return { width: (todoItem.current / todoItem.max * 100) + "%" };
    });

    return { props, getActionClass, todoItem, progressStyle };
  }
});
</script>

<style lang="css" scoped>
.wrapper{
  padding: 15px;
  max-width: 900px;
}
</style>
