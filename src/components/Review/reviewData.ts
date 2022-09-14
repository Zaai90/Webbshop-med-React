import { useProducts } from "../../contexts/ProductContext";
import { ReviewModel } from "../../models/ReviewModel";

const { products } = useProducts();
export const ReviewData: ReviewModel[] = [
  {
    createdAt: "2022-09-09",
    productId: products[0].id,
    name: "Jonas",
    review: "Den satt lite tajt om magen.",
    rating: 2,
    accepted: true,
  },
  {
    createdAt: "2022-09-11",
    productId: products[0].id,
    name: "Alex",
    review: "Den här tröjan var asnajs! 😊",
    rating: 4,
    accepted: true,
  },
  {
    createdAt: "2022-09-12",
    productId: products[0].id,
    name: "Lucas",
    review: "Redit gött material att törka skethör't mä'",
    rating: 4,
    accepted: true,
  },
  {
    createdAt: "2022-08-30",
    productId: products[1].id,
    name: "Annette",
    review: "Bästa Johanna, min favoritdesigner - helt klart!",
    rating: 4,
    accepted: true,
  },
  {
    createdAt: "2022-09-12",
    productId: products[1].id,
    name: "Anton",
    review: "Riktigt jävla trökig skjorta.",
    rating: 0,
    accepted: true,
  },
];
