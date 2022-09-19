import React, { useState } from "react";
import { CommonChart } from "../commonChart/CommonChart";

const categories = [
  "16.09.2013",
  "03.03.2014",
  "28.04.2014",
  "28.07.2014",
  "05.11.2014",
  "12.12.2014",
  "16.12.2014",
  "02.02.2015",
  "16.03.2015",
  "05.05.2015",
  "16.06.2015",
  "03.08.2015",
  "14.06.2016",
  "19.09.2016",
  "27.03.2017",
  "02.05.2017",
  "19.06.2017",
  "18.09.2017",
  "30.10.2017",
  "18.12.2017",
  "12.02.2018",
  "26.03.2018",
  "17.09.2018",
  "17.12.2018",
  "17.06.2019",
  "29.07.2019",
  "09.09.2019",
  "28.10.2019",
  "16.12.2019",
  "10.02.2020",
  "27.04.2020",
  "22.06.2020",
  "27.07.2020",
  "22.03.2021",
  "26.04.2021",
  "15.06.2021",
  "26.07.2021",
  "13.09.2021",
  "25.10.2021",
  "20.12.2021",
];
const data = [
  5.5,
  7,
  7.5,
  8,
  9.5,
  10.5,
  17,
  15,
  14,
  12.5,
  11.5,
  11,
  10.5,
  10,
  9.75,
  9.25,
  9,
  8.5,
  8.25,
  7.75,
  7.5,
  7.25,
  7.5,
  7.75,
  7.5,
  7.25,
  7,
  6.5,
  6.25,
  6,
  5.5,
  4.5,
  4.25,
  4.5,
  5,
  5.5,
  6.5,
  6.75,
  7.5,
  8.5,
];

export const KeyRate = () => {
  return (
    <>
      <CommonChart
        type={"column"}
        label={"Ключевая ставка ЦБ РФ"}
        data={data}
        categories={categories}
      />
    </>
  );
};