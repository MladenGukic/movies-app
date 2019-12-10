<template>
    <div>
    <form @submit.prevent="addMovie">
    <div class="form-group">
        <label>Title</label>
            <input type="text" class="form-control"  placeholder="Title" v-model="movieForm.title">
            <div class="alert alert-danger" v-if="errors.title">
            <strong>{{errors.title[0]}}</strong>
            </div>
        <label>Director</label>
            <input type="text" class="form-control"  placeholder="Director" v-model="movieForm.director">
            <div class="alert alert-danger" v-if="errors.director">
            <strong>{{errors.director[0]}}</strong>
            </div>
        <label>Image URL</label>
            <input type="text" class="form-control"  placeholder="Image URL" v-model="movieForm.imageUrl">
            <div class="alert alert-danger" v-if="errors.imageUrl">
            <strong>{{errors.imageUrl[0]}}</strong>
            </div>
        <label>Duration</label>
            <input type="number" class="form-control"  placeholder="Duration(min)" v-model="movieForm.duration">
            <div class="alert alert-danger" v-if="errors.duration">
            <strong>{{errors.duration[0]}}</strong>
            </div>
        <label>Release Date</label>
        <input type="text" class="form-control"  placeholder="Release Date(dd-mm-yy)" v-model="movieForm.releaseDate">
        <div class="alert alert-danger" v-if="errors.releaseDate">
            <strong>{{errors.releaseDate[0]}}</strong>
            </div>
        <label>Genre</label>
        <input type="text" class="form-control"  placeholder="Genre" v-model="movieForm.genre">
        <button type="submit" class="btn btn-primary"> Submit </button>
    </div>
    </form>
    </div>
</template>

<script>
import { movieService} from '../services/movies-service'
export default {
    data() {
        return {
            movieForm: {title: "", director: "", imageUrl: "", duration: 0, releaseDate: "", genre: ""},
            errors: {}
        }
    },

    methods: {
        addMovie() {
            movieService.add(this.movieForm)
            .then(() => this.$router.push("/movies"))
            .catch(error => this.errors = error.response.data.errors)
        }
    }
}
</script>

<style>

</style>