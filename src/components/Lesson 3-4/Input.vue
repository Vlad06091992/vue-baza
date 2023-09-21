<template>
  <div class="form-group">
    <label>
      {{ dataItem.label }}


<!--      <transition name="fade" mode="out-in">-->
<!--        <div class="alert alert-success" v-if="showAlert">-->
<!--          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore porro maiores, id quibusdam asperiores-->
<!--            ullam voluptate totam perspiciatis dolores odit eligendi, reprehenderit vel? Laudantium quo repellendus-->
<!--            voluptatum, laboriosam eos cupiditate.</p>-->
<!--        </div>-->
<!--        <div class="alert alert-danger" v-else>-->
<!--          <p>Lorem ipsum dolor, laboriosam eos cupiditate.</p>-->
<!--        </div>-->
<!--      </transition>-->


      <span v-if="dataItem.activated">
        <transition appear name="fade" mode="out-in" >
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
  text-align: left
}

.fade-enter-active{
  animation: fadeIn 1s;
}

.fade-leave-active{
  animation: fadeOut 1s;
}



@keyframes fadeIn {
  from{ opacity: 0; transform: rotateY(180deg); }
  to{ opacity: 1; transform: rotate(0); }
}

@keyframes fadeOut {
  from{ opacity: 1; transform: rotateY(-180deg); }
  to{ opacity: 0; transform: rotate(0); }
}

</style>
