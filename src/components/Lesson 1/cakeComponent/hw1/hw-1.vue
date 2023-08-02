<template>
  <div>hw-1</div>
  <p>Email</p>
  <input v-model="state.email" />
  <p>Phone</p>
  <input v-model="state.phone" />
  <p>Firstname</p>
  <input v-model="state.firstname" />
  <p>Lastname</p>
  <input v-model="state.lastname" />

  <div >
    <table class="table table-bordered">
      <tr v-for="key in getFieldNames">
        <td>{{ key }}</td>
        <td>{{ state[key] }}</td>
      </tr>
    </table>
  </div>

</template>

//TODO 01.35.00


<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import InputComponent from "./InputComponent.vue";

export default defineComponent({
  name: "hw1",
  props: {},
  components: {
    InputComponent
  },
  setup() {
    const state = reactive({
      email: "Smirnov.ru92@mail.ru",
      phone: 89623163431,
      firstname: "Vlad",
      lastname: "Smirnov",
      guests: []
    });

    const show = ref(false);
    const getFieldNames = Object.keys(state);


    return {
      state,
      show,
      getFieldNames
    };
  }
});
</script>


<style scoped lang="css">

* {
  box-sizing: border-box;
}

table{
  margin-top: 20px;
}

.table-bordered td,
.table-bordered th {
  border: 1px solid #dee2e6;
  padding: 10px;
}


</style>
