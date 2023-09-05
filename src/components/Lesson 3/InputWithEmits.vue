
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import Input from "@/components/Lesson 3/Input.vue";

const { name, type, modelValue } = defineProps(["name", "type", "modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const onInput = (event:any) => {
  emit("update:modelValue", event.target.value);
};
</script>

<template>
  <div>
    <label class="input-group " :for="name">{{ name }}</label>
    <input
      class="form form-control"
      :type="type"
      :value="modelValue"
      @input="onInput"
      :placeholder="name"
    />
    <br />
  </div>
</template>

<style module>
input{
  padding: 10px;
  width: 80%;
}
</style>

