<template>
  <div class="checkbox-container">
    <label>
      <input type="checkbox" v-model="checkboxModel" />
      <span class="label">{{ label }}</span>
    </label>
  </div>
</template>
<script setup>
import { defineProps, defineModel } from "vue";

defineProps({
  label: {
    type: String,
    required: true,
  },
});

const checkboxModel = defineModel(false);

</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.checkbox-container {
  display: flex;
  align-items: center;

  input {
    &:checked + .checkbox {
      background-color: $primary-color;
      border-color: $primary-color;

      &::after {
        content: "✔";
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .checkbox {
    width: 20px;
    height: 20px;
    border: 2px solid $hint-color;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
  }

  .label {
    margin-left: 8px;
    font-size: 16px;
    color: $text-color;
    font-size: $primary-font-size;
    font-weight: $secondary-font-weight;
  }
}
</style>
