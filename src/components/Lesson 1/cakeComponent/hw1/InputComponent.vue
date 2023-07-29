<template>
  <p>{{title}}</p>
  <input v-bind:type='inputType' />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "hw1",
  props: {
    inputType: String,
    title: String,
  },


  setup() {

    return {};
  }
});
</script>