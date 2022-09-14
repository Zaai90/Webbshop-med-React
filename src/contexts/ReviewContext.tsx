import { createContext, ReactNode, useContext } from "react";
import ratingData from "../components/Review/ratingData";
import { ReviewData } from "../components/Review/reviewData";
import { useLocalStorage } from "../hooks/localStorage";
import Product from "../models/Product";
import { ReviewModel } from "../models/ReviewModel";

interface ReviewContextValue {
  reviews: ReviewModel[];
    addReview: (review: ReviewModel) => void;
    calcRating: (product: Product) => number;
}

const ReviewContext = createContext<ReviewContextValue>({
  reviews: [],
    addReview: () => { },
    calcRating: () => 0,
});

interface Props {
  children: ReactNode;
}

function ReviewProvider({ children }: Props) {
  const [reviews, setReviews] = useLocalStorage<ReviewModel[]>("reviews", ReviewData);

  const addReview = (review: ReviewModel) => {
    const reviewsCopy = [...reviews, { ...review, id: 14 }];

    setReviews(reviewsCopy);
  };

  const calcRating = (product: Product) => {
    let total = 0;
    const findReviews = reviews.find((x) => x.productId === product.id);
    if (findReviews) {
      const res = reviews
        .filter((review) => review.productId === product.id)
        .map((review) => (total += Number(ratingData.indexOf(ratingData[review.rating]))));
      return Number((total / res.length).toFixed());
    }
    // todo fix state when reviews is 0
    else return 3;
  };

  return <ReviewContext.Provider value={{ reviews, addReview, calcRating }}>{children}</ReviewContext.Provider>;
}

export const useReviews = () => useContext(ReviewContext);

export default ReviewProvider;
