<template>
<UContainer class="convert">
  <h2 class="convert__title">Конвертация валют</h2>
  <div v-for="(item, index) in form" :key="item.currency" class="convert__row">
    <USelect v-model="item.currency" :items="Object.values(Currency)" />
    <UInputNumber
        v-model="item.amount"
        :format-options="{
          style: 'currency',
          currency: item.currency,
          currencyDisplay: 'code',
          minimumFractionDigits: 2
        }"
        orientation="vertical"
        @change="updateAmount(index)"
    />
  </div>

</UContainer>
</template>

<script setup lang="ts">
import {Currency} from "~/types";

const currencyStore = useCurrencyStore()

const form = reactive([
  {currency: Currency.RUB, amount: 0},
  {currency: Currency.USD, amount: 0},
])

const updateAmount = (index: number) => {
  const indexTarget = index === 0 ? 1 : 0
  const rate = currencyStore.getRate(form[index].currency, form[indexTarget].currency)
  form[indexTarget].amount = Number(form[index].amount * rate).toFixed(2)
}
</script>



<style scoped lang="scss">
.convert {
  &__title {
    margin-bottom: 20px;
  }
  &__row {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }
}
</style>
