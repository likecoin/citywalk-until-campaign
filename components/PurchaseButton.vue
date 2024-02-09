<template>
  <UButton
    :label="buttonLabel"
    :icon="props.isToSummary ? '' : 'i-heroicons-arrow-top-right-on-square'"
    size="xl"
    variant="soft"
    :target="props.isToSummary ? '_self' : '_blank'"
    :to="toRoute"
    v-bind="$attrs"
    @click="onClickPurchase"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  from: {
    type: String,
    default: '',
  },
  isToSummary: {
    type: Boolean,
    default: false,
  },
})

const toRoute = computed(() => {
  if (props.isToSummary) {
    return { name: 'summary' }
  }
  return 'https://liker.land/zh-Hant/nft/class/likenft1rvwlaaedlfewy0h4cyrfduc5xcgxh740wpavvzj885hmmjxpwzwscavef3?channel=liker_land&utm_source=purchase_button&utm_medium=web&utm_campaign=citywalk_until_coffee'
})

const buttonLabel = computed(() => {
  return props.isToSummary ? '購買《城市散步學》' : '前往購買《城市散步學》'
})

function onClickPurchase() {
  useTrackEvent(`clickPurchaseButton${props.from || ''}`)
}
</script>
