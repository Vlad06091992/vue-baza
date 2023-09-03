<template>
  <FormInput
          v-model="email"
          name="E-mail"
          type="email"
          @input="onInput"
        />
  <p>email Value : {{email}}</p>

</template>
<script setup lang="ts">
import {ref} from 'vue'
import FormInput from "@/components/Lesson 3/InputWithEmits.vue";

const email = ref('')

const onInput = (e: { target: { value: string } }) => {
  email.value = e.target.value;
};

</script>