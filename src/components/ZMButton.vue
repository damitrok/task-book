<template>
  <button :class="['base-button', variant]" @click="handleClick">
    <slot name="icon-left"></slot>
    <span class="text">{{ label }}</span>
  </button>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  label: String,
  variant: {
    type: String,
    default: "primary",
  },
  onClick: {
    type: Function,
    default: () => {},
  },
});
const handleClick = () => {
  props.onClick();
};
</script>

<style scoped lang="scss">
@import "/src/assets/styles/mixins.scss";

.text {
  padding: 0 5px;
}

.base-button {
  @include button-base;

  &.primary {
    @include button-variant($primary-color, white);
  }

  &.secondary {
    @include button-variant($secondary-color, $text-color);
  }

  &.disabled {
    @include button-variant($disabled-color, white);
    cursor: not-allowed;
    opacity: 0.6;
  }
}
</style>
