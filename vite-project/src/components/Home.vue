<script setup lang="ts">
import {ref } from 'vue'
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="todo-list">
    <ul>
      <li>
        <span v-if="!isEditting"></span>
      </li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
