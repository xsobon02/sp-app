const express = require('express');
const { parse } = require("csv-parse");
const app = express();
const fs = require('fs');

app.get("/api", (req, res) => {
  res.json(data);
});

app.listen(5000, () => { console.log("Server started on port 5000") });

app.use(express.static('public'))

function createCsvArray(path) {
  let arr = [];
  fs.createReadStream(path)
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", function (row) {
      arr.push(row);
    })
    .on("error", function (error) {
      console.log(error.message);
    })
  return arr;
}

const csvdata1 = createCsvArray("./public/2021-08-01_03-00-00.csv")
const csvdata2 = createCsvArray("./public/2021-08-01_03-10-00.csv")
const csvdata3 = createCsvArray("./public/2021-08-01_03-20-00.csv")
const csvdata4 = createCsvArray("./public/2021-08-01_03-30-00.csv")
const csvdata5 = createCsvArray("./public/2021-08-01_03-40-00.csv")
const csvdata6 = createCsvArray("./public/2021-08-01_03-50-00.csv")
const csvdata7 = createCsvArray("./public/2021-08-01_04-00-00.csv")
const csvdata8 = createCsvArray("./public/2021-08-01_04-10-00.csv")
const csvdata9 = createCsvArray("./public/2021-08-01_04-20-00.csv")
const csvdata10 = createCsvArray("./public/2021-08-01_04-30-00.csv")
const csvdata11 = createCsvArray("./public/2021-08-01_04-40-00.csv")
const csvdata12 = createCsvArray("./public/2021-08-01_04-50-00.csv")
const csvdata13 = createCsvArray("./public/2021-08-01_05-00-00.csv")
const csvdata14 = createCsvArray("./public/2021-08-01_05-10-00.csv")
const csvdata15 = createCsvArray("./public/2021-08-01_05-20-00.csv")
const csvdata16 = createCsvArray("./public/2021-08-01_05-30-00.csv")
const csvdata17 = createCsvArray("./public/2021-08-01_05-40-00.csv")
const csvdata18 = createCsvArray("./public/2021-08-01_05-50-00.csv")
const csvdata19 = createCsvArray("./public/2021-08-01_06-00-00.csv")
const csvdata20 = createCsvArray("./public/2021-08-01_06-10-00.csv")
const csvdata21 = createCsvArray("./public/2021-08-01_06-20-00.csv")
const csvdata22 = createCsvArray("./public/2021-08-01_06-30-00.csv")
const csvdata23 = createCsvArray("./public/2021-08-01_06-40-00.csv")
const csvdata24 = createCsvArray("./public/2021-08-01_06-50-00.csv")
const csvdata25 = createCsvArray("./public/2021-08-01_07-00-00.csv")
const csvdata26 = createCsvArray("./public/2021-08-01_07-10-00.csv")
const csvdata27 = createCsvArray("./public/2021-08-01_07-20-00.csv")
const csvdata28 = createCsvArray("./public/2021-08-01_07-30-00.csv")
const csvdata29 = createCsvArray("./public/2021-08-01_07-40-00.csv")
const csvdata30 = createCsvArray("./public/2021-08-01_07-50-00.csv")
const csvdata31 = createCsvArray("./public/2021-08-01_08-00-00.csv")
const csvdata32 = createCsvArray("./public/2021-08-01_08-10-00.csv")
const csvdata33 = createCsvArray("./public/2021-08-01_08-20-00.csv")
const csvdata34 = createCsvArray("./public/2021-08-01_08-30-00.csv")
const csvdata35 = createCsvArray("./public/2021-08-01_08-40-00.csv")
const csvdata36 = createCsvArray("./public/2021-08-01_08-50-00.csv")
const csvdata37 = createCsvArray("./public/2021-08-01_09-00-00.csv")
const csvdata38 = createCsvArray("./public/2021-08-01_09-10-00.csv")
const csvdata39 = createCsvArray("./public/2021-08-01_09-20-00.csv")
const csvdata40 = createCsvArray("./public/2021-08-01_09-30-00.csv")
const csvdata41 = createCsvArray("./public/2021-08-01_09-40-00.csv")
const csvdata42 = createCsvArray("./public/2021-08-01_09-50-00.csv")
const csvdata43 = createCsvArray("./public/2021-08-01_10-00-00.csv")
const csvdata44 = createCsvArray("./public/2021-08-01_10-10-00.csv")
const csvdata45 = createCsvArray("./public/2021-08-01_10-20-00.csv")
const csvdata46 = createCsvArray("./public/2021-08-01_10-30-00.csv")
const csvdata47 = createCsvArray("./public/2021-08-01_10-40-00.csv")
const csvdata48 = createCsvArray("./public/2021-08-01_10-50-00.csv")
const csvdata49 = createCsvArray("./public/2021-08-01_11-00-00.csv")

const data = {
  "csvdata": [
    csvdata1,
    csvdata2,
    csvdata3,
    csvdata4,
    csvdata5,
    csvdata6,
    csvdata7,
    csvdata8,
    csvdata9,
    csvdata10,
    csvdata11,
    csvdata12,
    csvdata13,
    csvdata14,
    csvdata15,
    csvdata16,
    csvdata17,
    csvdata18,
    csvdata19,
    csvdata20,
    csvdata21,
    csvdata22,
    csvdata23,
    csvdata24,
    csvdata25,
    csvdata26,
    csvdata27,
    csvdata28,
    csvdata29,
    csvdata30,
    csvdata31,
    csvdata32,
    csvdata33,
    csvdata34,
    csvdata35,
    csvdata36,
    csvdata37,
    csvdata38,
    csvdata39,
    csvdata40,
    csvdata41,
    csvdata42,
    csvdata43,
    csvdata44,
    csvdata45,
    csvdata46,
    csvdata47,
    csvdata48,
    csvdata49,
  ],
}

