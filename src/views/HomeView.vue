<template>
  <div class="home">
    <h1>Главная страница</h1>
    <ZMInput
      v-model="inputValue"
      label="Название поля"
      inputHint="Подпись"
      placeholder="Подсказка"
    />
    <p>Текущее значение: {{ inputValue }}</p>
    <ZMButton
      label="Отправить"
      variant="primary"
      :onClick="handleGreenButtonClick"
    />
    <ZMButton label="Отмена" variant="secondary" />
    <ZMButton label="Отключено" variant="disabled" />
    <ZMCheckbox label="Подпись" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import ZMInput from "@/components/ZMInput.vue";
import ZMButton from "@/components/ZMButton.vue";
import ZMCheckbox from "@/components/ZMCheckbox.vue";

const inputValue = ref("");

const handleGreenButtonClick = () => {
  console.log("apapapapap");
};
</script>
<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
}
</style>
