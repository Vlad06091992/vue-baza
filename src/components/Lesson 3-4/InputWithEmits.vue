<script setup lang="ts">
import { defineProps, defineEmits, defineComponent } from "vue";


type Props = {
  name: string,
  type: string,
}

const { name, type } = defineProps<Props>();
const emit = defineEmits(["updateValue"]);


const onInput = (event: any) => {
  console.log(event.target.value);
  emit("updateValue", event.target.value);
};
</script>

<template>
  <div>
    <label class="input-group " :for="name">{{ name }}</label>
    <input
      class="form form-control"
      :type="type"
      @input="onInput"
      :placeholder="name"
    />
    <br />
  </div>
</template>

<style module>
input {
  padding: 10px;
  width: 80%;
}
</style>

