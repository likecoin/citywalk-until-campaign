<template>
  <UButton
    size="xs"
    icon="i-heroicons-arrow-left-16-solid"
    variant="soft"
    :ui="{ rounded: 'rounded-full' }"
    @click="onClickBack"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  from: {
    type: String,
    default: '',
  }
})

const router = useRouter()

function onClickBack() {
  router.back()
  useTrackEvent(`ClickBackButtonIn${props.from || ''}`)
}
</script>
