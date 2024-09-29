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
    color: {
      type: String,
      default: 'primary',
      validator: function (value) {
        return ['primary', 'warn', 'danger'].includes(value);
      }
    }
  },
  computed: {
    buttonClass() {
      return `base-button ${this.color}`;
    }
  }
}
</script>

<template>
  <button
      :disabled="disabled"
      :class="buttonClass">
    {{ label }}
  </button>
</template>

<style scoped>
.base-button {
  font-weight: 600;
  font-size: 21px;
  margin-right: 60px;
  margin-left: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.base-button.primary {
  background-color: #6ab04c;
}

.base-button.primary:hover:not(:disabled) {
  background-color: rgba(106, 176, 76, 0.4);
}

.base-button.primary:focus:not(:disabled) {
  border-color: rgba(106, 176, 76, 0.9);
}

.base-button.warn {
  background-color: #f39c12;
}

.base-button.warn:hover:not(:disabled) {
  background-color: rgba(243, 156, 18, 0.4);
}

.base-button.warn:focus:not(:disabled) {
  border-color: rgba(243, 156, 18, 0.9);
}

.base-button.danger {
  background-color: #e74c3c;
}

.base-button.danger:hover:not(:disabled) {
  background-color: rgba(231, 76, 60, 0.4);
}

.base-button.danger:focus:not(:disabled) {
  border-color: rgba(231, 76, 60, 0.9);
}

.base-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

</style>
