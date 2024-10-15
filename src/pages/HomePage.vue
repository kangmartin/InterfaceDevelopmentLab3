<script>
import { inject } from 'vue';
import AsyncButton from "@/components/AsyncButton.vue";

export default {
  name: "HomePage",
  components: {
    AsyncButton,
  },
  setup() {
    const user = inject('user');
    return { user };
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
    <div v-if="user.value">
      <p>Signed in as: {{ user.value.name }}</p>
    </div>
  </div>
</template>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>