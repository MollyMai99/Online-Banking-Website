# Online-Banking-Website

## Introduction

An online banking web APP using React.
Our app allows users to learn the background of the bank, apply for credit cards, check latest news and stocks price.

## Getting Started (Vercel)

https://online-banking-website-omega.vercel.app/

## User Stories

- As a user, I can learn the background of the bank through homepage;
- As a user, I can click into the page I want on homepage;

- As a user, I can apply for a credit card on CardPAge by filling the form;
- As a user, I can check the submitted form and am able update or delete the record on CardPAge.

- As a user, I can check the latest news of one specific stock on NewsPage;

- As a user, I can check the latest price of one specific stock on StocksPage;

## API

https://api.marketdata.app/

URL

https://api.marketdata.app/v1/stocks/quotes/AAPL
https://api.marketdata.app/v1/stocks/quotes/AAPL/?dateformat=timestamp
https://api.marketdata.app/v1/stocks/news/AAPL/?dateformat=timestamp&limit=2

## Wireframe

\* HomePage

- Bank Background
- Feature Set(Link to each page)

\* CardPage

- Apply for Credit Card
- Form([Name, Birthdate, IC No.]; CREATE/UPDATE/DELETE; data store in Airtable; input validation; submit form)
- Check Submitted Record(lifting state?)

\* NewsPage

- Latest News(fetch from API)
  https://api.marketdata.app/v1/stocks/news/AAPL/?dateformat=timestamp&limit=2

\* StocksPage

- Latest Price(fetch from API)
  https://api.marketdata.app/v1/stocks/quotes/AAPL/?dateformat=timestamp

## Trello

https://trello.com/invite/b/btJqDKyi/ATTI389e3539f235535c56f0b3ebe256a519BCA9345F/online-banking-website

## Airtable

- Stores: cards application information(CREATE, UPDATE, DELETE)

## Bruno??

## Screenshots

## Technologies Used

## Next Steps

- Financial Goal Calculator
- Foreign Exchange(fetch latest rate from API)
