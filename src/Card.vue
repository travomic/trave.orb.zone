<template>
  <div v-bind="{ ...$attrs, ...dataAttrs }">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

const dataAttrs = computed(() => {
  const d = props.data
  const out = {}
  if (d.x !== undefined) out['data-x'] = d.x
  if (d.y !== undefined) out['data-y'] = d.y
  if (d.z !== undefined) out['data-z'] = d.z
  if (d.scale !== undefined) out['data-scale'] = d.scale
  if (d.rotate !== undefined) out['data-rotate'] = d.rotate
  if (d.rotateX !== undefined) out['data-rotate-x'] = d.rotateX
  if (d.rotateY !== undefined) out['data-rotate-y'] = d.rotateY
  if (d.rotateZ !== undefined) out['data-rotate-z'] = d.rotateZ
  return out
})
</script>
