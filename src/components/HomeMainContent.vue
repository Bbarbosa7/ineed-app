<template>
    <div class="container-fluid main-content-div">
        <h1 class="text-center">Ineed</h1>
        <br />
        <div class="search-bar-container">
            <form class="d-flex" role="search">
                <input class="form-control me-1 " type="search" placeholder="Location" aria-label="Search">
                <input class="form-control me-1" type="search" placeholder="Service" aria-label="Search">
                
                <button class="btn btn-primary" type="submit">Search</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.main-content-div {
    padding: 10% 10% 30% 10%;
}

.main-title {
    justify-content: center;
    align-items: center;
}
</style>

<script>
export default {
    name: "HomeMainContent"
}
</script>