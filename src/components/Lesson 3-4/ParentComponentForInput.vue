//01.10.44

<template>
  <FormInput
    name="E-mail"
    type="email"
    @updateValue="onInput"
  />
  <MdiSvg>{{ mdiWechat }}</MdiSvg>

  <p>email Value : {{ email }}</p>

</template>
<script setup lang="ts">
import { ref } from "vue";
import FormInput from "@/components/Lesson 3-4/InputWithEmits.vue";
import { mdiWechat } from "@mdi/js";

const email = ref("");

const onInput = (data: string) => {
  email.value = data;
};

</script>