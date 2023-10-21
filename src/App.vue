<template>
  <AppHeader/>
  <HomeMainContent/>
  <AppFooter/>
</template>

<script>
import HomeMainContent from "./components/HomeMainContent.vue"
import AppHeader  from './components/AppHeader.vue';
import AppFooter  from './components/AppFooter.vue';

export default {
    name: "App",
    components: {
      AppHeader,
      HomeMainContent,
      AppFooter
    }
}
</script>