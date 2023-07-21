<template>
  <div class="hello">hello</div>

  <input
    type="text"
    v-model="state.promo"
    @input="showState"
    @change="checkSale"
  />
  <div>{{ state.price }}</div>
  <div v-if="showSale">
    <div class="alert alert-danger">- {{ sale }} %</div>
  </div>
  <div>{{ total }}</div>
  <button @click="showState">showState</button>
  <button @click="setSaleInState">setSale</button>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, watch } from 'vue';

export default defineComponent({
  name: 'Methods_reactive_computed',
  props: {
    msg: String,
  },
  setup() {
    const state = reactive({
      promo: '',
      price: 1000,
      sale: 0,
    });

    const total = computed(() => {
      return state.price * (1 - sale.value / 100);
    });

    const showSale = computed(() => {
      return sale.value > 0;
    });

    const checkSale = () => {
      console.log(state.promo);
    };

    const sale = computed(() => {
      return getSale(state.promo);
    });

    const getSale = (promo: string) => {
      let codes: { [key: string]: number } = {
        some: 10,
        other: 20,
      };
      // eslint-disable-next-line no-prototype-builtins
      return codes.hasOwnProperty(promo) ? codes[promo] : 0;
    }; //methods

    const setSaleInState = () => {
      state.sale = sale.value;
    };

    const showState = () => {
      console.log(state);
    };

    return {
      state,
      getSale,
      total,
      sale,
      showSale,
      showState,
      checkSale,
      setSaleInState,
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
