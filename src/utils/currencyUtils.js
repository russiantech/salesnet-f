// export function formatPrice(
export function formatCurrency(price, currency = 'USD', options) {
    const defaults = {
        style: 'currency',
        currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    };
    const config = { ...defaults, ...options };
    try {
        return new Intl.NumberFormat(undefined, config).format(price);
    }
    catch (error) {
        console.error('Currency formatting error:', error);
        // Fallback for unsupported currencies
        return new Intl.NumberFormat(undefined, {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(price) + ` ${currency}`;
    }
}
// Optional: Currency symbol mapping
export const CURRENCY_SYMBOLS = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    JPY: '¥',
    // Add more as needed
};
export function formatCurrency2(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
    }).format(amount);
}
