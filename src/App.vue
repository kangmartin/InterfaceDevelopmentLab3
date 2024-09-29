<template>

  <div>
    <BaseHeader/>
    <HomePage/>
    <BaseFooter/>
  </div>

</template>

<script>
import HomePage from "@/pages/HomePage.vue"
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";

export default {
  name: 'App',
  components: {
    HomePage,
    BaseHeader,
    BaseFooter

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

html, body{
  height: 100%;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

</style>
