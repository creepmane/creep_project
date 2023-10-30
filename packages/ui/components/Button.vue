<script lang="ts" setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  onClick: {
    type: Function,
    default: () => {},
  },
})

defineEmits(['click'])
</script>

<template>
  <button
    :disabled="disabled"
    @click="$emit('click', onClick)"
  >
    <slot />
  </button>
</template>

<style scoped>
button {
  background-color: aquamarine;
  color: black;
  padding: 1rem;
  border: none;
}
</style>