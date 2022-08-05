/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
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

      {/* ------------------- */}

      <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                Методология
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Здесь будет описание методологии...
                </p>
                
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
            <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Источники
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Здесь будет рассказ об источниках со ссылками на них...
                </p>
                
              </div>
            </div>
          </div>
      </div>




      <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <div className="md:pr-12">
                <h3 className="text-3xl font-semibold">
                  Благодарности
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Здесь могут быть благодарности
                </p>
              </div>
            </div>

            </div>
      </div>
     

      
      <Footer />
    </>
  );
}
 