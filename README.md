
# Getir Nodejs Case Study




## Installation

Clone project and install project dependencies with npm

```bash
  git clone https://github.com/meroo36/getir-studycase
  cd getir-studycase
  npm install
```
Before starting the project please provide the environment variables.

To start project on development mode

```bash
npm run dev
```

```bash
npm run start

```
To run tests :

```bash
npm run test
```
## API Reference

#### Filter Records

```http
  POST /api/records
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `startDate` | `String` | `YYYY-MM-DD format` |
  `endDate` | `String`|`YYYY-MM-DD format`
  `minCount`|`Number`| `Min count`
  `maxCount`|`Number`| `Max count`


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI` -> Mongo URI which Getir gave

`PORT` -> Server port


## Test Output Documentation

```After running tests, jest creates a file to visualize the test result it can be found at /coverage/lcov-report/index.html. The html file contains formatted and visualized test results.```


## Demo

https://getir-studycase.herokuapp.com/api/reports
