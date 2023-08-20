// TODO 02.03.00

<template>
  <div>
    <label>
      <input type="radio" value="orange" v-model="state.color">orange
    </label>
    <label>
      <input type="radio" value="red" v-model="state.color">red
    </label>
    <label>
      <input type="radio" value="green" v-model="state.color">green
    </label>

    <label>
      <input type="radio" value="yellow" v-model="state.color">yellow
    </label>
    <div>
      state.color:{{ state.color }}
    </div>
    <div v-for="(val, key) in tableClasses">
      <label>
        <input type="checkbox" v-model="tableStyles[key]" />{{key}}

      </label>
    </div>





    <table class="table " :class="tableClasses" >
      <tr>
        <td>some</td>
        <td>some</td>
        <td>some</td>
      </tr>
      <tr>
        <td>some</td>
        <td>some</td>
        <td>some</td>
      </tr>
      <tr>
        <td>some</td>
        <td>some</td>
        <td>some</td>
      </tr>

    </table>
  </div>

  <div :class="state.color">test color(state.color)</div>
  <div :class="computedClasses">test color(computed class return object)</div>

</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, onMounted, onUpdated, nextTick } from "vue";

export default defineComponent({
  name: "classesAndForms",
  props: {},
  components: {},
  setup(props, ctx) {
    const state: any = reactive({
      color: "green"
    });

    let tableStyles = reactive({
      red: false,
      hover: false,
      bordered: false
    });

    const tableClasses = computed(() => {
      return {
        "table-bordered": tableStyles.bordered,
        "table-hover": tableStyles.hover,
        "red": tableStyles.red
      };
    });


    const computedClasses = computed(() => {
      return {
        "red": state.color == "red",
        "green": state.color == "green",
        "yellow": state.color == "yellow",
        "orange": state.color == "orange"
      };
    });

    return { state, computedClasses, tableClasses, tableStyles };

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

.main {
  font-size: 20px;
}

.orange {
  color: orange;
}

.green {
  color: green;
}

.red {
  color: red
}

.yellow {
  color: yellow;
}
</style>