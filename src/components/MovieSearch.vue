<template>
  <input type="text" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Search Movies" v-model="search" @input="searchTermUpdated($event.target.value)"/>
</template>

<script>
export default {
    name: 'MovieSearch',
    data() {
      return {
        search: ''
      }
    },
    methods: {
        searchTermUpdated(search) {
        this.$emit('search-term-updated', search)
        }
    }
}
</script>

<style>

</style>