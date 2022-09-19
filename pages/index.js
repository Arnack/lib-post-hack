/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { API_POPULATE, API_ROOT } from "lib/utils/constants";
import { Factoid } from "components/textBlocks/factoids/factoid";
import { TextBlock } from "components/textBlocks/textBlock/TextBlock";
import { DebtVolNum } from "./_homeCharts/debtVolume";

export default function Index() {
  const [loading, setIsLoading] = useState(false);
  const [dataBlocks, setDataBlocks] = useState([]);
  const [pageHeader, setPageHeader] = useState([]);
  const [factoids, setFactoids] = useState([]);
  const [textBlocks, setTextBlocks] = useState([]);
  const [headerDividers, setHeaderDividers] = useState([]);


const fetchData = async () => {
  setIsLoading(true)
  const dataBlocks = await axios.get(`${API_ROOT}home-page?populate[DataBlocks][populate]=*`);

  const PageHeader = await axios.get(`${API_ROOT}home-page?populate[PageHeader][populate]=*`);

  const factoids = await axios.get(`${API_ROOT}home-page?populate[factoids][populate]=*`);

  const textBlocks = await axios.get(`${API_ROOT}home-page?populate[TextBlocks][populate]=*`);

  const headersDividers = await axios.get(`${API_ROOT}home-page?populate[HeadersDividers][populate]=*`);

  // console.log('dta>>>', dataBlocks.data.data.attributes.DataBlocks);
  setDataBlocks(dataBlocks.data.data.attributes.DataBlocks);

  // console.log('PageHeader>>>', PageHeader.data.data.attributes.PageHeader);
  setPageHeader(PageHeader.data.data.attributes.PageHeader);

  // console.log('factoids>>>', factoids.data.data.attributes.factoids);
  setFactoids(factoids.data.data.attributes.factoids);

  // console.log('TextBlocks>>>', textBlocks.data.data.attributes.TextBlocks);
  setTextBlocks(textBlocks.data.data.attributes.TextBlocks);

  setHeaderDividers(headersDividers.data.data.attributes.HeadersDividers);

  setIsLoading(false);

}

useEffect(() => {
  fetchData();
}, []);

// if (loading) {
//   return <>
//    <IndexNavbar fixed />
//    <h4>Loading...</h4>
//   </>
// }

  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            {loading ?
            <h4>Loading...</h4> :
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                {pageHeader[0]?.Title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                {pageHeader[0]?.Description}
              </p>
              <div className="mt-12">
                <Link 
                  href="/credits"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  <span className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
            >Кредиты</span>
                  
                </Link>
                <Link className="cursor-pointer github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                
                  href=""
                  >
                    <span
                    className="cursor-pointer github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                    >
                    Ипотеки
                    </span>
                  
                </Link>
                <Link
                  href="">
                  <span className="cursor-pointer github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-700 uppercase text-sm shadow hover:shadow-lg">
                
                  Банкротства</span>
                </Link>
              </div>
            </div>}
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/pattern_nextjs.png"
          alt="..."
        />
      </section>

      <section>
        <div className="container">
          <div className="row">
          {factoids.map(factoid => {
            return <div className="col col-md-4">
                <Factoid id={factoid.title} title={factoid.title} subtitle={factoid.subtitle} />
              </div>
          })}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
          {textBlocks.map(textBlock => {
            return <div className="col col-md-6">
                <TextBlock id={textBlock.id + 'tb'} colorScheme="light" title={textBlock.Title} description={textBlock.Description} />
              </div>
          })}
          </div>
        </div>
      </section>


      {/* header dividers */}
      <section>
        <div className="container">
          <div className="row">
          {headerDividers.map(headerDivider => {
            return <div className="col col-md-6">
                <TextBlock id={headerDivider.id + 'tb'} colorScheme="light"
                  title={headerDivider.Header}
                  description={headerDivider.Subheader} />
              </div>
          })}
          </div>
        </div>
      </section>

      {dataBlocks && <section>
        <div className="container">
         {headerDividers && <>
          <h4>{headerDividers[1]?.Header}</h4>
          <p>{headerDividers[1]?.Subheader}</p>
          </>}
          <DebtVolNum data={dataBlocks[3]} /> 
        </div>
      </section>}





      <section className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Open Source
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                
                <a
                  href="https://tailwindcss.com/?ref=creative"
                  className="text-blueGray-300"
                  target="_blank"
                >
                  Кредитный прожектор
                </a>{" "}
                - проект с полностью открытым кодом, использующий открытые источники.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                Вы можете поддержать проект создав Pull Request либо отметив его на GitHub.
              </p>
              <a
                href="h"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Github Star
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-github text-blueGray-700 absolute text-55 -top-150-px -right-100 left-auto opacity-80"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        
      </section>

      <Footer />
    </>
  );
}

// export async function getServerSidePropss() {
//   // Fetch data from external API
//   const dataBlocks = await axios.get(`${API_ROOT}home-page?populate[DataBlocks][populate]=*`);

//   const PageHeader = await axios.get(`${API_ROOT}home-page?populate[PageHeader][populate]=*`);

//   const factoids = await axios.get(`${API_ROOT}home-page?populate[factoids][populate]=*`);

//   const TextBlocks = await axios.get(`${API_ROOT}home-page?populate[TextBlocks][populate]=*`);

//   const HeadersDividers = await axios.get(`${API_ROOT}home-page?populate[HeadersDividers][populate]=*`);

//   // Pass data to the page via props
//   return { props: { dataBlocks, PageHeader, factoids, TextBlocks, HeadersDividers } }
// }
