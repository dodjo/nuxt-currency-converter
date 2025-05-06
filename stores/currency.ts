import {Currency, type RateResponse} from "~/types";
import {API} from "~/constants";

export const useCurrencyStore = defineStore('currency', () => {
    const baseCurrency = ref<Currency>(Currency.RUB)
    const rates = ref<RateResponse>({})

    const fetchRates = async () => {
        const  { data } = await useFetch(API)
        rates.value = data.value
    }

    const getRate = (from: Currency, to: Currency) => {
        if (from === to) return 1
        const currency = `${from.toLowerCase()}-${to.toLowerCase()}`
        return rates.value[currency] ?? 0
    }


    return { baseCurrency, rates, getRate, fetchRates }
})
