import React, { useState } from "react";
import { CommonChart } from "../commonChart/CommonChart";


const categories = [
  "I квартал 2019 г.",
  "II квартал 2019 г.",
  "III квартал 2019 г.",
  "IV квартал 2019 г.",
  "I квартал 2020 г.",
  "II квартал 2020 г.",
  "III квартал 2020 г.",
  "IV квартал 2020 г.",
  "I квартал 2021 г.",
  "II квартал 2021 г.",
  "III квартал 2021 г.",
  "IV квартал 2021 г.",
 "I квартал 2022 г.",
  "II квартал 2022 г."
];
const data = [
        60705.0,
        61618.0,
        62892.0,
        64059.0,
        71503.0,
        73438.0,
        76167.0,
        79003.0,
        83177.0,
        89008.0,
        93537.0,
        98909.0,
        109198.0,
        116279.0
];

export const SqMeterPrise = () => {
  return (
    <>
      <CommonChart
        label={"Средняя цена квадратного метра"}
        data={data}
        categories={categories}
      />
    </>
  );
};
