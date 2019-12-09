<template>
    <div class="container" :class="{selected : selected}">
<table class="table">
  <tbody>
    <tr>
      <th scope="row">Title:</th>
      <td>{{movie.title}}</td>
    </tr>
    <tr>
      <th scope="row">Director:</th>
      <td>{{movie.director}}</td>
    </tr>
    <tr>
      <th scope="row">Genre:</th>
      <td>{{movie.genre}}</td>
    </tr>
    <tr>
      <th scope="row">Duration:</th>
      <td>{{movie.duration}}min</td>
    </tr>
  </tbody>
</table>
  <button type="button" class="btn btn-primary" @click="onSelect"> Select </button>
</div>
</template>

<script>
export default {
    name: 'MovieRow',

    data() {
      return {
        selected: false
      }
    },

    props: {
        movie: {}
    },

    methods: {
      onSelect() {
        this.selected = true
        this.$emit('selected-movie', this.movie)
      }
    }
}
</script>

<style>
  .selected {
    background-color: rgba(0, 132, 255, 0.384)
  }
</style>