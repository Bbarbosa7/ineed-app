<template>
    <!-- <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark"> -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" role="navigation">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Language
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">English</a></li>
                        <li><a class="dropdown-item" href="#">Portuguese</a></li>
                    </ul>
                </li>
            </ul>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 user-actions" role="navigation">
                <li class="nav-item">
                    <router-link to="/login" class="nav-link">Login</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/register" class="nav-link">Register</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
.user-actions {
    align-items: flex-end;
    padding: 0 0 0 80%;
}
</style>

<script>
export default {
    name: "AppHeader"
};
</script>