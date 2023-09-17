<template>
  <div class="wrapper">
    <div class="sample">
      <button class="btn btn-primary" @click="showAlert = !showAlert">Toggle alert</button>
      <hr>
      <transition name="fade">
        <div class="alert alert-success" v-show="showAlert">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore porro maiores, id quibusdam asperiores ullam voluptate totam perspiciatis dolores odit eligendi, reprehenderit vel? Laudantium quo repellendus voluptatum, laboriosam eos cupiditate.</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showAlert = ref(false)

</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-leave-active {
  transition: opacity 0.5s;
  opacity: 0;
}
</style>