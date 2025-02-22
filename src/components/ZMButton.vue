<template>
  <button :class="['base-button', variant]" @click="handleClick">
    {{ label }}
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
  props.onClick(); // Вызываем функцию, переданную из родительского компонента
};
</script>

<style scoped lang="scss">
@import "/src/assets/styles/mixins.scss";

.base-button {
  @include button-base;

  &.primary {
    @include button-variant($primary-color);
  }

  &.secondary {
    @include button-variant($secondary-color);
  }

  &.disabled {
    @include button-variant($disabled-color);
    cursor: not-allowed;
    opacity: 0.6;
  }
}
</style>
