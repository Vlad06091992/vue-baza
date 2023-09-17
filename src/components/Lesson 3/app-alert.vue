<template>
  <div :class="`alert-${props.color}`">
  <h3>{{props.title}}</h3>
  <hr/>
  <p>{{ props.content}}</p>
    <slot name="buttons">
      <button @click="emitCustomEvent">Нажми меня</button>
    </slot>
    <slot name="someSlot">

    </slot>
</div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue/dist/vue";

const emit = defineEmits(['customEvent']);

const emitCustomEvent = () => {
  emit('customEvent', 'Событие произошло!');
};



type Props = {
  title:string,
  content:string
  color:string
}

const ok = 1

const okHandler = (e:any) => {
  emit('customEvent', e.target.text)
}


import { defineProps } from "vue";

const props = defineProps<Props>();

</script>

<style module>


</style>

