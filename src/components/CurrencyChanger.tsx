import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { Currency, useCurrency } from "../contexts/CurrencyContext";

const CurrencyChanger = () => {
  const [currency, setCurrency] = useState(Currency.SEK);
  const { changeCurrency } = useCurrency();

  const menuItems = Object.values(Currency).map((currency) => (
    <MenuItem key={currency} value={currency}>
      {currency}
    </MenuItem>
  ));

  useEffect(() => {
    changeCurrency(currency[0] as Currency);
  }, [currency]);

  function handleChange(event: SelectChangeEvent<{ value: Currency }>) {
    const choosenCurrency: Currency = event.target.value as Currency;
    changeCurrency(choosenCurrency);
    setCurrency(choosenCurrency);
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="currency-select-label">Currency</InputLabel>
      <Select labelId="currency-select-label" id="currency-select" label="Currency" onChange={handleChange}>
        {menuItems}
      </Select>
    </FormControl>
  );
};

export default CurrencyChanger;
