import { Currency } from "../contexts/CurrencyContext";

export const currencyConverter = (value: number, currency: Currency) => {
  switch (currency) {
    case "USD":
      return value * 0.09270383;
    case "EUR":
      return value * 0.09313892723;
    case "GBP":
      return value * 0.08057754884;
    case "SEK":
      return value;
    default:
      return Math.round(value);
  }
};
