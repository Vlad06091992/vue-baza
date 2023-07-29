<template>
  <div>hw-1</div>
  <InputComponent inputType="text" title="email" />
  <InputComponent inputType="number" title="number" />
  <InputComponent inputType="text" title="email" />
  <InputComponent inputType="text" title="email" />
</template>

//TODO 01.35.00


<script lang="ts">
import { defineComponent } from "vue";
import InputComponent from "./InputComponent.vue"

export default defineComponent({
  name: "hw1",
  props: {},
  components: {
    InputComponent,
  },
  setup() {

    return {};
  }
});
</script>


<style scoped lang="css">

* {
  box-sizing: border-box;
}


</style>
