<template>
  <div class="card">
      <ul v-for="movie in movies" :key="movie.id">
      <movie-row :movie="movie"/>
      </ul>
  </div>
</template>

<script>
import MovieRow from './MovieRow'
import { movieService } from '../services/movies-service'

export default {
    name: 'AppMovies',
    components: {
        MovieRow
    },

    data () {
        return {
            movies: []
        }
    }, 

    beforeRouteEnter(to, from, next) {
        movieService.getAll()
        .then(r => {next(vm => vm.movies = r.data)})
    }
}
</script>

<style>

</style>