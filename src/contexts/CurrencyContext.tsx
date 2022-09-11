import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/localStorage";
import { currencyConverter } from "../utils/CurrencyConverter";

interface CurrencyContext {
  currency: Currency;
  changeCurrency(newCurrency: Currency): void;
  convertToCurrencyValue(value: number): string;
}

export enum Currency {
  SEK = "SEK",
  EUR = "EUR",
  USD = "USD",
  GBP = "GBP",
}

const CurrencyContext = createContext<CurrencyContext>({
  currency: Currency.SEK,
  changeCurrency: () => {},
  convertToCurrencyValue: () => "",
});

interface CurrencyProviderProps {
  children: React.ReactNode;
}

const CurrencyContextProvider = ({ children }: CurrencyProviderProps) => {
  const [currency, setCurrency] = useLocalStorage<Currency>("currency", Currency.SEK);

  const changeCurrency = (newCurrency: Currency) => {
    setCurrency(newCurrency);
  };

  const language =
    currency === Currency.SEK
      ? "sv-SE"
      : currency === Currency.EUR
      ? "de-DE"
      : currency === Currency.GBP
      ? "en-GB"
      : currency === Currency.USD
      ? "en-US"
      : undefined;

  const formatCurrency = (value: number) => {
    const amountOfDigits = currency === Currency.SEK ? 0 : 2;
    return new Intl.NumberFormat(language, {
      style: "currency",
      maximumFractionDigits: amountOfDigits,
      currency: currency,
    }).format(value);
  };

  const convertToCurrencyValue = (value: number) => {
    return formatCurrency(currencyConverter(value, currency));
  };

  return <CurrencyContext.Provider value={{ currency, changeCurrency, convertToCurrencyValue }}>{children}</CurrencyContext.Provider>;
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  return context;
};

export default CurrencyContextProvider;
