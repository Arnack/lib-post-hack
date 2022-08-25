/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { BancrouptMap } from "components/bancrouptMAP/BancrouptMap";

// import PieChartExample from "../../components/charts/piechart";

export default function Index() {
  return (
    <>
    <IndexNavbar fixed />
      

      <section className="mt-2 md:mt-10 pb-40 relative bg-blueGray-100">
       
        
      <div className="justify-center text-center flex flex-wrap">
          <div className="w-full pt-20 md:w-9/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Как судят россиян за долги</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
            И сколько на этом зарабатывает государство
            </p>
          </div>
        </div>

        <hr className="w-full border-b border-blueGray-200" />  

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-48 mt-48">
             <h3 className="text-3xl mb-2 leading-normal">
               Топ-3 банков истцов
             </h3>
             <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
               <ul>
                 <li>АО «Банк Русский Стандарт» </li>
                 <li>ПАО «Совкомбанк» </li>
                 <li>АО «Тинькофф Банк» </li>
               </ul>
             </p>
           </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-48 mt-48">
             <h3 className="text-3xl mb-2 leading-normal">
              Сумма госпошлин за один день
             </h3>
             <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
               2 123 006 рублей
             </p>
           </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-48 mt-48">
             <h3 className="text-3xl mb-2 leading-normal">
              Средний размер госпошлины
             </h3>
             <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              5 486 рублей
             </p>
           </div>
          </div>
        </div>

        <hr className="w-full border-b border-blueGray-200" />

        {/* <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-12 md:px-4 ml-auto mr-48 mt-0">
             
              <h3 className="text-2xl mb-2 font-semibold">
              Результаты рассмотрения дел
              </h3>
            </div>

            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-8">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
              <PieChartExample />
              </div>
            </div>
          </div>
        </div>

        <hr className="w-full border-b border-blueGray-200" /> */}
        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">

<div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-8">
  <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
  <BancrouptMap />
  </div>
</div>

            <div className="w-full md:w-6/12 px-12 md:px-4 ml-auto mr-48 mt-0">
             
              <h3 className="text-2xl mb-2 font-semibold">
              Банкротств по решению суда
              </h3>
            </div>
          </div>
        </div>

      </section>
      
      <Footer />
    </>
  );
}
