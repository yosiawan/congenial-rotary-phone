# Shipper Mock App
## Deployment
The app is deployed using Heroku. 

You can access it here:

- ~~https://shipper-yosia.herokuapp.com/~~
- ~~Might take a while for Heroku to spin up the app in Free Tier~~

- https://congenial-rotary-phone-mu.vercel.app/
  - Used Vercel instead of Heroku for better Lighthouse score

    <img width="250" alt="Screen Shot 2021-12-11 at 16 59 19" src="https://user-images.githubusercontent.com/40589209/145672571-25fec431-b892-4b0e-b46f-412d6502b9a5.png">

## Features
- Browse drivers data
-- Each page shows 5 drivers
-- Pagination button should be disabled when there are no more data (both direction)
- Search driver by first name

  ### Additional 
  - Driver data is cached
  - Unit tests

## How to run locally
- Clone the repo
- Install dependencies
-- run `npm install`
- Run app locally
-- run `npm start`
-Run tests
-- run `npm run test`
