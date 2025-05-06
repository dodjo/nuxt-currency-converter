<template>
<Header />
  <div class="my-5">
    <NuxtPage />
  </div>
</template>


<script setup lang="ts">
const currencyStore = useCurrencyStore()
currencyStore.fetchRates()
</script>


<style scoped>

</style>
