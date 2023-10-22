<template>
    <AppHeader />
    <p>Login</p>
    <AppFooter />
</template>

<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';

export default {
    name: "LoginPage",
    components: {
    AppHeader,
    AppFooter
  }
};
</script>