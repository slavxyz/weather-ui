# Weather UI (React + Vite)

**Weather UI** is a an application built with **ReactJS** that consumes the Weather API and displays:

- the current temperature
- a temperature trend based on the last 10 days

The application fetches data from a backend Weather API.

---

### Features

- React-based user interface
- Fetches weather data from a REST API

---

### API configuration

You can change the backend API URL in the following file:

src/config/api.js

Example:

```js
export const API_URL = "http://localhost:8080/api/v1";
```

### Requirements

- Docker
- Docker Compose

### Clone repository

- git clone https://github.com/slavxyz/weather-ui.git
- cd weather-ui

## Run the project with Docker

 - docker compose up -d --build

### Open browser 
```
http://localhost:5173/
```

## Run the project without Docker


### Clone repository

- git clone https://github.com/slavxyz/weather-ui.git
- cd weather-ui
- npm install
- npm run dev

### Open browser 
```
http://localhost:5173/
```




