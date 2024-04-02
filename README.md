# React Frontend Exercises - Vinted

An exercise to recreate the Vinted website. It's part of my training to become a web and mobile developer with the school "Le Reacteur"

[Webpage](https://vint-react-front-antoine-soliv.netlify.app/)

## Routes

### "/"

The Home Page.
All the offers are display from the oldest created to the newest

### "/offers"

The offers sort regarding the query:

- Price minimum and maximum
- sort by ascending or descending price
- search by word in offer's name

### "offer/:id"

An offer detail found by id in params

### "publish"

To Publish an offer when clicking on green buttons

### "/payment"

To buy an offer when on an offer page

## To Do

- textarea for description publish
- better design for search bar (a button to search, design when the input is focus, etc)
- add a screen message when successfully sign up
- Not displaying all the pages number at once when too many page of offers:

  [package rc-pagination](https://www.npmjs.com/package/rc-pagination)

  [package react-paginate](https://www.npmjs.com/package/react-paginate)

- responsive sign modal mobile horizontal
- when on mobile, opening the sign up and log in modal above mobile menu (and not closing it)
- component for sign/log/sell button
- dryer code
- Send the id with the axios request body for Payment route
- Don't display offer with the true "isPurchased" key in Home/Offers route
- If it's not your offer, when on Offer/:id -> if key "isPurchased" is true -> return to Home
- If it's your offer, when on Offer/:id -> give payment info
- Make a "My Purchased" page
- Make a "My Sold Offers" page

_not sure_

- merging the sign up and log in modal in one component ?
- creating a/some components for the inputs ?
