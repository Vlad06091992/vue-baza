// TODO 02.03.00

<template>
  <div>
    <label>
      <input type="radio" value="orange" :checked="state.color === 'orange'" @change="state.color = 'orange'">orange
    </label>
    <label>
      <input type="radio" value="green" v-model="state.color">green
    </label>
    <div>
      state.color:{{ state.color }}
    </div>
  </div>

  <div :class="state.color">test color</div>

</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, onMounted, onUpdated, nextTick } from "vue";

export default defineComponent({
  name: "classesAndForms",
  props: {},
  components: {},
  setup(props, ctx) {
    const state: any = reactive({
      color: ""
    });

    return { state };

  }
});
</script>

<style style scoped lang="css">

input {
  display: inline-block;
  margin: 10px;
}

div {
  margin: 10px;
}

.orange {
  color: orange;
}

.green {
  color: green;
}
</style>