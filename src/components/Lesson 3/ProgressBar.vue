<template>
  <div class="progress">
    <div class="progress-bar" :style="progressStyle"></div>
  </div>
</template>
<script setup lang="ts">

type Props = {
  progressValue: number

}

import { defineEmits, defineProps } from "vue/dist/vue";
import { computed, watch } from "vue";

const props = defineProps<Props>();


const progressStyle = computed(() => {

    return { width: `${props.progressValue * 20}%` };
  })
;


</script>

<style module>

</style>