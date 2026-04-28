import { create } from 'zustand';

/**
 * Default currency code to use when the site currency is not available.
 */
export const DEFAULT_CURRENCY = 'USD';

/**
 * Formats a numeric amount as a currency string.
 * Uses the browser's locale for proper formatting (symbol placement, decimals).
 *
 * @param amount - The numeric price value
 * @param currencyCode - ISO 4217 currency code (e.g., "USD", "EUR", "ILS")
 * @returns Formatted currency string (e.g., "$99.99", "€99,99", "₪99.99")
 *
 * @example
 * ```typescript
 * import { useCurrency, formatPrice, DEFAULT_CURRENCY } from '@/integrations';
 *
 * const { currency } = useCurrency();
 * formatPrice(99.99, currency ?? DEFAULT_CURRENCY) // "$99.99" (or site currency)
 * formatPrice(99.99, 'EUR') // "€99.99" or "99,99 €" depending on locale
 * formatPrice(99.99, 'ILS') // "₪99.99"
 * ```
 */
export function formatPrice(amount: number, currencyCode: string): string {
  try {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currencyCode,
    }).format(amount);
  } catch {
    // Fallback for invalid currency codes
    console.warn(`Invalid currency code: ${currencyCode}, falling back to ${DEFAULT_CURRENCY}`);
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: DEFAULT_CURRENCY,
    }).format(amount);
  }
}

interface CurrencyState {
  currency: string | null;
  isLoading: boolean;
  error: string | null;
}

type CurrencyStore = CurrencyState;

/**
 * Zustand store for site currency state.
 * Currency is read from the PUBLIC_CURRENCY env variable (defaults to USD).
 */
const useCurrencyStore = create<CurrencyStore>(() => ({
  // Read from env or fall back to DEFAULT_CURRENCY
  currency: (typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_CURRENCY) || DEFAULT_CURRENCY,
  isLoading: false,
  error: null,
}));

/**
 * Hook to access site currency for price formatting.
 * No provider needed - works anywhere in the app.
 *
 * Set the PUBLIC_CURRENCY environment variable (e.g. "USD", "EUR") to configure
 * the site currency. Defaults to USD.
 *
 * @example
 * ```tsx
 * import { useCurrency, formatPrice, DEFAULT_CURRENCY } from '@/integrations';
 *
 * const { currency } = useCurrency();
 *
 * // Format price with site currency
 * <span>{formatPrice(item.price, currency ?? DEFAULT_CURRENCY)}</span>
 * ```
 */
export const useCurrency = () => {
  const store = useCurrencyStore();

  return {
    /** Site currency code (e.g., "USD", "EUR") */
    currency: store.currency,
    /** Always false – currency is resolved synchronously from env */
    isLoading: store.isLoading,
    /** Error message if resolution failed */
    error: store.error,
  };
};

