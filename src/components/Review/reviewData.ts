import { ReviewModel } from "../../models/ReviewModel";

export const ReviewData: ReviewModel[] = [
    {
        createdAt: '2022-09-09',
        productId: 1,
        name: 'Jonas',
        review: 'Den satt lite tajt om magen.',
        rating: 2,
        accepted: true
    },
    {
        createdAt: '2022-09-11',
        productId: 1,
        name: 'Alex',
        review: 'Den här tröjan var asnajs! 😊',
        rating: 4,
        accepted: true
    },
    {
        createdAt: '2022-09-12',
        productId: 1,
        name: 'Lucas',
        review: 'Redit gött material att törka skethör\'t mä\'',
        rating: 4,
        accepted: true
    },
    {
        createdAt: '2022-08-30',
        productId: 2,
        name: 'Annette',
        review: 'Bästa Johanna, min favoritdesigner - helt klart!',
        rating: 4,
        accepted: true
    },
    {
        createdAt: '2022-09-12',
        productId: 2,
        name: 'Anton',
        review: 'Riktigt jävla trökig skjorta.',
        rating: 0,
        accepted: true
    },
]