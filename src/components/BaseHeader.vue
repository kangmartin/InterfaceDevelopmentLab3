<script>
import { mapGetters } from 'vuex';
import SigninButton from "@/components/SigninButton.vue";

export default {
  name: "BaseHeader",
  components: {
    SigninButton
  },
  computed: {
    ...mapGetters(['user'])
  }
};
</script>

<template>
  <div class="header">
    <div class="left-container">
      <font-awesome-icon :icon="['fas', 'house']" class="icon"/>
      <a href="/" class="logo">Home</a>
      <router-link v-if="user" to="/conversations">Conversations</router-link>
    </div>
    <SigninButton />
  </div>
</template>

<style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 20px 20px;
    padding: 20px 20px;
    border-radius: 20px;
    font-family: 'Roboto', sans-serif;
  }

  .header .left-container {
    display: flex;
    align-items: center;
  }

  .header a {
    color: black;
    list-style-type: none;
    text-decoration: none;

  }

  .logo {
    font-weight: 600;
    font-size: 21px;
    margin-right: 60px;
    margin-left: 10px;
  }

  .blackbutton {
    background-color: black;
    color: white;
    font-weight: 600;
    padding: 11px 15px;
    border-radius: 10px;
    border: none;
    width: 80px;
  }

  .icon{
    font-size: 25px;
    margin-right: 7px;
  }

</style>
