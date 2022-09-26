/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { API_ROOT } from "lib/utils/constants";
import axios from "axios";
import { Factoid } from "components/textBlocks/factoids/factoid";
import BancrGenChart from "pages/_bancrCharts/genChart";
import BancrGenChartV2 from "pages/_bancrCharts/genChartV2";

export default function Index() {
  const [loading, setIsLoading] = useState(false);
  const [pageData, setPageData] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    const data = await axios.get(`${API_ROOT}bankruptcy?populate[PageContent][populate]=*`);
    setPageData(data.data.data.attributes.PageContent);
    setIsLoading(false)

  }

  useEffect(() => {
    fetchData();
  }, []);


  if (loading || !pageData) {
    return (
      <>
        <IndexNavbar fixed />
        <section className="mt-2 md:mt-10 pb-40 relative bg-blueGray-100">
          <h4>Loading...</h4>
        </section>
      </>
    )
  }

  return (
    <>
      <IndexNavbar fixed />


      <section className="pb-40 relative bg-blueGray-100">
      <div className="container">
        <div className="container pt-20">
          <div className="w-full pt-20 md:w-9/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">{pageData.About.Header}</h2>
            <p>{pageData.About.Subheader}</p>
            <p>{pageData.About.Description}</p>
          </div>
        </div>
        </div>
      </section>

      {!!pageData?.Factoids?.length && <section className="mt-2 md:mt-10 pb-40 relative bg-blueGray-100">
        <div className="container">
          <div className="row">
            {
              pageData.Factoids?.map(factoid => <div className="col col-md-4">
                <Factoid id={factoid.title} title={factoid.title} subtitle={factoid.subtitle} />
              </div>)
            }
          </div>
        </div>
      </section>}

      <section className="md:mt-10 mb-20 pb-40 relative bg-blueGray-100">
      <div className="container">
        <BancrGenChart data={pageData.DataBlocks[0]} />
        </div>
      </section>

      <section className="md:mt-10 mb-20 pb-40 relative bg-blueGray-100">
      <div className="container">
        <BancrGenChartV2 categories={ Object.values(pageData.DataBlocks[1].Data.period)}
          data={ Object.values(pageData.DataBlocks[1].Data.number)}
          header={pageData.DataBlocks[1].Header}
          subheader={pageData.DataBlocks[1].Subheader}
          description={pageData.DataBlocks[1].Description}
        />
        </div>
      </section>

      <section className="md:mt-10 mb-20 pb-40 relative bg-blueGray-100">
      <div className="container">
        <BancrGenChartV2 categories={ Object.values(pageData.DataBlocks[2].Data.period)}
          data={ Object.values(pageData.DataBlocks[2].Data.value)}
          header={pageData.DataBlocks[2].Header}
          subheader={pageData.DataBlocks[2].Subheader}
          description={pageData.DataBlocks[2].Description}
        />
        </div>
      </section>

      <section className="md:mt-10 mb-20 pb-40 relative bg-blueGray-100">
      <div className="container">
        <BancrGenChartV2 categories={ Object.values(pageData.DataBlocks[3].Data.period)}
          data={ Object.values(pageData.DataBlocks[3].Data.cases_total)}
          header={pageData.DataBlocks[3].Header}
          subheader={pageData.DataBlocks[3].Subheader}
          description={pageData.DataBlocks[3].Description}
        />
        </div>
      </section>

      <section className="md:mt-10 mb-20 pb-40 relative bg-blueGray-100">
      <div className="container">
        <BancrGenChart data={pageData.DataBlocks[4]} isSummarise={true} />
        </div>
      </section>

      <section className="md:mt-10 mb-20 pb-40 relative bg-blueGray-100">
      <div className="container">
        <BancrGenChartV2 categories={ Object.values(pageData.DataBlocks[5].Data.period)}
          data={ Object.values(pageData.DataBlocks[5].Data.total_search_cases)}
          header={pageData.DataBlocks[5].Header}
          subheader={pageData.DataBlocks[5].Subheader}
          description={pageData.DataBlocks[5].Description}
        />
        </div>
      </section>
      
 
      <Footer />
    </>
  );
}
