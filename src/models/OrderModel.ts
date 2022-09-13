import { PaymentFormValues } from "../components/Checkout/PaymentForm";
import { CartItem } from "./CartItem";
import { CreditCardModel } from "./CreditCardModel";
import { SwishModel } from "./SwishModel";

export interface OrderModel {
  orderId: number;
  cartItems: CartItem[];
  swishInfo?: SwishModel;
  creditInfo?: CreditCardModel;
  paymentFormInfo: PaymentFormValues;
}
