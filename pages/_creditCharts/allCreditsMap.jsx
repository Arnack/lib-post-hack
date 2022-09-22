import { RusMap } from "components/rusmap/rusmap";
import { isoToHC } from "lib/utils/isoToHC";
import React, { useState } from "react";

const AllCreditsMap = ({ data }) => {
  const [currentDateIdx, setDateIdx] = useState(0);


  console.log('data>>>>', data);

  const chartData = data.Data;

  console.log('chartData>>>>', chartData);

  const dates = Object.keys(chartData).filter((key) => key !== "region_iso" && key !== "region_reg_name" && key !== "region_name" && key !== "region");

  const regions = Object.values(chartData["region_iso"]);

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
        <div className="col col-md-5">
            <h3>{data.Header}</h3>
            <p>{data.Description}</p>
        </div>

        <div className="col col-md-7">
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

export default AllCreditsMap;
