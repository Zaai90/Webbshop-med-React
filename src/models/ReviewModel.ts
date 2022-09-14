export interface ReviewModel {
  createdAt: string;
  productId: string;
  name: string;
  review: string;
  rating: number;
  accepted: boolean;
}
