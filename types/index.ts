export enum Currency {
    RUB = 'RUB',
    USD = 'USD',
    EUR = 'EUR',
}

export type RateResponse = {
    [key: string]: number
}
