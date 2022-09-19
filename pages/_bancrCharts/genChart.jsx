import React from "react";
import { CommonChart } from "components/commonChart/CommonChart";

export const BancrGenChart = ({ data }) => {

    if (!data || !data.Data) {
        return <></>
    }

    const categories = Object.keys(data?.Data);
    const dataVals = [];
    categories.forEach(category => dataVals.push(data?.Data[category][0]));

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
