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

  <button :disabled="disabledButton" @click="toggleShow" class="btn btn-primary">send data</button>

  <div v-show="show" >
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
import { computed, defineComponent, reactive, Ref, ref } from "vue";
import InputComponent from "./InputComponent.vue";

export default defineComponent({
  name: "hw1",
  props: {},
  components: {
    InputComponent
  },
  setup() {
    const state = reactive({
      email: "",
      phone: '',
      firstname: "",
      lastname: "",
      guests: []
    });

    let show = ref(false);
    const getFieldNames = Object.keys(state);

    const toggleShow = () => {
      console.log(show)
      show.value = !show.value
    }

    const disabledButton = computed(()=>{
      let fields = Object.values(state).filter(el=> !Array.isArray(el))
      return fields.some(el=> el.length < 1)
    })

    return {
      state,
      show,
      getFieldNames,
      toggleShow,
      disabledButton
    };
  }
});
</script>


<style scoped lang="css">

* {
  box-sizing: border-box;
}

.btn{
  margin: 10px;
  display: block;
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
