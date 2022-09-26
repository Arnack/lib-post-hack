/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from 'next/head'

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import axios from "axios";
import { API_ROOT } from "lib/utils/constants";
import { Factoid } from "components/textBlocks/factoids/factoid";
import BancrGenChartV2 from "pages/_bancrCharts/genChartV2";
import AllCreditsMap from "pages/_creditCharts/allCreditsMap";

export default function Index() {
  const [loading, setIsLoading] = useState(false);
  const [pageData, setPageData] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    const data = await axios.get(`${API_ROOT}credit?populate[PageContent][populate]=*`);

    setPageData(data.data.data.attributes.PageContent);
    setIsLoading(false)

  }

  useEffect(() => {
    fetchData();
  }, []);



  if (loading || !pageData) {
    return (
      <>
      <Head>
      <title>Кредиты | Кредитный прожектор</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
        <IndexNavbar fixed />
        <section className="mt-20 md:mt-10 pb-40 relative bg-blueGray-100">
          <div className="container">
            <h4>Loading...</h4>
          </div>
        </section>
      </>
    )
  }

  return (
    <><Head>
    <title>Кредиты | Кредитный прожектор</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
      <IndexNavbar fixed />


      <section className="pt-20 pb-40 relative bg-blueGray-100">
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


      <section className="md:mt-10 mb-20 pb-40 relative bg-blueGray-100">
        {
          <AllCreditsMap data={pageData.DataBlocks[0]} />
        }
      </section>

      <section className="md:mt-10 mb-20 pb-40 relative bg-blueGray-100">
        {
          <AllCreditsMap data={pageData.DataBlocks[1]} />
        }
      </section>


      <section className="md:mt-10 mb-20 pb-40 relative bg-blueGray-100">
        {
          <BancrGenChartV2
            categories={Object.values(pageData.DataBlocks[2].Data.Dates)}
            data={Object.values(pageData.DataBlocks[2].Data.Rate).map(item => +(item.replace(',', '.')))}
            header={pageData.DataBlocks[2].Header}
            description={pageData.DataBlocks[2].Description}
            subheader={pageData.DataBlocks[2].Subheader}
          />
        }
      </section>

<section className="md:mt-10 mb-20 pb-40 relative bg-blueGray-100">
  {
    <AllCreditsMap data={pageData.DataBlocks[4]} />
  }
</section>

<section className="md:mt-10 mb-20 pb-40 relative bg-blueGray-100">
  {
    <AllCreditsMap data={pageData.DataBlocks[5]} />
  }
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
