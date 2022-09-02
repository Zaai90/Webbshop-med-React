import { createContext, useContext, useState } from "react";
import { currencyConverter } from "../utils/CurrencyConverter";

interface CurrencyContext {
  currency: Currency;
  changeCurrency(newCurrency: Currency): void;
  convertToCurrencyValue(value: number): string;
}

export enum Currency {
  USD = "USD",
  EUR = "EUR",
  GBP = "GBP",
  SEK = "SEK",
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
  const [currency, setCurrency] = useState<Currency>(Currency.SEK);

  const changeCurrency = (newCurrency: Currency) => {
    setCurrency(newCurrency);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
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
