/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from 'next/head'
import axios from "axios";
import { API_ROOT } from "lib/utils/constants";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Query from "components/query";
import { TextBlock } from "components/textBlocks/textBlock/TextBlock";
// import CATEGORI
// import CATEGORIES_QUERY from "../apollo/queries/category/categories";

export default function Index() {
  const [loading, setIsLoading] = useState(false);
  const [textBlocks, setPageData] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    const data = await axios.get(`${API_ROOT}about?populate[TextBlocks][populate]=*`);

    console.log('>>>>data.data.data.attributes.TextBlocks', data.data.data.attributes.TextBlocks);

    setPageData(data.data.data.attributes.TextBlocks);
    setIsLoading(false)

  }

  useEffect(() => {
    fetchData();
  }, []);



  if (loading || !textBlocks) {
    return (
      <>
      <Head>
      <title>О проекте | Кредитный прожектор</title>
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
    <>
    <Head>
    <title>О проекте | Кредитный прожектор</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
      <IndexNavbar fixed />
      <section className="header relative mb-16 pt-32 items-center flex max-h-600-px">
        <div className="container mx-auto flex flex-wrap">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                О проекте
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              Закредитованность россиян — серьёзная социальная проблема, приобретающая масштаб национальной катастрофы. Однако, она остаётся в тени внимания СМИ и, главное, понимания граждан. Чтобы пролить свет на масштаб роста кредитов россиян, мы запустили «Кредитный прожектор». Это инструмент для граждан, журналистов, социологов, экономистов и других исследователей, который визуализирует десятки разрозненных отчетов, считает собственный индексы и позволяет наглядно оценить масштаб, динамику и тенденций роста долгов россиян, число закредитованных граждан, общий масштаб долгов, размер среднего кредита и другие данные, которые удалось выявить, а также динамику роста задолженностей и процентных ставок по годам и регионам страны.{" "}
                
              </p>
            
            </div>
        </div>
      </section>

      <section className="mt-20 md:mt-10 pt-16 pb-40 relative bg-blueGray-100">
        <div className="container">
          <div className="row">
          {textBlocks.map((textBlock, idx) => {
            if (idx === 0) return <></>;
            return <div className="col col-md-6">
                <TextBlock id={textBlock.id + 'tb'} colorScheme="light" title={textBlock.Title} description={textBlock.Description} />
              </div>
          })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
 