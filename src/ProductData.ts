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

export const Products: Product[] = [
  {
    id: 1,
    designer: "Carhartt",
    title: "Services T-shirt",
    description: "T-shirt from Carhartt with a small print on the chest and a large print on the back. Made from ecologial cotton.",
    price: 650,
    category: "T-shirt",
    img: [
      "https://02.cdn37.se/ak1/images/2.692893/carhartt-wip-ss-freight-services-t-shirt-black.jpeg",
      "https://02.cdn37.se/ak1/images/2.692898/carhartt-wip-ss-freight-services-t-shirt-black.jpeg",
    ],
    color: "Black",
  },
  {
    id: 2,
    designer: "Universal Works",
    title: "Bakers chore jacket",
    description:
      "The bakers chore jacket has a relaxed fit with a straight silhouette. It is supplied with a classic collar, two front pockets and a button up seal.",
    price: 2000,
    category: "Jacket",
    img: [
      "https://02.cdn37.se/ak1/images/2.691148/universal-works-bakers-chore-v3-jacket-stone.jpeg",
      "https://02.cdn37.se/ak1/images/2.691143/universal-works-bakers-chore-v3-jacket-stone.jpeg",
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
      "https://02.cdn37.se/ak1/images/2.692908/carne-bollente-life-is-bootie-full-shirt-all-over.jpeg",
      "https://02.cdn37.se/ak1/images/2.677563/carne-bollente-life-is-bootie-full-shirt-all-over.jpeg",
    ],
    color: "White",
  },
  {
    id: 4,
    designer: "Layered",
    title: "Poppykalas rug",
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
