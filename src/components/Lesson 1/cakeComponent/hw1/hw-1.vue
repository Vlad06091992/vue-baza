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
  <button class="btn btn-light" @click="setGuests">guests +</button>
  <div v-for="(guest, index) in state.guests">
    <div> Guest {{ index + 1 }}</div>
    <input v-model="state.guests[index]" type="text" />
  </div>
  <hr />
  <button :disabled="disabledButton" @click="toggleShow" class="btn btn-success">send data</button>

  <div v-show="show">
    <table class="table table-bordered">
      <tr v-for="key in getFieldNames">
        <td>{{ key }}</td>
        <td v-if="Array.isArray(state[key])">
          <tr v-for="guest in state.guests">
            <td>{{ guest }}</td>
          </tr>
        </td>
        <td v-else>{{ state[key] }}</td>
        <!--        <h1 v-if="awesome">Vue is awesome!</h1>-->
        <!--        <h1 v-else>Oh no 😢</h1>-->

      </tr>
    </table>
  </div>

</template>

//TODO 01.35.00


<script lang="ts">
import { computed, defineComponent, reactive, Ref, ref } from "vue";
import InputComponent from "./InputComponent.vue";

type StateType = {

  email: string,
  phone: string,
  firstname: string,
  lastname: string,
  guests: string[]

}

export default defineComponent({
  name: "hw1",
  props: {},
  components: {
    InputComponent
  },
  setup() {
    const state: StateType = reactive({
      email: "",
      phone: "",
      firstname: "",
      lastname: "",
      guests: []
    });

    let show = ref(false);
    const getFieldNames = Object.keys(state);

    const toggleShow = () => {
      console.log(show);
      show.value = !show.value;
    };

    const disabledButton = computed(() => {
      let fields = Object.values(state).filter(el => !Array.isArray(el));
      return (fields.some(el => el.length < 1) || state.guests.some(el=> el.length < 1));
    });

    const setGuests = () => {
      state.guests.push("");
    };


    return {
      state,
      show,
      getFieldNames,
      toggleShow,
      disabledButton,
      setGuests
    };
  }
});
</script>


<style scoped lang="css">

* {
  box-sizing: border-box;
}

.btn {
  margin: 10px;
  display: block;
}

table {
  margin-top: 20px;
}

.table-bordered td,
.table-bordered th {
  border: 1px solid #dee2e6;
  padding: 10px;
}


</style>
