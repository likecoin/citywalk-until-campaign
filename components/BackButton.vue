<template>
  <UButton
    size="xs"
    :to="toRoute"
    icon="i-heroicons-arrow-left-16-solid"
    variant="soft"
    :ui="{ base: 'z-[2]', rounded: 'rounded-full' }"
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
const route = useRoute()

const pageNameList = [
  'index',
  'preface',
  'locations-1',
  'locations-1-description',
  'locations-2',
  'locations-2-description',
  'locations-3',
  'locations-3-description',
  'summary',
  'share',
]

const toRoute = computed(() => {
  const index = pageNameList.indexOf(route.name as string)
  if (index > 0) {
    return { name: pageNameList[index - 1] }
  }
  return undefined
})

function onClickBack() {
  if (!toRoute.value) {
    router.back()
  }
  useTrackEvent(`ClickBackButtonIn${props.from || ''}`)
}
</script>
