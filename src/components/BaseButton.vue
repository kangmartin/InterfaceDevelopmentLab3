<script>
export default {
  name: "BaseButton",
  props: {
    label: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<template>
  <button :disabled="disabled" class="base-button">
    {{ label }}
  </button>
</template>

<style scoped>
.base-button {
  background-color: #6ab04c;
  font-weight: 600;
  font-size: 21px;
  margin-right: 60px;
  margin-left: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.base-button:hover:not(:disabled),
.base-button:focus:not(:disabled) {
  background-color: rgba(106, 176, 76, 0.75);
  transform: scale(1.05);
}

.base-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
