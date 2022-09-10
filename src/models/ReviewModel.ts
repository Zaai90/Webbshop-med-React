
export interface ReviewModel {
    createdAt: string;
    productId: number;
    name: string;
    review: string;
    rating: number;
    accepted: boolean;
  }