<template>
  <UButton
    size="md"
    to="https://newsletter.liker.land?utm_source=subscribe_button&utm_medium=web&utm_campaign=citywalk_until_coffee"
    block
    @click="onClick"
  >訂閱我們</UButton>
</template>

<script setup lang="ts">
const props = defineProps({
  from: {
    type: String,
    default: '',
  },
})

function onClick() {
  useTrackEvent(`SubscribeFrom${props.from}`)
}
</script>
