<template>
  <div class="block">
    <h1>Conversation Show Page {{ id }}</h1>
    <p>Conversation ID: {{ id }}</p>
  </div>
</template>

<script>
export default {
  name: 'ConversationShowPage',
  computed: {
    id() {
      return this.$route.params.id;
    }
  }
};
</script>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>