<template>
  <div class="home">
    <div class="container">
      <ZMHeader />
      <div class="task-list">
        <div
          v-for="task in tasks"
          :key="task.id"
          class="task"
          :class="{ 'task-bug': task.isBug }"
        >
          <div>
            <span class="light">#{{ task.id }} </span>
            <span> {{ task.title }}</span>
          </div>

          <div class="actions">
            <img
              :src="edit"
              @click="editTask(task.id)"
              alt="edit"
              class="actions-btn"
            />
            <img
              :src="Idelete"
              @click="deleteTask(task.id)"
              alt="delete"
              class="actions-btn"
            />
          </div>
        </div>
      </div>
      <div class="stats-overlay">
        <p class="stats">Задач: {{ tasks.length }} / Багов: {{ bugCount }}</p>

        <ZMButton @click="addTask" label="Добавить задачу">
          <template #icon-left>
            <img :src="add" alt="add" />
          </template>
        </ZMButton>
      </div>
    </div>
  </div>
</template>
<script setup>
import add from "@/assets/icons/add.svg";
import edit from "@/assets/icons/edit.svg";
import Idelete from "@/assets/icons/Idelete.svg";
import { ref, computed, onMounted } from "vue";
import ZMButton from "@/components/ZMButton.vue";
import ZMHeader from "@/components/ZMHeader.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const bugCount = computed(
  () => tasks.value.filter((task) => task.isBug).length
);

const addTask = () => {
  router.push("/create");
};

const editTask = taskId => {
  router.push(`/edit-task/${taskId}`);
};

const deleteTask = (taskId) => {
  tasks.value = tasks.value.filter((task) => task.id !== taskId);
  localStorage.setItem("tasks", JSON.stringify(tasks.value));
};

const tasks = ref([]);

onMounted(() => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.value = storedTasks;
});
</script>
<style scoped lang="scss">
@import "/src/assets/styles/styles.scss";
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
}
</style>
