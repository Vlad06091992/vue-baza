<template>
  <div>v-for_ref</div>
  <button type="button" class="btn btn-primary b" @click="addNum">add number</button>
  <ul class="list-group">
    <li class="list-group-item" v-for="number in numbers" :key="number">{{ number }}</li>
  </ul>
</template>

//TODO 01.35.00

<script lang="ts">
import { defineComponent, ref} from "vue";

export default defineComponent({
  name: "v-for_ref",
  props: {},
  setup() {

    let numbers = ref([1, 2, 3, 4, 5]);

    const addNum = () => {

      let n = Math.floor(Math.random() * 10)

      numbers.value.push(n)
    }

    return {
      numbers,
      addNum
    };
  }
});
</script>


<style scoped lang="scss">
.b{
  margin: 10px;
}

</style>
