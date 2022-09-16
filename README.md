[![Netlify Status](https://api.netlify.com/api/v1/badges/9a51e92b-c094-40e8-84fb-16bb67b920ab/deploy-status?branch=main)](https://app.netlify.com/sites/textilefc/deploys)
# Textile Fashion Center eShop
### Welcome to the TFC eShop! A shop made by students, for students.

The intention of this eShop is for students who study at TFC to sell their designed products, without having to sell
their designs and brand to larger brands, and to make some money - skipping every middle hand.

### Find us at http://textilefc.netlify.app

## Content
- <a href="#how-to-run">How to run project</a>
- <a href="#admin">Admin</a>
- <a href="#store">Store</a>
- <a href="#wishlist">Wishlist</a>
- <a href="#reviews">Reviews</a>
- <a href="#checkout">Checkout</a>
- <a href="#search">Search functionality</a>
- <a href="#modals">Modals, drawers and snacks</a>
- <a href="#currency">Currency converter</a>
- <a href="#admin">Localstorage</a>
- <a href="#about">About the project</a>
- <a href="#requirements">Requirements</a>

## <div id="admin">👮‍♀️ Admin</div>
In the admin area, you can view, add, edit and delete products.

## <div id="store">🏪 Store</div>
The store lists all our currently available products.

### 💻 On desktop
- the categories show up in a list to the left, clicking on each category will filter the store after that category
- hovering over a product in the grid reveals a quick buy button which shows the quickbuy modal, if clicked on

### 📱 On mobile/tablet
- the categories fold into a scrollable horizontal list
- every store item gets a shopping icon on it which shows the quickbuy drawer, if clicked on

### 🛒 Add to cart from
- product page
- quick buy modal (desktop)
- quick buy drawer (mobile/tablet)
- wishlist page (if item has been wishlisted)

## <div id="wishlist">❤ Wishlist</div>
Wishlist items you fancy or for future purchase!

### 💜 Add to wishlist from
- Store
- Product page

## <div id="checkout"> 🍾 Checkout</div>
- Fill out shipping info
- Select payment option
- Get a receipt
- Enjoy your new clothes! 

## <div id="reviews">💬 Reviews</div>
- Every product has reviews and a rating functionality.
- Products with zero reviews will not show the average review rating.
- Products that do have reviews will have an average rating component showing.
- At the bottom of each product page, you can write your own review!
- Pagination

## <div id="modals">📦 Modals, drawers, snacks</div>
### 🟪 Modals
- The quickbuy view of a product on desktop is shown using a modal
- The reviewform is also using a modal

### ⬜ Drawers
You can find drawers in multiple places in this project:
- The cart
- Quickbuy mobile
- Hamburger menu

### 🍬 Snacks
A snackbar will appear letting you know the item has been added to your cart.
The snackbar pops up from the bottom on mobile and from the right on larger screens.

## <div id="search">🔎 Search</div>
- The entirity of the store can be searched from anywhere.
- Search result will be shown based on product and designer names.

## <div id="localstorage">🐱‍🐉 LocalStorage</div>
Localstorage is used to load mocked data such as products and reviews, the product data can be changed from admin.

## <div id="currency">💰 Currency converter</div>
In the hamburger menu, you can choose one of these currencies:
- SEK
- EUR
- GBP
- USD

Products will update their price accordingly.

# <div id="about">About the project</div>
This group assignment was dealt to the second year students of <a href="https://www.boras.se/utbildningochforskola/yrkeshogskolaniboras/program/systemutvecklarenet">SUVNET21, Borås Yrkeshögskola.</a>

This group consisted of <b><a href="https://github.com/4l3x91">Alex</a> - <a href="https://github.com/carlafalk">Carl</a> - <a href="https://github.com/Zaai90">Erik</a> - <a href="https://github.com/osci-the-orca">Oscar</a> - <a href="https://github.com/ThaDDDen">Tommy</a></b>.

## An eShop created with:
- <a href="https://reactjs.org/">React</a>
- <a href="https://vitejs.dev/guide/">Vite</a>
- <a href="https://mui.com/">MUI component library</a>
- <a href="https://github.com/iamhosseindhv/notistack">notistack</a>
- <a href="https://swiperjs.com/">swiper</a>
- <a href="https://www.typescriptlang.org/">TypeScript</a>
- <a href="https://github.com/jquense/yup">yup</a>
- <a href="https://formik.org/">formik</a>
- <a href="https://styled-components.com/">styled components</a>

# <div id="how-to-run">How to run</div>
## Requirements to set up
```
node.js
npm
```
## Set up and run
```powershell
npm install
npm run build
npm run preview
```

# <div id="requirements">Requirements</div>
## Krav godkänt:
- [x] Git & GitHub har använts
- [x] Projektmappen innehåller en README.md fil - (läs ovan för mer info)
- [x] Uppgiften lämnas in i tid!
- [x] React, Typescript & ett komponentbibliotek ska används
- [x] React Router används för navigering
- [x] Formulären vid utcheckningen ska gå att automatiskt fyllas i
- [x] Samtliga fält ska ha valideringsregler
- [x] Hemsidan ska vara fullt responsiv (ner till 360px)
- [x] Mockade produkter ska finnas i en egen fil och vara typade med ett TS interface
- [x] Projektet skall läggas upp på Netlify eller liknande tjänst.
#
## Krav för väl godkänt:
- [x] Alla punkter för godkänt är uppfyllda
- [x] Det finns en admin-sida där man kan ändra, lägga till eller ta bort produkter på sidan
- [x] Samtliga produkter skall vara sparade i localstorage (om localstorage är tom då sidan
      läses in behöver samtliga fördefinierade produkter sparas där)
