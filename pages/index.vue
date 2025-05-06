<template>
  <UContainer>
    <h2>Курс валют относительно {{currencyStore.baseCurrency}}</h2>
    <ul class="list">
      <li v-for="currency in showCurrencyList" :key="currency">
        1 {{currencyStore.baseCurrency}} = {{currencyStore.getRate(currency, currencyStore.baseCurrency).toFixed(2)}} {{currency}}
      </li>
    </ul>
  </UContainer>
</template>

<script setup lang="ts">
import {Currency} from "~/types";

const currencyStore = useCurrencyStore()

const showCurrencyList = computed(()=>{
  return Object.values(Currency).filter(c=> c !== currencyStore.baseCurrency)
})
</script>



<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0;
}
</style>
