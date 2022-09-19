import React from "react";
import { CommonChart } from "components/commonChart/CommonChart";

export const BancrGenChartV2 = ({ categories, data, subheader, header, description }) => {
// console.log(categories, data);
    return (
        <div className="row">
            <div className="col-md-8">
            <CommonChart label={data?.Header}
                             categories={categories}
                             data={data}
                />
            </div>
            <div className="col-md-4">
                <h3>
                {header}
                </h3>
                <p>{subheader}</p>
                <p>
                {description}
                </p>
            </div>


        </div>
                
    )
};
