<template>
  <div>
    <BaseHeader @user-signed-in="updateUser"/>
    <router-view />
    <BaseFooter/>
  </div>
</template>

<script>
import { reactive, provide } from 'vue';
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";

export default {
  name: 'App',
  components: {
    BaseHeader,
    BaseFooter
  },
  setup() {
    const user = reactive({ value: null });
    provide('user', user);
    return { user };
  },
  methods: {
    updateUser(user) {
      this.user.value = user;
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

html, body {
  height: 100%;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
</style>