<script>
import { signInAndGetUser } from "@/lib/microsoftGraph.js";

export default {
  name: "SigninButton",
  data() {
    return {
      user: null
    };
  },
  methods: {
    async signIn() {
      try {
        this.user = await signInAndGetUser();
        this.$emit('user-signed-in', this.user);
      } catch (error) {
        console.error("Error signing in:", error);
      }
    }
  }
};
</script>

<template>
  <div>
    <button @click="signIn">Sign In</button>
  </div>
</template>

<style scoped>
button {
  font-weight: 600;
  font-size: 21px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  background-color: #6ab04c;
  color: white;
  padding: 10px 20px;
}

button:hover:not(:disabled) {
  background-color: rgba(106, 176, 76, 0.4);
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>