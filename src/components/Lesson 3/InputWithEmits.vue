
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const { name, type, modelValue } = defineProps(["name", "type", "modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const onInput = (event:any) => {
  emit("update:modelValue", event.target.value);
};
</script>

<template>
  <div>
    <label class="px-3" :for="name">{{ name }}</label>
    <input
      :type="type"
      :value="modelValue"
      @input="onInput"
      :placeholder="name"
    />
    <br />
  </div>
</template>

