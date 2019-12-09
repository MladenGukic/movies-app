<template>
  <div class="container">
      <movie-search @search-term-updated="onSearchTermChanged"/>
            <strong> Selected movies: {{selectedMoviesIds.length}} </strong>
            <button class="btn btn-primary btn-sm" @click="selectAllMovies"> Select All </button>
            <button class="btn btn-secondary btn-sm" @click="deselectAllMovies"> Deselect All </button>
      <div class="card">
            <ul v-for="movie in movies" :key="movie.id">
                <movie-row :movie="movie" @selected-movie="onSelectMovie" :selectedMoviesIds="selectedMoviesIds"/>
            </ul>
            <div v-if="!movies.length">
                <h1> No Movies </h1>
            </div>
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
        },

        selectAllMovies() {
            this.selectedMoviesIds = this.movies.map(movie => movie.id)
        },

        deselectAllMovies() {
            this.selectedMoviesIds = []
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