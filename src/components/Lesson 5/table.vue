<template>
  <table class="table table-bordered" v-for="field in props.info">
    <tr>
      <td>{{ field.label }}</td>
      <td>{{ field.value }}</td>
    </tr>
  </table>
</template>

<script setup lang="ts">

import { DataType } from "@/components/Lesson 3-4/types";

const props = defineProps<{info:DataType[]}>()
</script>