import React from "react";
import { CommonChart } from "components/commonChart/CommonChart";

const BancrGenChart = ({ data, isSummarise }) => {

    if (!data || !data.Data) {
        return <></>
    }

    const categories = isSummarise ? Object.keys(data?.Data).filter(key => key !== "region") : Object.keys(data?.Data);
    const dataVals = [];

    if (isSummarise) {
        categories.forEach(category => dataVals.push(Object.values(data?.Data[category]).reduce((a, b) => a + b, 0)));
    } else {
        categories.forEach(category => dataVals.push(data?.Data[category][0]));
    }
   

    return (
        <div className="row">
            <div className="col-md-8">
            <CommonChart label={data?.Header}
                             categories={categories}
                             data={dataVals}
                />
            </div>
            <div className="col-md-4">
                <h3>
                {data?.Header}
                </h3>
                <p>{data?.Description}</p>
                <p>
                {data?.Subheader}
                </p>
            </div>


        </div>
                
    )
};

export default BancrGenChart;
