import { RusMap } from "components/rusmap/rusmap";
import { isoToHC } from "lib/utils/isoToHC";
import React, { useState } from "react";

const datax = [
  [
    ["ru-ms", 1369],
    ["ru-2509", 1111],
    ["ru-kd", 691],
    ["ru-sp", 475],
    ["ru-sa", 643],
    ["ru-sv", 667],
    ["ru-bk", 834],
    ["ru-ro", 638],
    ["ru-cl", 596],
    ["ru-vg", 624],
    ["ru-tt", 477],
    ["ru-ns", 648],
    ["ru-sr", 408],
    ["ru-nz", 343],
    ["ru-st", 315],
    ["ru-om", 457],
    ["ru-bl", 381],
    ["ru-pe", 342],
    ["ru-ul", 133],
    ["ru-pz", 184],
    ["ru-ob", 197],
    ["ru-tl", 54],
    ["ru-ir", 330],
    ["ru-ty", 111],
    ["ru-pr", 283],
    ["ru-ke", 299],
    ["ru-km", 192],
    ["ru-vo", 561],
    ["ru-al", 298],
    ["ru-ud", 169],
    ["ru-kg", 84],
    ["ru-iv", 114],
    ["ru-kh", 241],
    ["ru-lp", 197],
    ["ru-kn", 157],
    ["ru-ky", 365],
    ["ru-vr", 270],
    ["ru-ys", 133],
    ["ru-br", 150],
    ["ru-ks", 202],
    ["ru-vl", 199],
    ["ru-tv", 124],
    ["ru-to", 192],
    ["ru-cv", 363],
    ["ru-ar", 255],
    ["ru-rz", 414],
    ["ru-ck", 43],
    ["ru-as", 79],
    ["ru-ku", 112],
    ["ru-am", 101],
    ["ru-tb", 153],
    ["ru-mg", 85],
    ["ru-mr", 182],
    ["ru-kv", 79],
    ["ru-ln", 129],
    ["ru-sm", 78],
    ["ru-ct", 69],
    ["ru-ko", 85],
    ["ru-ps", 52],
    ["ru-no", 45],
    ["ru-ki", 136],
    ["ru-kt", 68],
    ["ru-ad", 57],
    ["ru-mm", 59],
    ["ru-ol", 161],
    ["ru-kl", 35],
    ["ru-da", 13],
    ["ru-me", 35],
    ["ru-ng", 26],
    ["ru-kb", 88],
    ["ru-kk", 36],
    ["ru-kr", 7],
    ["ru-ka", 44],
    ["ru-sl", 27],
    ["ru-kc", 38],
    ["ru-ga", 27],
    ["ru-sc", 7],
    ["ru-cn", 3],
    ["ru-yv", 6],
    ["ru-tu", 20],
    ["ru-mg", 15],
    ["ru-in", 9],
  ],
];

export const AllCreditsMap = ({ data }) => {
  const [currentDateIdx, setDateIdx] = useState(0);


  console.log(data);

  const chartData = data.Data;
  const dates = Object.keys(chartData).filter((key) => key !== "region_iso" && key !== "region_reg_name");

  console.log(dates);

  const regions = Object.values(chartData["region_iso"]);

  console.log(regions);


  const datas = [];

  for (let i = 0; i < dates.length; i++) {
    const date = dates[i];
    const values = Object.values(chartData[date]);
    const data = [];
    for (let j = 0; j < regions.length; j++) {
      const region = regions[j];
      const value = values[j];
      data.push([isoToHC(region), value]);
    }
    datas.push(data);
  }


//   console.log('datas>>>>', datas[currentDateIdx]);
//   console.log('datax>>>>', datax[0]);   


  return (
    <div className="container">
    <div className="row">
        <div className="col col-md-4">
            <h3>{data.Header}</h3>
            <p>{data.Description}</p>
        </div>

        <div className="col col-md-8">
      <RusMap
        mapTitle={data.Header}
        data={datas[currentDateIdx]}
        // data={datax[0]}
        // minVal={500}
        // maxVal={9000}
        // stopColors={[[40, '#fcdfdf'], [100, '#fccaca'], [500, '#faaeae'],
        //   [1000, '#fc9898'], [3000, '#f67d7d'], [5000, '#f85d5d'],
        //   [7000, '#fd3b3b'], [8000, '#f82b2b'], [9000, '#ff0707']]}
      />


      <input
          value={currentDateIdx}
        min={0}
        max={dates.length - 1}
        onChange={(e) => setDateIdx(+e.target.value)}
        type={"range"}
      />{" "}
      {dates[currentDateIdx]} 
      {/* г. Всего банкротств: {totalRus[currentDateIdx]} */}
      <br />
      
      </div>
    </div>
    </div>
  );
};
