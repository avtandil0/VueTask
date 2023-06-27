<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{ type: string; label: string; rules: Array<string> }>()
const value = ref('')

function handleEvent(event: any) {
  const target = event.target
  if (target !== null) {
    return target.value
  }
}
</script>

<template>
  <div class="flexColumn">
    <label for="fname">{{ label }}</label>
    <input
      class="input1"
      :type="type"
      v-model="value"
      @input="$emit('update:modelValue', handleEvent($event))"
      @keyup="$emit('update:modelValue', handleEvent($event))"
      @blur="$emit('update:modelValue', handleEvent($event))"
    />
    <span class="error">
      <li v-for="(item, key) in props.rules" :key="key">
        {{ item }}
      </li></span
    >
  </div>
</template>

<style scoped>
.flexColumn {
  display: flex;
  flex-direction: column;
}
.input1 {
  width: 290px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
.error {
  color: red;
}
</style>
