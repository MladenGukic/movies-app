<template>
    <form @submit.prevent="addMovie">
    <div class="form-group">
        <label>Title</label>
            <input type="text" class="form-control"  placeholder="Title" v-model="movieForm.title">
        <label>Director</label>
            <input type="text" class="form-control"  placeholder="Director" v-model="movieForm.director">
        <label>Image URL</label>
            <input type="text" class="form-control"  placeholder="Image URL" v-model="movieForm.imageUrl">
        <label>Duration</label>
            <input type="number" class="form-control"  placeholder="Duration(min)" v-model="movieForm.duration">
        <label>Release Date</label>
        <input type="text" class="form-control"  placeholder="Release Date(dd-mm-yy)" v-model="movieForm.releaseDate">
        <label>Genre</label>
        <input type="text" class="form-control"  placeholder="Genre" v-model="movieForm.genre">
        <button type="submit" class="btn btn-primary"> Submit </button>
    </div>
    </form>
</template>

<script>
import { movieService} from '../services/movies-service'
export default {
    data() {
        return {
            movieForm: {title: "", director: "", imageUrl: "", duration: 0, releaseDate: "", genre: ""}
        }
    },

    methods: {
        addMovie() {
            movieService.add(this.movieForm)
            .then(() => this.$router.push("/movies"))
        }
    }
}
</script>

<style>

</style>