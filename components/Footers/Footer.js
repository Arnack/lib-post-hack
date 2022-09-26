import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap lg:text-left">
            <div className="w-full lg:w-4/12 px-4">
              <h5 className="">Проект является победителем хакатона «Прожектор-2022»</h5>
              <strong style={{color: 'black'}} className="text-black">Запущен при поддержке 
                <a href="https://te-st.ru/" target="_blank">
                  теплицы социальных технологий
                </a>
              </strong>
              <p className="text-lg mt-0 mb-2 text-blueGray-600">
                За время время хакатона, команда не взяла ни одного кредита.
              </p>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                  
                >
                  <a style={{color: 'black !important'}}
                    href="https://github.com/Arnack/lib-post-hack"
                    target="_blank"
                  >
                  <i className="fab fa-github" />
                  </a>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-8/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-8/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Над проектом работали
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Виталия @vitalia_chik
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Константин @vorovich
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Григорий @utrom_go
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Степан @Stefs
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Ксения @th_thing
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Источники
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <span
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        // href="#"
                      >
                        ЦБ
                      </span>
                    </li>
                    <li>
                      <span
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                       Росстат
                      </span>
                    </li>
                    <li>
                      <span
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                       Data.gov.ru
                      </span>
                    </li>
                    <li>
                    <span
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                       ЕФРСБ
                      </span>

                    </li>
                    <li>
                    <span
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                       НБКИ
                      </span>

                    </li>



                    <li>
                    <span
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                       EМИСС
                      </span>

                    </li>

                    <li>
                    <span
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                       ФССП
                      </span>

                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
