<template>
  <div>v-for_ref</div>
  <button type="button" class="btn btn-primary b" @click="addNum">add number</button>
  <ul class="list-group">
    <li @click="double(index)" class="list-group-item" v-for="(number, index) in numbers" :key="number">index : {{index}} /number:{{ number }} </li>
  </ul>
</template>

//TODO 01.35.00

<script lang="ts">
import { defineComponent, Ref, ref} from "vue";

export default defineComponent({
  name: "v-for_ref",
  props: {},
  setup() {
    let numbers:Ref<number[]> = ref([1, 2, 3, 4, 5]);
    const addNum = () => {
      let n = Math.floor(Math.random() * 10)
      numbers.value.push(n)
    }

    const double = (i:number) => {
    // console.log(numbers.value[i])

      numbers.value[i] = numbers.value[i] * 2
    }

    return {
      numbers,
      addNum,
      double
    };
  }
});
</script>


<style scoped lang="scss">
.b{
  margin: 10px;
}

</style>
