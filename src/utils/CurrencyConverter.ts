import { Currency } from "../contexts/CurrencyContext";

const roundValue = (value: number) => {
  return Math.round(value * 100) / 100;
};

export const currencyConverter = (value: number, currency: Currency) => {
  switch (currency) {
    case "USD":
      return roundValue(value * 0.09270383);
    case "EUR":
      return roundValue(value * 0.09313892723);
    case "GBP":
      return roundValue(value * 0.08057754884);
    case "SEK":
      return value;
    default:
      return Math.round(value);
  }
};
