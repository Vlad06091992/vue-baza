<template>
  <div class="form-group">
    <label>
      {{ dataItem.label }}
      <span v-if="dataItem.activated"
            :class="dataItem.valid ? 'fa fa-check-circle text-success' : 'fa fa-exclamation-circle text-danger'"

      ></span>
    </label>
    <input type="text" class="form-control" :value="dataItem.value" @input="onInput(dataItem,$event.target.value)">
  </div>
</template>


<script lang="ts">
import { computed, defineComponent, nextTick, onUpdated, reactive, ref } from "vue";

import "@/styles/styles.css";
import "@/styles/font-awesome.min.css";
import "@/styles/bootstrap.min.css";
import { DataType } from "@/components/Lesson 3/types";

export default defineComponent({
  name: "Input",

  props: {
    dataItem: {
      type: Object as () => DataType,
      required: true
    },
    onInput: {
      type: Function,
      required: true
    },
  },

  components: {},
  setup(props, ctx) {
    const { onInput, dataItem } = props;

    return { dataItem, onInput};
  }


});
</script>

<style>
* {
  text-align: left
}
</style>
