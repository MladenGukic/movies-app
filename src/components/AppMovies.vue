<template>
  <div class="card">
      <movie-search @search-term-updated="onSearchTermChanged"/>
      <ul v-for="movie in movies" :key="movie.id">
      <movie-row :movie="movie"/>
      </ul>
      <div v-if="!movies.length">
       <h1> No Movies </h1>
      </div>
  </div>
</template>

<script>
import MovieRow from './MovieRow'
import MovieSearch from './MovieSearch'
import { movieService } from '../services/movies-service'

export default {
    name: 'AppMovies',
    components: {
        MovieRow,
        MovieSearch
    },

    data () {
        return {
            movies: [],
        }
    },

    methods: {
        onSearchTermChanged(title) {
            movieService.getAll(title)
            .then(r => {
            this.movies = r.data
            })
        }
    },


    beforeRouteEnter(to, from, next) {
        movieService.getAll()
        .then(r => {next(vm => vm.movies = r.data)})
    },
}
</script>

<style>

</style>