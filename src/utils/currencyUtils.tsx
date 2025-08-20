// src/utils/format.ts
export interface CurrencyConfig extends Intl.NumberFormatOptions {
    style: 'currency'
    currency: string
    minimumFractionDigits?: number
    maximumFractionDigits?: number,
    short?: boolean // if true, shorten (e.g. K, M, B, T)
  }
  

export function formatCurrency(
  price: number,
  currency: string = 'USD',
  options?: Partial<CurrencyConfig>
): string {
  const defaults: CurrencyConfig = {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    short: false
  }

  const config = { ...defaults, ...options }

  try {
    // If short format requested
    if (config.short) {
      const absPrice = Math.abs(price)
      let value = price
      let suffix = ''

      if (absPrice >= 1e12) {
        value = price / 1e12
        suffix = 'T'
      } else if (absPrice >= 1e9) {
        value = price / 1e9
        suffix = 'B'
      } else if (absPrice >= 1e6) {
        value = price / 1e6
        suffix = 'M'
      } else if (absPrice >= 1e3) {
        value = price / 1e3
        suffix = 'K'
      }

      // Format just the currency symbol (without full amount)
      const symbol = new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency,
        currencyDisplay: 'narrowSymbol', // use ₦ instead of NGN
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      })
        .formatToParts(0)
        .find(part => part.type === 'currency')?.value ?? currency

      // Format the shortened value (number only, not currency)
      const number = new Intl.NumberFormat(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(value)

      return `${symbol}${number}${suffix}`
    }

    // Normal full currency formatting
    return new Intl.NumberFormat(undefined, {
      ...config,
      currencyDisplay: 'narrowSymbol' // ensures symbol (₦, $, €, £, etc.)
    }).format(price)
  } catch (error) {
    console.error('Currency formatting error:', error)
    return new Intl.NumberFormat(undefined, {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price) + ` ${currency}`
  }
}

export function formatCurrency_3(
  price: number,
  currency: string = 'USD',
  options?: Partial<CurrencyConfig>
): string {
  const defaults: CurrencyConfig = {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    short: false
  }

  const config = { ...defaults, ...options }

  try {
    // If short format is requested
    if (config.short) {
      const absPrice = Math.abs(price)
      let value = price
      let suffix = ''

      if (absPrice >= 1e12) {
        value = price / 1e12
        suffix = 'T'
      } else if (absPrice >= 1e9) {
        value = price / 1e9
        suffix = 'B'
      } else if (absPrice >= 1e6) {
        value = price / 1e6
        suffix = 'M'
      } else if (absPrice >= 1e3) {
        value = price / 1e3
        suffix = 'K'
      }

      return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(value) + suffix
    }

    // Normal full currency formatting
    return new Intl.NumberFormat(undefined, config).format(price)
  } catch (error) {
    console.error('Currency formatting error:', error)
    return new Intl.NumberFormat(undefined, {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price) + ` ${currency}`
  }
}

  // Optional: Currency symbol mapping
  export const CURRENCY_SYMBOLS: Record<string, string> = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    JPY: '¥',
    NGN: '₦'
    // Add more as needed
  }

  export function formatCurrency2(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

/* 
USAGE:
formatCurrency(450000000, 'USD') 
// "$450,000,000.00"

formatCurrency(450000000, 'USD', { short: true }) 
// "$450M"

formatCurrency(1250, 'NGN', { short: true }) 
// "₦1.25K"

formatCurrency(1234567890123, 'USD', { short: true }) 
// "$1.23T"

*/