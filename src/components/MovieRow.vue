<template>
    <div class="container" :class="{selected : selected}">
<table class="table">
  <tbody>
    <tr>
      <th scope="row">Title:</th>
      <td>{{movie.title}}</td>
    </tr>
  </tbody>
</table>
  <button type="button" class="btn btn-primary" @click="onSelect"> Select </button>
  <button type="button" class="btn btn-warning" @click="navigateToMovieDetails(movie.id)">
    View 
  </button>
</div>
</template>

<script>
export default {
    name: 'MovieRow',

    data() {
      return {
        
      }
    },

    props: {
        movie: {},
        selectedMoviesIds: Array
    },

    computed: {
    selected() {
      return this.selectedMoviesIds
        .indexOf(this.movie.id) > -1;
      }
    },

    methods: {
      onSelect() {
        this.$emit('selected-movie', this.movie)
      },

      navigateToMovieDetails(id) {
          this.$router.push({name: 'movie', params:{id}})
      }
    }
}
</script>

<style>
  .selected {
    background-color: rgba(0, 132, 255, 0.384)
  }
</style>