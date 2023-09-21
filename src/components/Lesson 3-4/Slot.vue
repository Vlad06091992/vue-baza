<template>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur debitis dolor, ducimus eligendi error
    est excepturi harum libero minus odit optio pariatur perspiciatis quas quisquam ratione totam voluptas
    voluptatibus?</p>
  <app-alert @customEvent="handleCustomEvent"  title="Hello, user" content="Welcome to site" color="success" >
    <p>{{total}}</p>
    <p>{{items}}</p>
    <template v-slot:buttons>
    </template>
  </app-alert>


  <app-alert title="Hello, user" content="Welcome to site" color="success" >
    <p>{{total}}</p>
    <p>{{items}}</p>
    <template v-slot:someSlot>
      <h2>some slot</h2>
    </template>
  </app-alert>

</template>

<script setup lang="ts">

import { defineEmits, ref } from "vue";

const eventData = ref('');

const handleCustomEvent = (data:string) => {
  console.log(data)
};

const handleReset = (data:string) => {
  console.log('reset произошел')
};


const total = 5000;
const items = 3;

import AppAlert from "@/components/Lesson 3-4/app-alert.vue";
</script>