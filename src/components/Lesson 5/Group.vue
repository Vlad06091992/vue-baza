<template>
  <div class="wrapper">
    <div class="sample">
      <form v-if="!formDone" @submit.prevent="sendForm">
        <div class="form-group">
          <label>Email</label>
          <input v-model.trim="user.email" type="text" class="form-control" ref="firstInp">
        </div>
        <div class="form-group">
          <label>Phone</label>
          <input v-model.trim="user.phone" type="text" class="form-control">
        </div>
        <div class="form-group">
          <label>First Name</label>
          <input v-model.trim="user.firstName" type="text" class="form-control">
        </div>
        <div class="form-group">
          <label>Last Name</label>
          <input v-model.trim="user.lastName" type="text" class="form-control">
        </div>
        <div class="form-group">
          <label>Guests</label>
          <input @click="addGuest" type="button" class="btn btn-primary" value="+">
        </div>
        <transition-group name="fade">
          <div class="form-group" v-for="(guest,i) in guests" :key="guest.id">
            <label @dblclick="removeGuest(i as number)">Guest {{ i + 1 }}</label>
            <input v-model.trim="guest.value" type="text" class="form-control">
          </div>
        </transition-group>
        <hr>
        <button class="btn btn-success" :disabled="!formReady">Send Data</button>
      </form>
      <div v-else>
        <h2>All done!</h2>
        <table class="table table-bordered">
          <tr>
            <td>Email</td>
            <td>{{ user.email }}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{{ user.phone }}</td>
          </tr>
          <tr>
            <td>Full Name</td>
            <td>{{ fullName }}</td>
          </tr>
          <tr>
            <td>Guests</td>
            <td>
              <ul class="list-group">
                <li class="list-group-item" v-for="guest in guests">
                  {{ guest.value }}
                </li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

let firstInp = ref()

const user = ref({
  email: "",
  phone: "",
  firstName: "",
  lastName: ""
});
let guests = ref<any>([]);
let guestsAI = ref(0);
let formDone = ref(false);


const fullName = computed(() => {
  return (user.value.firstName + " " + user.value.lastName).trim();
});
const formReady = () => {
  return Object.values(user.value).every(val => val.length > 0);
};


const addGuest = () => {
  guests.value.push({ id: ++guestsAI.value, value: "" });
};
const removeGuest = (i: number) => {
  guests.value.splice(i, 1);
};
const sendForm = () => {
  if (formReady()) {
    formDone.value = true;
    guests = guests.value.filter((g: any) => g.value.length > 0);
  }
}
onMounted(()=>{
  firstInp.value.focus()
})
</script>

<style scoped>
.sample {
  overflow: hidden;
}

.fade-enter-active {
  animation: fadeIn 0.5s;
}

.fade-leave-active {
  animation: fadeOut 0.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100px);
  }
}
</style>