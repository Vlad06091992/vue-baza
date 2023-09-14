<template>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur debitis dolor, ducimus eligendi error
    est excepturi harum libero minus odit optio pariatur perspiciatis quas quisquam ratione totam voluptas
    voluptatibus?</p>
  <app-alert title="Hello, user" content="Welcome to site" color="success" >
    <p>{{total}}</p>
    <p>{{items}}</p>
  </app-alert>>
  <app-alert title="Hello, user" content="Welcome to site" color="danger" />
</template>

<script setup lang="ts">

const total = 5000;
const items = 3;

import AppAlert from "@/components/Lesson 3/app-alert.vue";
</script>