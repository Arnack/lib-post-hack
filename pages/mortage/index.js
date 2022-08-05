/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
    <IndexNavbar fixed />
      

      <section className="mt-2 md:mt-10 pb-40 relative bg-blueGray-100">
       
        
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
            </div>
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-8">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img className="w-full h-auto" src="https://dummyimage.com/600x200/a8a8a8/fff&text=chart" alt="Bankruptcy" />
              </div>
            </div>
          </div>
        </div>

        <hr className="w-full border-b border-blueGray-200" />
        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-8">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img className="w-full h-auto" src="https://dummyimage.com/600x200/a8a8a8/fff&text=chart" alt="Bankruptcy" />
              </div>
            </div>
            <div className="w-full md:w-6/12 px-12 md:px-4 ml-auto mr-48 mt-0">
              <h3 className="text-2xl mb-2 font-semibold">
              Объем ипотек
              </h3>
            </div>
          </div>
        </div>

        <hr className="w-full border-b border-blueGray-200" />

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-12 md:px-4 ml-auto mr-48 mt-0">
              <h3 className="text-2xl mb-2 font-semibold">
              Общая ипотечная задолженность
              </h3>
            </div>
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-8">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img className="w-full h-auto" src="https://dummyimage.com/600x200/a8a8a8/fff&text=chart" alt="Bankruptcy" />
              </div>
            </div>
          </div>
        </div>

        <hr className="w-full border-b border-blueGray-200" />
        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-8">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img className="w-full h-auto" src="https://dummyimage.com/600x200/a8a8a8/fff&text=chart" alt="Bankruptcy" />
              </div>
            </div>
            <div className="w-full md:w-6/12 px-12 md:px-4 ml-auto mr-48 mt-0">
              <h3 className="text-2xl mb-2 font-semibold">
              Пророченная задолженность
              </h3>
            </div>
          </div>
        </div>

        <hr className="w-full border-b border-blueGray-200" />

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-12 md:px-4 ml-auto mr-48 mt-0">
              <h3 className="text-2xl mb-2 font-semibold">
              Динамика ставки
              </h3>
            </div>
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-8">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img className="w-full h-auto" src="https://dummyimage.com/600x200/a8a8a8/fff&text=chart" alt="Bankruptcy" />
              </div>
            </div>
          </div>
        </div>

        <hr className="w-full border-b border-blueGray-200" />
        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-8">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img className="w-full h-auto" src="https://dummyimage.com/600x200/a8a8a8/fff&text=chart" alt="Bankruptcy" />
              </div>
            </div>
            <div className="w-full md:w-6/12 px-12 md:px-4 ml-auto mr-48 mt-0">
              <h3 className="text-2xl mb-2 font-semibold">
              Средняя цена квадратного метра
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
              <p className="text-gray-600 text-sm">
              Где и сколько кредитов берут граждане
                </p>
            </div>
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-8">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img className="w-full h-auto" src="https://dummyimage.com/600x200/a8a8a8/fff&text=chart" alt="Bankruptcy" />
              </div>
            </div>
          </div>
        </div>

        <hr className="w-full border-b border-blueGray-200" />
        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-8">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img className="w-full h-auto" src="https://dummyimage.com/600x200/a8a8a8/fff&text=chart" alt="Bankruptcy" />
              </div>
            </div>
            <div className="w-full md:w-6/12 px-12 md:px-4 ml-auto mr-48 mt-0">
              <h3 className="text-2xl mb-2 font-semibold">
              На какой срок берут ипотеки?
              </h3>
            </div>
          </div>
        </div>

        <hr className="w-full border-b border-blueGray-200" />

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-12 md:px-4 ml-auto mr-48 mt-0">
              <h3 className="text-2xl mb-2 font-semibold">
              Средний срок погашения ипотек
              </h3>
            </div>
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-8">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img className="w-full h-auto" src="https://dummyimage.com/600x200/a8a8a8/fff&text=chart" alt="Bankruptcy" />
              </div>
            </div>
          </div>
        </div>
        
      </section>
      
      <Footer />
    </>
  );
}
