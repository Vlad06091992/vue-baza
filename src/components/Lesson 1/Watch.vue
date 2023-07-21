<template>
  <div>123</div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, watch, ref } from 'vue';

export default defineComponent({
  name: 'Methods_reactive_computed',
  props: {
    msg: String,
  },
  setup() {
    let x = ref('3');

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

    const checkSale = watch(
      () => {
        return state.promo;
      },
      (state) => {
        console.log(state);
      },
    );

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
