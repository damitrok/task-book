<template>
  <div>
    <label>
      <input type="checkbox" v-model="isChecked" />
      <span class="label">{{ label }}</span>
    </label>
  </div>
</template>
<script setup>
import { ref, defineProps, defineEmits, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});

const isChecked = ref(props.modelValue);

watch(
  () => isChecked,
  (newValue) => {
    defineEmits("update:modelValue", newValue);
  }
);
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.checkbox-container {
  display: flex;
  align-items: center;
  cursor: pointer;

  input {
    display: none;

    &:checked + .checkbox {
      background-color: #008cff;
      border-color: #008cff;

      &::after {
        content: "✔";
        color: white;
        font-size: 14px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .checkbox {
    width: 20px;
    height: 20px;
    border: 2px solid #bdbdbd;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
  }

  .label {
    margin-left: 8px;
    font-size: 16px;
    color: #4a4a4a;
  }
}
</style>
