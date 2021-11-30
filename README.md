<h1 align="center">EasyWeather</h1>

<img width="1438" alt="Screenshot 2021-11-29 at 21 14 08" src="https://user-images.githubusercontent.com/43752457/143936437-688d12d1-72c1-4cba-ba2a-2994177a916f.png">

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#dependencies">Dependencies</a></li>
    <li><a href="#architecture">Architecture</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
  </ol>
</details>

## About The Project

EasyWeather is a simple yet modern and robust weather app that allows you to search for a city and get the weather forecast.

### Key Features

- Modern and Clean UI
- Extremely easy to use and intuitive
- Displays a card with detials of the current weather
- Search for cities around the world and retrieves real-time data
- Teastable & Scalable
- Resposinve to different screen sizes and devices

## Built With:

- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/)
- [VS Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)

### Dependencies

- moment.js
- dayjs
- PropTypes
- lodash
- SWR
- React Icons
- eslint
- prettier
- husky

## Architecture

The app was initialised completely from scratch.

It retrives the data using the [SWR](https://github.com/vercel/swr) <i>by</i> [vercel](https://vercel.com/). The data comes from the [OpenWeatherMap](https://openweathermap.org/) API. This method was used in order to format the weather data into readable data all inside the same hook in a clean and comprehensive way.

Integrates a simple yet efficient search feature that allows the user to search for different cities around the world by name and update get the weather forecast in real time. Achieved with the combination of the debounce method from lodash, a custom handler and the useMemo hook from React.

Components were built in a fashion that allows for a more responsive, dynamic and scalable experience.

The UI is meant to be minimalistic yet engaging and intuitive. It was built using TailwindCSS to allow great control and autonomy over the layout of the app and also the design/feel of all the elements within it. The UI was designed to be responsive and adaptable to different screen sizes.

Mock data was generated with the help of [Mockaroo](https://mockaroo.com/) and the formated by hand.

## Getting Started

Clone the repository and run the following commands in the terminal:

Install the dependencies 

```bash
npm install
# or
yarn add install
```

Run the development server:

```bash
npm start
# or
yarn start
```

Run the tests

```bash
npm test
# or
yarn test
```

Build 

```bash
npm run build
# or
yarn build
```


Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

<!-- <a align="center">[![Netlify Status](https://api.netlify.com/api/v1/badges/934efba8-8e5f-4510-aab1-9558f5d6cfb9/deploy-status)](https://app.netlify.com/sites/easy-weather-pro/deploys)</a> -->


<h4 align="center">Made with ❤️‍🔥</h4>
