//TODO 01.31.00

<template>
  <div>hw-1</div>
  <form v-if="!show" @submit.prevent="toggleShow" v-show="!show">
    <p>Email</p>
    <input ref="firstInp" class="form-control" v-model="state.email" />
    <p>Phone</p>
    <input class="form-control" v-model="state.phone" />
    <p>Firstname</p>
    <input class="form-control" v-model="state.firstname" />
    <p>Lastname</p>
    <input class="form-control" v-model="state.lastname" />
    <input type="button" class="btn btn-light" @click="addGuests" value="guests +" />
    <div v-for="(guest, index) in state.guests" :key="index">
      <label @dblclick="removeGuest(index)"> Guest {{ index + 1 }}</label>
      <input class="form-control" v-model="guest.name" type="text" ref="arrayGuestsInputs" />
    </div>
    <button :disabled="disabledButton" type="submit" class="btn btn-success">send data</button>
  </form>
  <div v-else>
    <table class="table table-bordered">
      <tr>
        <td>Email</td>
        <td>{{ state.email }}</td>
      </tr>
      <tr>
        <td>Phone</td>
        <td>{{ state.phone }}</td>
      </tr>
      <tr>
        <td>Fullname</td>
        <!--        <td>{{ `${state.firstname} ${state.firstname}` }}</td>-->
        <td>{{ fullname }}</td>

      </tr>
      <tr>
        <td>Guests</td>
        <td>
          <ul class="list-group">
            <li class="list-group-item" v-for="guests in state.guests">{{ guests.name }}</li>
          </ul>
        </td>
      </tr>
    </table>
  </div>

</template>

//TODO 01.35.00


<script lang="ts">
import { computed, defineComponent, nextTick, onUpdated, reactive, ref } from "vue";


class Guest {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

type GuestsType = {
  name: string
}

type StateType = {
  email: string,
  phone: string,
  firstname: string,
  lastname: string,
  guests: GuestsType[]
}

export default defineComponent({
  name: "hw1Refs",
  props: {},
  components: {},
  setup(props, ctx) {
    const state: StateType = reactive({
      email: "",
      phone: "",
      firstname: "",
      lastname: "",
      guests: []
    });

    let show: any = ref(false);
    let arrayGuestsInputs = ref<Array<HTMLInputElement>>();
    const getFieldNames = Object.keys(state);

    onUpdated(() => {
      debugger
    });
    const toggleShow = () => {
      show.value = !show.value;
    };

    const formReady = computed(() => {
      let fields = Object.values(state).filter(el => !Array.isArray(el));
      return (fields.some((el: any) => el.trim().length < 1) || state.guests.some((el: GuestsType) => el.name.trim().length < 1));
    });

    const fullname = computed(() => {
      return `${state.firstname} ${state.lastname}`;
    });

    const addGuests = () => {
      state.guests.push(new Guest(""));

      nextTick(() => {
        debugger
        if (arrayGuestsInputs.value) {
          arrayGuestsInputs.value[arrayGuestsInputs.value.length - 1].focus();
        }
      }).then(() => {
        debugger
      });


    };

    const removeGuest = (index: number) => {
      state.guests.splice(index, 1);
    };


    return {
      state,
      show,
      getFieldNames,
      toggleShow,
      disabledButton: formReady,
      addGuests,
      fullname,
      removeGuest,
      arrayGuestsInputs
    };
  }
});
</script>


<style scoped lang="css">

* {
  box-sizing: border-box;
}

.form-control {
  width: 300px;
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
