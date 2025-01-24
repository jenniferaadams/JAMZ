<template>
  <div class=" main-container">
    <AppHeader /> 
    <router-view /> 
    <HomePage />
    <AppFooter /> 
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    HomePage,
  },
};
</script>

<style>

.main-container {
  background-color: #fb90ca;
}
</style>
