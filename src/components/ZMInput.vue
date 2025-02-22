<template>
  <div class="input-group">
    <label v-if="props.label">{{ props.label }}</label>
    <input
      type="text"
      :placeholder="props.placeholder"
      class="input-field"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    />
    <span v-if="props.inputHint" class="hint">{{ props.inputHint }}</span>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  label: String,
  inputHint: String,
  placeholder: String,
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.input-group {
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    font-weight: bold;
    color: $text-color;
  }

  .input-field {
    width: 100%;
    padding: 10px;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    font-size: 14px;
    transition: border 0.2s;

    &:focus {
      border-color: $primary-color;
      outline: none;
    }
  }

  .hint {
    font-size: 12px;
    color: $hint-color;
  }
}
</style>
