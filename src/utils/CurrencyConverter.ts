import { Currency } from "../contexts/CurrencyContext";

export const currencyConverter = (value: number, currency: Currency) => {
  switch (currency) {
    case "USD":
      return Math.round(value * 0.09270383);
    case "EUR":
      return Math.round(value * 0.09313892723);
    case "GBP":
      return Math.round(value * 0.08057754884);
    case "SEK":
      return Math.round(value);
    default:
      return Math.round(value);
  }
};
