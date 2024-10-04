<script>
import AsyncButton from "@/components/AsyncButton.vue";
import SigninButton from "@/components/SigninButton.vue";

export default {
  name: "HomePage",
  components: {
    AsyncButton,
    SigninButton
  },
  data() {
    return {
      clickCount: 0 // Track the number of clicks
    };
  },
  methods: {
    handleButtonClick() {
      this.clickCount++; // Increment the click count on each button click
      const delay = this.clickCount * 1000; // Increase wait time by 1 second per click

      // Return a promise that resolves after the calculated delay
      return new Promise((resolve) => {
        setTimeout(resolve, delay);
      });
    }
  }
};
</script>

<template>
  <div class="block">
    <h1>Welcome to homepage!</h1>
    <AsyncButton @click="handleButtonClick">
      Disabled and animated for {{ clickCount + 2 }} seconds if clicked
    </AsyncButton>
    <SigninButton/>
  </div>
</template>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
