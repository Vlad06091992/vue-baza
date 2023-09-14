<template>
  <div :class="`alert-${props.color}`">
  <h3>{{props.title}}</h3>
  <hr/>
  <p>{{ props.content}}</p>
    <slot></slot>
    <slot name="ok">
      <button class="btn-light" type="button" @click="$emit('ok')"> ok</button>
    </slot>
</div>
</template>

<script setup lang="ts">

type Props = {
  title:string,
  content:string
  color:string
}

import { defineProps } from "vue";

const props = defineProps<Props>();

</script>

<style module>


</style>

