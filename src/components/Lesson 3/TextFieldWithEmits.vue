<script setup lang="ts">
import { defineProps, defineEmits, defineComponent } from "vue";
import Input from "@/components/Lesson 3/Input.vue";

type Props = {
  name: string,
  type: string,
}

const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);


const onInput = (event: any) => {
  emit("update:modelValue", event.target.value);
};
</script>

<template>
  <div>
    <label class="input-group " :for="name">{{ name }}</label>
    <input
      class="form form-control"
      :type="type"
      @input="onInput"
      :placeholder="props.name"
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

