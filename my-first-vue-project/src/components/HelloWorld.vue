<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input
      type="text"
      v-bind:value="state.name"
      v-on:input="state.name = $event.target.value"
    />
    <p>name :{{ state.name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    const state = reactive({ name: 'fff' });

    return {
      state,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
