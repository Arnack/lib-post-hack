/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { BancBtCourt } from "components/bancrouptByCourt/BancByCourt";
import { IndicatorsFSSPAmount } from "components/fss/indicatorsFCCP/IndicatorsFSSPAmount";
import { IndicatorsFSSPNUM } from "components/fss/indicatorsFCCP/IndicatorsFSSPNUM";

export default function Index() {
  return (
    <>
    <IndexNavbar fixed />
      

      <section className="mt-2 md:mt-10 pb-40 relative bg-blueGray-100">
       
        
      <div className="justify-center text-center flex flex-wrap">
          <div className="w-full pt-20 md:w-9/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Банкротства стремительно растут</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
            В некоторых регионах в прошлом году обанкротилось больше граждан чем за предыдущие шесть лет
            </p>
          </div>
        </div>

        <hr className="w-full border-b border-blueGray-200" />
        <br/>
        <br/>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-12/12 px-12 md:px-4 ml-auto mr-48 mt-48">
             
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Число граждан признанных банкротами
              </h3>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
                С момента создания процедуры банкротства физических лиц в октябре 2015 года ею воспользовались более 475 тысяч раз. За шесть лет количество судебных решений о банкротстве увеличилось в 10 раз.
              </p>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
                В 2021 году больше всего процедур продажи приставами имущества граждан на число жителей региона прошло в Магаданской области, Республике Тыва и Карачаево-Черкесской Республике. Меньше всего — в Челябинской и Липецкой областях, а также Москве.
              </p>
            </div>

            <div className="w-full md:w-9/12 px-4 mr-auto ml-auto mt-8">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
              <BancBtCourt />
                </div>
            </div>
          </div>
        </div>

        <hr className="w-full border-b border-blueGray-200" />
        <br/>
        <br/>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-12/12 px-12 md:px-4 ml-auto mr-48 mt-48">
             
              <p className="text-3xl mb-2 font-semibold leading-normal">
              Сумма дел о взыскании с физических лиц в пользу кредитных организаций в производстве ФССП
              </p>
            </div>

            <div className="w-full md:w-9/12 px-4 mr-auto ml-auto mt-8">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
              <IndicatorsFSSPAmount />
                </div>
            </div>
          </div>
        </div>

        <hr className="w-full border-b border-blueGray-200" />
        <br/>
        <br/>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-12/12 px-12 md:px-4 ml-auto mr-48 mt-48">
             
              <IndicatorsFSSPNUM />
            </div>
          </div>
        </div>


      </section>
      
      <Footer />
    </>
  );
}
