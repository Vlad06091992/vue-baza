<template>
  <div class="hello">hello</div>

  <input
    type="text"
    v-model="state.promo"

  />
  <div>{{ state.price }}</div>
  <div v-if="showSale">
    <div class="alert alert-danger">- {{ state.sale }} %</div>
  </div>
  <div>{{ total }}</div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, watch, onRenderTriggered } from "vue";

export default defineComponent({
  name: "Methods_reactive_computed",
  props: {
    msg: String
  },
  setup() {
    const state = reactive({
      promo: "",
      price: 1000,
      sale: 0
    });

    const promo = watch(()=>state.promo,(value)=>{getSale(value,setSale)})

    const total = computed(() => {
      return state.price * (1 - state.sale / 100);
    });

    const showSale = computed(() => {
      return state.sale > 0;
    });

    const setSale = (sale: number) => {
      state.sale = sale;
    };

    const sale = computed(() => {
      getSale(state.promo, setSale);
    });

    const getSale = (promo: string, fn: any) => {
      setTimeout(()=>{
        let codes: { [key: string]: number } = {
          some: 10,
          other: 20
        };

        let res = codes.hasOwnProperty(promo) ? codes[promo] : 0;
        fn(res);

      },1000)

    }; //methods



    return {
      state,
      getSale,
      total,
      sale,
      showSale,
      promo
    };
  }
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
