# Online-Banking-Website

## Introduction

It is an online banking platform using React. Users can view popular stocks on the website and check the latest price information. They can also save or unsave stocks based on their preferences. Additionally, the website provides a wallet deposit feature for users to add funds and view their wallet balance.

## User Stories

- As a user, I can learn about the business background from introduction part.
- As a user, I can check popular stocks list.
- As a user, I can check latest price of the stock I want.
- As a user, I can save the stock I like.
- As a user, I can convert the price to SGD.
- As a user, I can easily turn to last stock or next stock in the list.
- As a user, I can check all the stocks saved by myself.
- As a user, I can deposit funds into my wallet.
- As a user, I can check the balance of my wallet.

## Wireframe

### Navbar

### Home Page

- Introduction

### Popular Stocks Page

- Stocks List(Name, Symbol)

  - Stock Detail Table

    - Information: Symbol, Name, Price, Currency, Day High, Day Low, Day Change, Volume, Last Trade Time
    - Fetch Stocks Information from API([Stockdata](https://api.stockdata.org))

  - Button: Click to Save

    - Used online database(Airtable) for CREATE

  - Button: Convert Price to SGD
    - Fetch Latest Currency Rate from API([open exchange rates](https://openexchangerates.org))
  - Button: Last Stock
  - Button: Next Stock
  - Button: Back

### Saved Stocks Page

- Saved Stock List
  - Fetch data from online database
- Button: Unsave
  -Used online database for DELETE

### My Wallet Page

- Current Balance
  - Fetch data from online database
- Button: Deposit
  - Used online database for UPDATE

## Trello for Project Planning

https://trello.com/invite/b/btJqDKyi/ATTI389e3539f235535c56f0b3ebe256a519BCA9345F/online-banking-website

## Technologies Used

### Language

- React(JavaScript)
  - Components, Props, useStates, React Router Routes, useEffect, useParams, Lifting State
- HTML
- CSS

### API

Used two API:

1. Fetch latest stocks data:
   [Stockdata](https://api.stockdata.org)
2. Fetch latest currency rates:
   [open exchange rates](https://openexchangerates.org)

### Online Database

CREATE, UPDATE, DELETE implementation using [Airtable](https://airtable.com/developers). Used two tables to store:

1. Save stocks list
2. Current balance

### Git and Github

## Screenshots

## Getting Started (Vercel)

https://online-banking-website-omega.vercel.app/

## Next Steps

- User can input the amount of deposit funds
- User can check latest news of stocks market
- CSS and Styling
- Add loading state
- Responsive Design
