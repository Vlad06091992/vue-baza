<template>
  <div class="wrapper">
    <div class="sample">
      <button class="btn btn-primary" @click="showAlert = !showAlert">Toggle alert</button>
      <hr>
      <transition name="fade" mode="out-in" >
        <div class="alert alert-success" v-if="showAlert">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore porro maiores, id quibusdam asperiores ullam voluptate totam perspiciatis dolores odit eligendi, reprehenderit vel? Laudantium quo repellendus voluptatum, laboriosam eos cupiditate.</p>
        </div>
        <div class="alert alert-danger" v-else>
          <p>Lorem ipsum dolor, laboriosam eos cupiditate.</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import 'animate.css';

const showAlert = ref(false);

</script>

<style scoped>


.sample{
  overflow: hidden;
}

.fade-enter-active{
  animation: fadeIn 1s;
}

.fade-leave-active{
  animation: fadeOut 1s;
}



@keyframes fadeIn {
  from{ opacity: 0; transform: rotateY(180deg); }
  to{ opacity: 1; transform: rotate(0); }
}

@keyframes fadeOut {
  from{ opacity: 1; transform: rotateY(-180deg); }
  to{ opacity: 0; transform: rotate(0); }
}

</style>

//@keyframes fadeIn {
//  from{ opacity: 0; transform: translateX(-100px); }
//  to{ opacity: 1; transform: translateX(0); }
//}
//
//@keyframes fadeOut {
//  from{ opacity: 1; transform: translateX(0); }
//  to{ opacity: 0; transform: translateX(100px); }
//}