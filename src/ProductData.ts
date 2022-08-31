export interface Product {
  id: number;
  designer: string;
  title: string;
  description: string;
  price: number;
  category: string;
  img: string[];
  size?: string;
  color?: string;
}

export const products: Product[] = [
  {
    id: 1,
    designer: "Oscar Stenson",
    title: "Kånken",
    description: "Generic hipster bag",
    price: 250,
    category: "Accessories",
    img: [
      "https://www.fotoagent.dk/single_picture/12535/138/custom1/138450752.jpg",
      "https://www.fotoagent.dk/single_picture/12535/138/mega/138450751.jpg",
      "https://www.fotoagent.dk/single_picture/12535/138/mega/138450753.jpg",
    ],
    color: "Orange",
  },
  {
    id: 2,
    designer: "Tom Sachs",
    title: "General purpose shoe",
    description: "A shoe that is made for wearing and can withstand tough conditions",
    price: 1500,
    category: "Shoe",
    img: [
      "https://sneakernews.com/wp-content/uploads/2022/08/Tom-Sachs-Nike-GPS-Dark-Sulfur-2.jpg?w=1140",
      "https://sneakernews.com/wp-content/uploads/2022/08/Tom-Sachs-Nike-GPS-Dark-Sulfur-5.jpg?w=1140",
      "https://sneakernews.com/wp-content/uploads/2022/08/Tom-Sachs-Nike-GPS-Dark-Sulfur-1.jpg?w=1140",
    ],
    color: "yellow",
  },
  {
    id: 3,
    designer: "Carne Bollente",
    title: "Life is bootie-full",
    description: "A shirt made from wool and linen, printed with people dancing naked.",
    price: 1900,
    category: "Shirt",
    img: [
      "https://02.cdn37.se/ak1/images/2.692903/carne-bollente-life-is-bootie-full-shirt-all-over.jpeg",
      "https://02.cdn37.se/ak1/images/2.692910/carne-bollente-life-is-bootie-full-shirt-all-over.png",
      "https://02.cdn37.se/ak1/images/2.677563/carne-bollente-life-is-bootie-full-shirt-all-over.jpeg",
    ],
    color: "White",
  },
  {
    id: 4,
    designer: "Layered",
    title: "Poppykalas rug flower field",
    description: "A rug from layered woven by hand. Made from wool and tencel",
    price: 9900,
    category: "Rug",
    img: [
      "https://02.cdn37.se/ak1/images/2.516099/layered-poppykalas-rug-flower-field.jpeg",
      "https://02.cdn37.se/ak1/images/2.573995/layered-poppykalas-rug-flower-field.jpeg",
      "https://02.cdn37.se/ak1/images/2.574010/layered-poppykalas-rug-flower-field.jpeg",
    ],
    color: "Pink",
  },
  {
    id: 5,
    designer: "Birkenstock",
    title: "Arizona leather black",
    description: "Black leather sandals made for people with tender little hearts. Preferably worn with multicolored socks.",
    price: 1300,
    category: "Shoe",
    img: [
      "https://02.cdn37.se/ak1/images/2.667048/birkenstock-arizona-oiled-nubuck-leather-black.jpeg",
      "https://02.cdn37.se/ak1/images/2.667038/birkenstock-arizona-oiled-nubuck-leather-black.jpeg",
      "https://02.cdn37.se/ak1/images/2.667053/birkenstock-arizona-oiled-nubuck-leather-black.jpeg",
    ],
    color: "Black",
  },
  {
    id: 6,
    designer: "Lemaire",
    title: "Twisted belted pants",
    description: "Workwear inspired pants, designed with twisted seams alongside the outer leg which provides a fit with a lot of volume.",
    price: 2300,
    category: "Pants",
    img: [
      "https://02.cdn37.se/ak1/images/2.689628/lemaire-twisted-belted-pants-misty-ivory.jpeg",
      "https://02.cdn37.se/ak1/images/2.689873/lemaire-twisted-belted-pants-misty-ivory.jpeg",
      "https://02.cdn37.se/ak1/images/2.689878/lemaire-twisted-belted-pants-misty-ivory.jpeg",
    ],
    color: "Ivory",
  },
  {
    id: 7,
    designer: "Atelier Yuchi",
    title: "Capri woven blanket",
    description: "Blanket from Atelier Yuchi made from hand woven wool, 138 x 184cm",
    price: 2400,
    category: "blanket",
    img: [
      "https://02.cdn37.se/ak1/images/2.672628/atelier-yuchi-capri-woven-blanket.jpeg",
      "https://02.cdn37.se/ak1/images/2.672818/atelier-yuchi-capri-woven-blanket.jpeg",
      "https://02.cdn37.se/ak1/images/2.672638/atelier-yuchi-capri-woven-blanket.jpeg",
    ],
    color: "Multi colored",
  },
  {
    id: 8,
    designer: "Layered",
    title: "Modern oriental rug",
    description: "Oriental rug made from 100% wool. Inspired by the Romanian sculptor Constantin Brancusi.",
    price: 8900,
    category: "Rug",
    img: [
      "https://02.cdn37.se/ak1/images/2.639563/layered-modern-oriental-rug-saffron.jpeg",
      "https://02.cdn37.se/ak1/images/2.573975/layered-modern-oriental-rug-saffron.jpeg",
      "https://02.cdn37.se/ak1/images/2.516090/layered-modern-oriental-rug-saffron.jpeg",
    ],
    color: "Ivory",
  },
];
