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
        <input type="checkbox" v-model="tableClasses[key]" />{{ key }}

      </label>
    </div>


    <!--    <input type="checkbox" v-model="checkbox" />{{key}}-->


    <table class="table" :class="tableClasses">
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

  <!--  <input type="checkbox" id="jack" value="Джек" v-model="checkedNames">-->
  <!--  <label for="jack">Джек</label>-->
  <!--  <input type="checkbox" id="john" value="Джон" v-model="checkedNames">-->
  <!--  <label for="john">Джон</label>-->
  <!--  <input type="checkbox" id="mike" value="Майк" v-model="checkedNames">-->
  <!--  <label for="mike">Майк</label>-->
  <!--  <br>-->
  <!--  <span>Отмеченные имена: {{ checkedNames }}</span>-->


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


    let checkbox = ref<HTMLInputElement>();

    const tableClasses = reactive({
      "table-bordered": true,
      "table-danger": true,
      "green": true
    });
    ;


    const computedClasses = computed(() => {
      return {
        "red": state.color == "red",
        "green": state.color == "green",
        "yellow": state.color == "yellow",
        "orange": state.color == "orange"
      };
    });

    return { state, computedClasses, tableClasses,  checkbox };

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