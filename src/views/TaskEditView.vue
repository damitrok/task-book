<template>
  <div class="container">
    <div>
      <ZMHeader />
      <ZMInput
        class="input-wraper"
        placeholder="Введите название"
        v-model="taskTitle"
      />
      <ZMCheckbox
        v-model="checkboxStatus"
        class="checkbox-wraper"
        label="Является багом"
      />
    </div>
    <div class="button-overlay">
      <ZMButton @click="backHome" variant="secondary" label="Вернуться" />
      <div class="icon-overlay">
        <img
          :src="Idelete"
          @click="deleteTask"
          alt="delete"
          class="actions-btn"
        />
        <ZMButton @click="saveChanges" label="Сохранить" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import ZMCheckbox from "@/components/ZMCheckbox.vue";
import ZMHeader from "@/components/ZMHeader.vue";
import ZMInput from "@/components/ZMInput.vue";
import ZMButton from "@/components/ZMButton.vue";
import Idelete from "@/assets/icons/Idelete.svg";

const router = useRouter();
const currentRoute = useRoute();

const currentSavedTasks = [...JSON.parse(localStorage.getItem("tasks"))];
const taskValue = currentSavedTasks.find(
  (task) => task.id === +currentRoute.params.id
);

const filteredTasksByCurrentProcessing = currentSavedTasks.filter(
  (task) => task.id !== taskValue.id
);

const taskTitle = ref(taskValue.title);
const checkboxStatus = ref(taskValue.isBug);

const backHome = () => {
  router.push("/");
};

const saveChanges = () => {
  filteredTasksByCurrentProcessing.push({
    id: taskValue.id,
    isBug: checkboxStatus.value,
    title: taskTitle.value,
  });
  localStorage.setItem(
    "tasks",
    JSON.stringify(filteredTasksByCurrentProcessing)
  );
  router.push("/");
};

const deleteTask = () => {
  localStorage.setItem('tasks', JSON.stringify(filteredTasksByCurrentProcessing)); 
  router.push('/');
};
</script>
<style scoped lang="scss">
@import "/src/assets/styles/styles.scss";
@import "@/assets/styles/variables.scss";

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

.icon-overlay {
  display: flex;
}

.actions-btn {
  margin-right: 10px;
  background-color: $secondary-color;
  padding: 2px 10px;
  border-radius: $border-radius;
}
</style>
