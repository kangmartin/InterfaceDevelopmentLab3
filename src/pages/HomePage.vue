<script>
import AsyncButton from "@/components/AsyncButton.vue";

export default {
  name: "HomePage",
  components: {
    AsyncButton
  },
  methods: {
    handleButtonClick() {
      return new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
    }
  }
}
</script>

<template>
  <div class="block">
    <h1>Welcome to homepage !</h1>
    <AsyncButton @click="handleButtonClick">Disabled and animated for 2 secondes if clicked</AsyncButton>
  </div>
</template>

<style scoped>
  .block {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
