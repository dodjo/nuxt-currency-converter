<template>
<Header />
  <div class="my-5">
    <Transition name="page" mode="out-in">
      <NuxtPage />
    </Transition>
  </div>
</template>


<script setup lang="ts">
const currencyStore = useCurrencyStore()
currencyStore.fetchRates()
</script>


<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
