/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { TotalCredits } from "components/first/TotoalCredits";
import { OutdatedDebt } from "components/first/OutdatedDebt";
import { KeyRate } from "components/keyRate/KeyRate";
import { MortgageChart } from "components/mortgage/mortgage";
import axios from "axios";
import { API_ROOT } from "lib/utils/constants";
import { Factoid } from "components/textBlocks/factoids/factoid";
import { BancrGenChart } from "pages/_bancrCharts/genChart";

export default function Index() {
  const [loading, setIsLoading] = useState(false);
  const [pageData, setPageData] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    const data = await axios.get(`${API_ROOT}credit?populate[PageContent][populate]=*`);

    console.log('>>>>data.data.data.attributes.PageContent', data.data.data.attributes.PageContent);

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


      <section className="mt-2 md:mt-10 pb-40 relative bg-blueGray-100">
        <div className="container">
        <div className="w-full pt-20 md:w-9/12 px-12 md:px-4">
          <h2 className="font-semibold text-4xl">{pageData.About.Header}</h2>
          <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
            {pageData.About.Subheader}
          </p>
          <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
            {pageData.About.Description}
          </p>
          </div>
        </div>

        <hr className="w-full border-b border-blueGray-200" />
      </section>

      <section className="md:mt-1 pb-40 relative bg-blueGray-100">
        <div className="container">
          <div className="w-full pt-20 md:w-9/12 px-12 md:px-4">
          <div className="row">
            {
              pageData.Factoids?.map(factoid => <div className="col col-md-4">
                <Factoid id={factoid.title} title={factoid.title} subtitle={factoid.subtitle} />
              </div>)
            }
          </div>
          </div>
        </div>

        <hr className="w-full border-b border-blueGray-200" />
      </section>

      {/* <section className="md:mt-10 mb-20 pb-40 relative bg-blueGray-100">
        {
          pageData.DataBlocks.map(dataBlock => <BancrGenChart data={dataBlock} />)
        }
        
      </section> */}


      <Footer />
    </>
  );
}