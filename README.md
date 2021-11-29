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
    <li><a href="#API">API</a></li>
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

The app was initialised completely from scratch in order to ensure a smooth integration between React - Next - Redux RTK - TailwindCSS.

It retrives the data from a dedicated [JSON SERVER API](https://github.com/edisonabdiel/RomeoTaskDB) and displays it in cohesive manner.

Integrates a simple yet efficient search feature that allows the user to search for users by name and update the list in real time.

Components were built in a fashion that allows for a more responsive, dynamic and scalable experience.

The UI is meant to be minimalistic yet engaging and intuitive. It was built using TailwindCSS to allow great control and autonomy over the layout of the app and also the design/feel of all the elements within it.

Users are fictional and used for demo porpuses only.

## API

Refer to the ```server``` folder for more information on how to get the server running and how to use it.

```cd``` into the ```server``` folder and run the following command:

```json-server users.json``` 

| method | path               | description            |
|--------|--------------------|------------------------|
| GET    | /api/users         | Get list of users      |

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

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
npm run dev
# or
yarn dev
```

Build 

```bash
npm run build
# or
yarn build
```


Open [http://localhost:3001](http://localhost:3001) in your browser to see the result.


<h4 align="center">Made with loads of ❤️‍🔥</h4>