<template>
  <span :style="{color:color}">{{ text }}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { computed } from "vue";
import { types } from "sass";
import Null = types.Null;


export default defineComponent({
  name: "TableCellSpan",
  props: {
    value: {
      type: String,
      required: false,
    }
  },
  components: {},


  setup(props, ctx) {
    debugger
    const text = computed(() => {
      return props.value ? "yes" : "no";
    });

    const color = computed(() => {
      return props.value ? "green" : "red";
    });

    return { text, color };
  }
});
</script>

<style>
.green {
  color: green;
}

.red {
  color: red;
}
</style>