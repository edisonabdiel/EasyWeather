<h1 align="center">RomeoCards</h1>

<img width="1438" alt="Screenshot 2021-11-27 at 18 33 32" src="https://user-images.githubusercontent.com/43752457/143691196-cbb0caa3-5c4d-4256-9dee-2b5f20f0730a.png">

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#dependencies">Dependencies</a></li>
    <li><a href="#design-reasoning">Design Reasoning</a></li>
    <li><a href="#API">API</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
  </ol>
</details>

## About The Project

RomeoCards is a demo dating app for the Erasys/trial task.

### Key Features

- Modern UI
- Extremely easy to use and intuitive
- Display a list of users and their details in a dynamicaly generated card
- Search for users by name and update the list in real time
- Teastable & Scalable
- Resposinve to different screen sizes

## Built With:

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Ant Design](https://ant.design/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [VS Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)

### Dependencies

- moment.js
- React Icons
- classnames
- millify

## Design Reasoning

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