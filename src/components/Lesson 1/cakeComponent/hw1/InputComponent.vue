<template>
  <p class="title">{{title}}</p>
  <input v-bind:type='inputType' :value="value" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "hw1",
  props: {
    inputType: String,
    title: String,
    cb:Function,
    value:{
      type:[String,Number]
    }
  },


  setup() {

    return {};
  }
});
</script>

<style scoped lang="css">

.title{
  margin: 10px 0 0;
}

</style>