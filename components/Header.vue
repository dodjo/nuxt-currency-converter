<template>
  <UContainer>
    <header class="header">
      <UIcon name="arcticons:priceconverter" class="size-10"/>

      <nav class="header__nav">
        <NuxtLink class="header__link" to="/">Главная</NuxtLink>
        <NuxtLink class="header__link" to="/convert">Конвертация</NuxtLink>
      </nav>

      <div class="header__select">
        <USelect v-model="currencyStore.baseCurrency" :items="options" />
      </div>
    </header>
  </UContainer>
</template>

<script setup lang="ts">
import { Currency } from "~/types";
const currencyStore = useCurrencyStore()

const options = Object.values(Currency).map(c=> ({ label: c, value: c }))
</script>



<style scoped lang="scss">
.header {
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;

  &__nav {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__link {
    color: inherit;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: var(--ui-primary);
    }
  }

  .router-link-active {
    color: var(--ui-primary);
  }

  &__select {
    margin-left: auto;
  }
}
</style>
