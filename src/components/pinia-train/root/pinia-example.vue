<template>
  <main>
    <header class="header">
      <img :src="piniaIcon" alt="logo" class="header-logo" />
      <h2>My Favorite Movies</h2>
    </header>
    <div class="tabs">
      <button :class="['btn', { btn_green: movieStore.activeTab === 1 }]">
        Favorite
      </button>
      <button :class="['btn', { btn_green: movieStore.activeTab === 2 }]">
        Search
      </button>
    </div>
    <div class="movies" v-if="movieStore.activeTab === 1">
      <h3>Watched Movies</h3>
      <Movie v-for="movie of movieStore.watchedMovies"
             :movie="movie"
      />
      <h3>All Movies</h3>
      <Movie v-for="movie of movieStore.movies"
             :movie="movie"
      />

    </div>
    <div class="search" v-else>Search</div>
  </main>
</template>

<script setup lang="ts">
import { useMovieStore } from "@/stores/movieStore";
import piniaIcon from "@/assets/pinia-seeklogo.com.svg";
import Movie from "@/components/pinia-train/components/Movie.vue";

const movieStore = useMovieStore();
</script>

<style scoped lang="css">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap");

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.header-logo {
  max-width: 50px;
  margin-right: 10px;
}

.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
}

.btn:hover {
  opacity: 0.7;
}

.btn_green {
  background: #37df5c;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}


main {
  background: #f9f9f9;
  font-family: "Roboto Condensed", sans-serif;
  max-width: 600px;
  margin: auto;
}

</style>
