// src/utils/format.ts
type CurrencyConfig = {
    style: 'currency'
    currency: string
    minimumFractionDigits?: number
    maximumFractionDigits?: number
  }
  
  export function formatPrice(
    price: number,
    currency: string = 'USD',
    options?: Partial<CurrencyConfig>
  ): string {
    const defaults: CurrencyConfig = {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }
  
    const config = { ...defaults, ...options }
  
    try {
      return new Intl.NumberFormat(undefined, config).format(price)
    } catch (error) {
      console.error('Currency formatting error:', error)
      // Fallback for unsupported currencies
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
    // Add more as needed
  }