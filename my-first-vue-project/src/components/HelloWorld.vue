<template>
  <div class="hello">hello</div>
  <p>
    {{ getSale('') }}
    {{ getSale('some') }}
    {{ getSale('other') }}
  </p>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    const state = reactive({ promo: '', price: 1000 });

    // const getFullName = computed({
    //   get() {
    //     // return `${state.firstName} ${state.lastName}`.trim();
    //   },
    //
    //   set(value: string) {
    //     // return `${state.firstName} ${state.lastName} ${value}`.trim();
    //   },
    // });

    const getSale = (promo: string) => {
      let codes: { [key: string]: number } = {
        some: 10,
        other: 20,
      };

      // eslint-disable-next-line no-prototype-builtins
      return codes.hasOwnProperty(promo) ? codes[promo] : 0;
    }; //methods

    return {
      state,
      // getFullName,
      getSale,
    };
  },
});

console.dir(defineComponent);

function fullNametoUpperCase() {
  throw new Error('Function not implemented.');
}
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
