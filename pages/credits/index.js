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
            <h2 className="font-semibold text-4xl">Кредиты</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
            Все, что вы хотели знать о кредитах
            </p>
          </div>
        </div>

        <hr className="w-full border-b border-blueGray-200" />  

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-12 md:px-4 mr-48 mt-48">
             <h3 className="text-3xl mb-2 leading-normal">
             Объем просроченных кредитов
             </h3>
             <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
             Рост просроченной задолженности по кредитам россиян перед банками начался с 2014 года. Первый пик был в сентябре 2016 года, когда россияне задолжали 923 млрд рублей. Максимальный объем просроченных долгов пришелся на декабрь 2021 года — тогда россияне не выплатили банкам более триллиона рублей. В январе 2022 года эта сумма долгов уменьшилась на 21 млрд рублей.
             </p>
           </div>

          </div>
        </div>

        <hr className="w-full border-b border-blueGray-200" />

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-12 md:px-4 ml-auto mr-48 mt-0">
              <h3 className="text-2xl mb-2 font-semibold">
              Общее количество кредитов
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
              Общий объем кредитов
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
              На какой срок берут кредиты?
              </h3>
            </div>
          </div>
        </div>

        <hr className="w-full border-b border-blueGray-200" />

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-12 md:px-4 ml-auto mr-48 mt-0">
              <h3 className="text-2xl mb-2 font-semibold">
              Общая задолженность по кредитам
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
              Средний срок погашения кредитов
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
              Цели кредитования
              </h3>
              <p className="text-gray-600">
              (инфографика + текст)
              </p>
            </div>
          </div>
        </div>

        <hr className="w-full border-b border-blueGray-200" />

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-12 md:px-4 ml-auto mr-48 mt-0">
              <h3 className="text-2xl mb-2 font-semibold">
              Кто чаще всего берет кредиты
              </h3>
              <p className="text-gray-600">
              (инфографика + текст)
              </p>
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
