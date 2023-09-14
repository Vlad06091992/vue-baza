//01.10.44

<template>
  <Textfield
    v-model="email"
    name="E-mail"
    type="text"
    @input="onInput"
  />
  <MdiSvg>{{ mdiWechat }}</MdiSvg>

  <p>email Value : {{ email }}</p>

</template>
<script setup lang="ts">
import { ref } from "vue";
import Textfield from "@/components/Lesson 3/TextFieldWithEmits.vue";
import { mdiWechat } from "@mdi/js";

const email = ref("");

// const onInput = (e: { target: { value: string } }) => {
const onInput = (e: { target: { value:string } }) => {
  email.value = e.target.value;
};

</script>