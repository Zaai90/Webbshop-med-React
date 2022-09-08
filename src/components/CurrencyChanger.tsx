import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Currency, useCurrency } from "../contexts/CurrencyContext";

const CurrencyChanger = () => {
  const { currency, changeCurrency } = useCurrency();
  const actualCurrency: Currency = currency;

  const menuItems = Object.values(Currency).map((currency) => (
    <MenuItem key={currency} value={currency}>
      {currency}
    </MenuItem>
  ));

  function handleChange(event: SelectChangeEvent<{ value: Currency }>) {
    const choosenCurrency: Currency = event.target.value as Currency;
    changeCurrency(choosenCurrency);
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="currency-select-label">Currency</InputLabel>
      <Select labelId="currency-select-label" id="currency-select" label="Currency" defaultValue={{ value: actualCurrency }} onChange={handleChange}>
        {menuItems}
      </Select>
    </FormControl>
  );
};

export default CurrencyChanger;
