<template>
  <div class="form-group">
    <label>Email</label>
    <input type="text" class="form-control" v-model="state.email">
    <hr>
    {{ state.email }}
  </div>
</template>

//TODO 01.11

<script lang="ts">
import {
  computed, defineComponent, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted,
  onUnmounted, onUpdated, reactive, ref
} from "vue";


export default defineComponent({
  name: "lifecycles",
  props: {},

  setup() {
    const state = reactive({
      email: "test email"
    });

    onBeforeMount(() => {
      console.log("beforeMounted");
      console.log(state);
    });


    onMounted(() => {
      console.log("mounted");
      console.log(state);

    });

    onBeforeUpdate(() => {
      console.log("beforeUpdate");
      console.log(state);

    })
      onUpdated(() => {
        console.log("updated");
        console.log(state);

      });
    onBeforeUnmount(()=>{
      console.log("beforeUnmount");
    })

    onUnmounted(()=>{
      console.log("onMounted");
    })

    return {
      state

    };
  }

});

</script>


<style scoped lang="css">

</style>