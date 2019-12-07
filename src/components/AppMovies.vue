<template>
  <div>
      <ul>
      <li v-for="movie in movies" :key="movie.id">
        <hr />
        <b>{{ movie.title }}</b>
      </li>
    </ul>
  </div>
</template>

<script>
import { movieService } from '../services/movies-service'

export default {
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