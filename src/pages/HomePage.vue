<script>
import { mapGetters } from 'vuex';
import AsyncButton from "@/components/AsyncButton.vue";

export default {
  name: "HomePage",
  components: {
    AsyncButton,
  },
  computed: {
    ...mapGetters(['user'])
  },
  data() {
    return {
      clickCount: 0
    };
  },
  methods: {
    handleButtonClick() {
      this.clickCount++;
      const delay = this.clickCount * 1000;
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
    <div v-if="user">
      <p>Signed in as: {{ user.name }}</p>
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