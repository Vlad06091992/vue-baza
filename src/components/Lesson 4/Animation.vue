<template>
  <div class="wrapper">
    <div class="sample">
      <button class="btn btn-primary" @click="showAlert = !showAlert">Toggle alert</button>
      <hr>
      <transition name="fade">
        <div class="alert alert-success" v-show="showAlert">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore porro maiores, id quibusdam asperiores
            ullam voluptate totam perspiciatis dolores odit eligendi, reprehenderit vel? Laudantium quo repellendus
            voluptatum, laboriosam eos cupiditate.</p>
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

.fade-enter-active {
  animation: fadeIn 1s;
}

.fade-leave-active {
  animation: fadeOut 1s;

}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateX(0px);

  }

  to {
    opacity: 0;
    transform: translateX(100px);
  }
}


</style>