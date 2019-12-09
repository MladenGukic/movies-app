<template>
  <div class="card">
      <movie-search @search-term-updated="onSearchTermChanged"/>
      <strong> Selected movies: {{selectedMoviesIds.length}} </strong>
      <ul v-for="movie in movies" :key="movie.id">
      <movie-row :movie="movie" @selected-movie="onSelectMovie"/>
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
            selectedMoviesIds: []
        }
    },

    methods: {
        onSearchTermChanged(title) {
            movieService.getAll(title)
            .then(r => {
            this.movies = r.data
            })
        },

        onSelectMovie(movie) {
            this.selectedMoviesIds.push(movie.id)
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