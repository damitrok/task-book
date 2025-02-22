<template>
  <div class="container">
    <div>
      <ZMHeader />
      <ZMInput
        class="input-wraper"
        label="Название задачи"
        inputHint="Будет отображаться на главной странице"
        placeholder="Введите название"
        v-model="newTaskValue"

      />
      <ZMCheckbox v-model="checkboxStatus" class="checkbox-wraper" label="Является багом" />
    </div>
    <div class="button-overlay">
      <ZMButton @click="backHome" variant="secondary" label="Вернуться" />

      <ZMButton @click="addTask" label="Создать" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
import ZMCheckbox from "@/components/ZMCheckbox.vue";
import ZMHeader from "@/components/ZMHeader.vue";
import ZMInput from "@/components/ZMInput.vue";
import ZMButton from "@/components/ZMButton.vue";

const router = useRouter();

const newTaskValue = ref('');
const checkboxStatus = ref(false);


const backHome = () => {
    router.push('/');
};

const addTask = () => {
    const currentSavedTasks = [...JSON.parse(localStorage.getItem('tasks'))];
    currentSavedTasks.push({
        id: currentSavedTasks.at(-1).id + 1,
        isBug: checkboxStatus.value,
        title: newTaskValue.value,
    });
    localStorage.setItem('tasks', JSON.stringify(currentSavedTasks));
    router.push('/');
};


</script>
<style>
@import "/src/assets/styles/styles.scss";

.input-wraper {
  margin-top: 66px;
}

.checkbox-wraper {
  margin-top: 20px;
}

.button-overlay {
  display: flex;
  justify-content: space-between;
}
</style>
