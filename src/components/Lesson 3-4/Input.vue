<template>
  <div class="form-group">
    <label>
      {{ dataItem.label }}
      <span v-if="dataItem.activated">
        <transition  name="fade" mode="out-in"
                    enter-active-class="animate__animated animate__flipInY"
                    enter-leave-class="animate__animated animate__flipOutY"
        >


          <font-awesome-icon  v-if="dataItem.valid" icon="fa-solid fa-circle-check" style="color: #32c843;" />
    <font-awesome-icon v-else icon="fa-solid fa-circle-exclamation" style="color: #f50000;" />
          </transition>
      </span>
    </label>
    <input type="text" class="form-control" :value="dataItem.value" @input="onInput(dataItem,$event.target.value)">
  </div>
</template>


<script lang="ts">
import { computed, defineComponent, nextTick, onUpdated, reactive, ref } from "vue";

import "@/styles/styles.css";
import "@/styles/font-awesome.min.css";
import "@/styles/bootstrap.min.css";
import { DataType } from "@/components/Lesson 3-4/types";

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
    }
  },

  components: {},
  setup(props, ctx) {
    const { onInput, dataItem } = props;

    return { dataItem, onInput };
  }


});
</script>

<style>
* {
  text-align: left;
}

.start{
  opacity : 0; transition:opacity 1s
}

</style>
