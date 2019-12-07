<template>
    <div class="container">
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
</div>
</template>

<script>
export default {
    name: 'MovieRow',

    props: {
        movie: {}
    }
}
</script>

<style>

</style>