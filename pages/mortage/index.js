/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from 'next/head'

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { MortgageGrow } from "components/mortgage/mortgageGrows";
import { MortgageChart } from "components/mortgage/mortgage";
import { MortgageToCitisents } from "components/mortgageToCitisents/MortgageToSitisents";
import { SqMeterPrise } from "components/sqMeterPrise/SqMeterPrise";
import { IdxMortMap } from "components/mortIdx/mortIdxMap/IdxMortMap";
import GeneralTable from "components/table/generalTable";
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
    const data = await axios.get(`${API_ROOT}mortage?populate[PageContent][populate]=*`);

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
        <title>Ипотеки | Кредитный прожектор</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <IndexNavbar fixed />
        <section className="mt-20 md:mt-1 pt-20 pb-40 relative bg-blueGray-100">
          <div className="container">
            <h4>Loading...</h4>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
    <Head>
    <title>Ипотеки | Кредитный прожектор</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
      <IndexNavbar fixed />

      <section className="mt-2 md:mt-10 pt-20 pb-15 relative bg-blueGray-100">
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

      { !!pageData.Factoids?.length && <section className="pb-20 relative bg-blueGray-100">
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
      </section>}


      <section className="md:mt-1 pb-20 relative bg-blueGray-100">
        <div className="container">
          <div className="w-full pt-20 md:w-9/12 px-12 md:px-4">
            <AllCreditsMap data={pageData.DataBlocks[0]} />
          </div>
        </div>
      </section>

<section className="md:mt-1 pb-20 relative bg-blueGray-100">
  <div className="container">
    <div className="w-full pt-20 md:w-9/12 px-12 md:px-4">
      <AllCreditsMap data={pageData.DataBlocks[1]} />
    </div>
  </div>
</section>

<section className="md:mt-1 pb-20 relative bg-blueGray-100">
  <div className="container">
    <div className="w-full pt-20 md:w-9/12 px-12 md:px-4">
      <AllCreditsMap data={pageData.DataBlocks[2]} />
    </div>
  </div>
</section>


<section className="md:mt-1 pb-20 relative bg-blueGray-100">
        <div className="container">
          <div className="w-full pt-20 md:w-9/12 px-12 md:px-4">
            <div className="row">
              {
                 <AllCreditsMap data={pageData.DataBlocks[3]} />
              }
            </div>
          </div>
        </div>
      </section>


<section className="md:mt-1 pb-20 relative bg-blueGray-100">
  <div className="container">
    <div className="w-full pt-20 md:w-9/12 px-12 md:px-4">
      <div className="row">
        {
           <AllCreditsMap data={pageData.DataBlocks[4]} />
        }
      </div>
    </div>
  </div>
</section>


<section className="md:mt-1 pb-20 relative bg-blueGray-100">
  <div className="container">
    <div className="w-full pt-20 md:w-9/12 px-12 md:px-4">
      <div className="row">
        {
          <BancrGenChartV2
            categories={Object.values(pageData.DataBlocks[5].Data.Period)}
            data={Object.values(pageData.DataBlocks[5].Data.primary_all_types)}
            header={pageData.DataBlocks[5].Header}
            description={pageData.DataBlocks[5].Description}
            subheader={pageData.DataBlocks[5].Subheader}
          />
        }
      </div>
    </div>
  </div>
</section>

      <section className="md:mt-1 pb-20 relative bg-blueGray-100">
        <div className="container">
          <div className="w-full pt-20 md:w-9/12 px-12 md:px-4">
            <div className="row">
              {
                <BancrGenChartV2
                  categories={Object.values(pageData.DataBlocks[7].Data.period)}
                  data={Object.values(pageData.DataBlocks[7].Data.avg_term)}
                  header={pageData.DataBlocks[7].Header}
                  description={pageData.DataBlocks[7].Description}
                  subheader={pageData.DataBlocks[7].Subheader}
                />
              }
            </div>
          </div>
        </div>
      </section>




      {/* <section className="mt-2 md:mt-10 pb-40 relative bg-blueGray-100">
      <div className="justify-center text-center flex flex-wrap">
          <div className="w-full pt-20 md:w-9/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Ипотека — главная форма кредита</h2>
            <p className="text-lg font-semibold leading-relaxed mt-4 mb-4 text-blueGray-500">
            Россиянам хочется иметь свой дом, даже несмотря на то, что он подорожал в полтора раза за пять лет
            </p>
            <p className="leading-relaxed mt-4 mb-4 text-blueGray-500">
            Ипотеки занимают около трети всех кредитов россиян. Еще одну треть занимают заемы на ремонт квартиры. С каждым годом число ипотек растет. Если в 2018 году россияне взяли 189874 ипотек, то в январе 2022 года это число уже увеличилось на 57180 ипотек.
            </p>
          </div>
        </div>


        <hr className="w-full border-b border-blueGray-200" />

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-12 md:px-4 ml-auto mr-48 mt-0">
              <h3 className="text-2xl mb-2 font-semibold">
              Количество ипотек
              </h3>
              <p>
              Ипотеки занимают около трети всех кредитов россиян. Еще одну треть занимают заемы на ремонт квартиры. С каждым годом число ипотек растет. Если в 2018 году россияне взяли 189874 ипотек, то в январе 2022 года это число уже увеличилось на 57180 ипотек.
              </p>
            </div>
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-8">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
              <MortgageGrow />
                
              </div>
            </div>
          </div>
        </div>

        <hr className="w-full border-b border-blueGray-200" />
        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-8">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
              <MortgageToCitisents />
              </div>
            </div>
            <div className="w-full md:w-6/12 px-12 md:px-4 ml-auto mr-48 mt-0">
              <h3 className="text-2xl mb-2 font-semibold">
              Объем ипотечной задолжности
              </h3>
            </div>
          </div>
        </div>

        <hr className="w-full border-b border-blueGray-200" />

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-12 md:px-4 ml-auto mr-48 mt-0">
              <h3 className="text-2xl mb-2 font-semibold">
              Индекс ипотечной закредитованности регионов
              </h3>
              <p>
              Где и сколько кредитов берут граждане
              </p>
            </div>
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-8">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <IdxMortMap />
              </div>
            </div>
          </div>
        </div>

        <hr className="w-full border-b border-blueGray-200" />
        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-8">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
              <SqMeterPrise />
                </div>
            </div>
            <div className="w-full md:w-6/12 px-12 md:px-4 ml-auto mr-48 mt-0">
              <h3 className="text-2xl mb-2 font-semibold">
              Средняя цена квадратного метра
              </h3>
            </div>
          </div>
        </div>


        

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-12/12 px-12 md:px-4 ml-auto mr-48 mt-0">
              <h3 className="text-2xl mb-2 font-semibold">
              Ипотеки по регионам
              </h3>
              <p>
                <GeneralTable/>
              </p>
            </div>
            
          </div>
        </div>
      </section> */}
      <Footer />
    </>
  );
}
