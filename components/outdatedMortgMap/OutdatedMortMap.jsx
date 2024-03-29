import React, { useState } from "react";
import { RusMap } from "../rusmap/rusmap";

const datas = [
    [
        ['ru-bl', 74994],['ru-br', 64261],['ru-vl', 76203],['ru-vr', 141327],['ru-iv', 44290],['ru-kg', 89044],['ru-kt', 32942],['ru-ks', 56886],['ru-lp', 59616],['ru-2509', 1023342],['ru-ol', 45513],['ru-rz', 84594],['ru-sm', 56440],['ru-tb', 50283],['ru-tv', 87863],['ru-tl', 94798],['ru-ys', 67910],['ru-ms', 1645496],['ru-ki', 48091],['ru-ko', 79915],['ru-ar', 102752],['ru-vo', 76170],['ru-kn', 74501],['ru-ln', 197911],['ru-mm', 62223],['ru-ng', 35575],['ru-ps', 33210],['ru-sp', 799223],['ru-ad', 18283],['ru-kl', 22426],['ru-kr', 32591],['ru-kd', 345440],['ru-as', 52759],['ru-vg', 126351],['ru-ro', 248621],['ru-sc', 11704],['ru-da', 42007],['ru-in', 2432],['ru-kb', 24669],['ru-kc', 13995],['ru-no', 26291],['ru-cn', 9829],['ru-st', 126494],['ru-bk', 314758],['ru-me', 39659],['ru-mr', 47606],['ru-tt', 324175],['ru-ud', 119898],['ru-cv', 107812],['ru-pe', 191288],['ru-kv', 81383],['ru-nz', 190456],['ru-ob', 129907],['ru-pz', 78175],['ru-sa', 191565],['ru-sr', 127057],['ru-ul', 75371],['ru-ku', 44282],['ru-sv', 354631],['ru-ty', 556898],['ru-cl', 199452],['ru-ga', 5963],['ru-tu', 17206],['ru-kk', 29621],['ru-al', 127957],['ru-ky', 240796],['ru-ir', 158493],['ru-ke', 144110],['ru-ns', 266885],['ru-om', 113737],['ru-to', 68133],['ru-mg', 50987],['ru-ck', 143328],['ru-ct', 58574],['ru-ka', 28871],['ru-pr', 139846],['ru-kh', 114880],['ru-am', 58401],['ru-mg', 18554],['ru-sl', 53050],['ru-yv', 7619],['ru-2485', 6101]
    ],
    [
        ['ru-bl', 78996],['ru-br', 66579],['ru-vl', 79536],['ru-vr', 148045],['ru-iv', 46023],['ru-kg', 92852],['ru-kt', 34367],['ru-ks', 59029],['ru-lp', 62453],['ru-2509', 1082324],['ru-ol', 47333],['ru-rz', 87316],['ru-sm', 58487],['ru-tb', 52618],['ru-tv', 91405],['ru-tl', 99581],['ru-ys', 71294],['ru-ms', 1770967],['ru-ki', 49272],['ru-ko', 81657],['ru-ar', 107219],['ru-vo', 79270],['ru-kn', 77960],['ru-ln', 208842],['ru-mm', 64638],['ru-ng', 36725],['ru-ps', 34343],['ru-sp', 849326],['ru-ad', 19079],['ru-kl', 23339],['ru-kr', 35955],['ru-kd', 368431],['ru-as', 55166],['ru-vg', 130845],['ru-ro', 262005],['ru-sc', 13052],['ru-da', 45983],['ru-in', 2574],['ru-kb', 25936],['ru-kc', 14954],['ru-no', 27876],['ru-cn', 10878],['ru-st', 132196],['ru-bk', 329481],['ru-me', 40877],['ru-mr', 49760],['ru-tt', 342116],['ru-ud', 126337],['ru-cv', 111368],['ru-pe', 199508],['ru-kv', 83998],['ru-nz', 199758],['ru-ob', 134921],['ru-pz', 82279],['ru-sa', 200558],['ru-sr', 132493],['ru-ul', 78562],['ru-ku', 46466],['ru-sv', 373509],['ru-ty', 578372],['ru-cl', 209323],['ru-ga', 6160],['ru-tu', 18141],['ru-kk', 31302],['ru-al', 134234],['ru-ky', 251484],['ru-ir', 164803],['ru-ke', 151951],['ru-ns', 283779],['ru-om', 119076],['ru-to', 70412],['ru-mg', 53400],['ru-ck', 148650],['ru-ct', 61724],['ru-ka', 30796],['ru-pr', 154651],['ru-kh', 122095],['ru-am', 62698],['ru-mg', 19608],['ru-sl', 56622],['ru-yv', 7841],['ru-2485', 6491]
    ],
    [
        ['ru-bl', 85011],['ru-br', 71639],['ru-vl', 85597],['ru-vr', 159746],['ru-iv', 49219],['ru-kg', 99247],['ru-kt', 36936],['ru-ks', 63162],['ru-lp', 67165],['ru-2509', 1162350],['ru-ol', 50580],['ru-rz', 93109],['ru-sm', 62232],['ru-tb', 55865],['ru-tv', 97539],['ru-tl', 108125],['ru-ys', 77088],['ru-ms', 1952230],['ru-ki', 52664],['ru-ko', 86268],['ru-ar', 114900],['ru-vo', 85324],['ru-kn', 85808],['ru-ln', 226487],['ru-mm', 69911],['ru-ng', 39164],['ru-ps', 36327],['ru-sp', 925298],['ru-ad', 20308],['ru-kl', 25090],['ru-kr', 40695],['ru-kd', 403656],['ru-as', 59030],['ru-vg', 139795],['ru-ro', 280852],['ru-sc', 15225],['ru-da', 50255],['ru-in', 2671],['ru-kb', 27684],['ru-kc', 16480],['ru-no', 29787],['ru-cn', 12606],['ru-st', 142629],['ru-bk', 354771],['ru-me', 42990],['ru-mr', 52234],['ru-tt', 371590],['ru-ud', 136791],['ru-cv', 117229],['ru-pe', 214309],['ru-kv', 88765],['ru-nz', 216191],['ru-ob', 144507],['ru-pz', 90262],['ru-sa', 214324],['ru-sr', 141234],['ru-ul', 83429],['ru-ku', 50432],['ru-sv', 405343],['ru-ty', 622980],['ru-cl', 226652],['ru-ga', 6776],['ru-tu', 19456],['ru-kk', 33725],['ru-al', 145097],['ru-ky', 272098],['ru-ir', 178792],['ru-ke', 165121],['ru-ns', 310172],['ru-om', 129142],['ru-to', 76449],['ru-mg', 58965],['ru-ck', 156967],['ru-ct', 67527],['ru-ka', 33478],['ru-pr', 173624],['ru-kh', 133469],['ru-am', 68690],['ru-mg', 21278],['ru-sl', 63365],['ru-yv', 8456],['ru-2485', 7168]
    ],
    [
        ['ru-bl', 88812],['ru-br', 73792],['ru-vl', 88584],['ru-vr', 165027],['ru-iv', 50786],['ru-kg', 102826],['ru-kt', 38324],['ru-ks', 65057],['ru-lp', 69700],['ru-2509', 1201259],['ru-ol', 51835],['ru-rz', 94951],['ru-sm', 63679],['ru-tb', 57328],['ru-tv', 99944],['ru-tl', 111959],['ru-ys', 79130],['ru-ms', 2028540],['ru-ki', 53737],['ru-ko', 88568],['ru-ar', 117516],['ru-vo', 87936],['ru-kn', 88890],['ru-ln', 232136],['ru-mm', 72334],['ru-ng', 39745],['ru-ps', 37048],['ru-sp', 949495],['ru-ad', 21178],['ru-kl', 25848],['ru-kr', 43776],['ru-kd', 420698],['ru-as', 61196],['ru-vg', 144682],['ru-ro', 290402],['ru-sc', 16082],['ru-da', 52898],['ru-in', 2793],['ru-kb', 28756],['ru-kc', 17467],['ru-no', 30863],['ru-cn', 13933],['ru-st', 148611],['ru-bk', 366503],['ru-me', 44296],['ru-mr', 52735],['ru-tt', 384335],['ru-ud', 141884],['ru-cv', 119816],['ru-pe', 221706],['ru-kv', 90920],['ru-nz', 223269],['ru-ob', 149694],['ru-pz', 93626],['ru-sa', 220877],['ru-sr', 146439],['ru-ul', 85865],['ru-ku', 52338],['ru-sv', 417563],['ru-ty', 619797],['ru-cl', 235855],['ru-ga', 7076],['ru-tu', 20494],['ru-kk', 35175],['ru-al', 150414],['ru-ky', 281494],['ru-ir', 185750],['ru-ke', 171145],['ru-ns', 321673],['ru-om', 135076],['ru-to', 79926],['ru-mg', 61234],['ru-ck', 164355],['ru-ct', 70634],['ru-ka', 35010],['ru-pr', 184619],['ru-kh', 140450],['ru-am', 71615],['ru-mg', 22449],['ru-sl', 67453],['ru-yv', 8795],['ru-2485', 7696]
    ],
    [
        ['ru-bl', 93493],['ru-br', 76582],['ru-vl', 92047],['ru-vr', 171146],['ru-iv', 52666],['ru-kg', 107617],['ru-kt', 39818],['ru-ks', 68362],['ru-lp', 72537],['ru-2509', 1267214],['ru-ol', 54046],['ru-rz', 98218],['ru-sm', 66094],['ru-tb', 59805],['ru-tv', 103896],['ru-tl', 117890],['ru-ys', 81435],['ru-ms', 2160470],['ru-ki', 55809],['ru-ko', 90122],['ru-ar', 120219],['ru-vo', 89388],['ru-kn', 91653],['ru-ln', 243731],['ru-mm', 75041],['ru-ng', 40419],['ru-ps', 38491],['ru-sp', 1003231],['ru-ad', 22155],['ru-kl', 27221],['ru-kr', 47917],['ru-kd', 441794],['ru-as', 63512],['ru-vg', 149238],['ru-ro', 304493],['ru-sc', 17080],['ru-da', 58387],['ru-in', 2983],['ru-kb', 30153],['ru-kc', 19288],['ru-no', 32949],['ru-cn', 14995],['ru-st', 158309],['ru-bk', 383907],['ru-me', 45152],['ru-mr', 55366],['ru-tt', 408541],['ru-ud', 150514],['ru-cv', 124686],['ru-pe', 233292],['ru-kv', 91298],['ru-nz', 232761],['ru-ob', 155837],['ru-pz', 100118],['ru-sa', 227318],['ru-sr', 151825],['ru-ul', 89697],['ru-ku', 54898],['ru-sv', 429579],['ru-ty', 644050],['ru-cl', 245964],['ru-ga', 7440],['ru-tu', 22175],['ru-kk', 36449],['ru-al', 154025],['ru-ky', 292083],['ru-ir', 190352],['ru-ke', 176253],['ru-ns', 338454],['ru-om', 138451],['ru-to', 82871],['ru-mg', 64907],['ru-ck', 170791],['ru-ct', 75573],['ru-ka', 37147],['ru-pr', 198589],['ru-kh', 148355],['ru-am', 76096],['ru-mg', 23583],['ru-sl', 70691],['ru-yv', 9132],['ru-2485', 7954]
    ]

];

const monthes = [
  "Январь",
  "Апрель",
  "Июль",
  "Сентябрь",
  "Декабрь",
];

export const OutdatedMortMap = () => {
  const [currentMIdx, setCMI] = useState(0);

  return (
    <>
      <RusMap
        mapTitle={"Просроченные ипотечные кредиты в 2021 г."}
        minVal={9000}
        maxVal={200393}
        data={datas[currentMIdx]}
      />
      <input
          value={currentMIdx}
        min={0}
        max={4}
        onChange={(e) => setCMI(+e.target.value)}
        type={"range"}
      />{" "}
      {monthes[currentMIdx]} 2021
      <br />
      <br />
      <br />
    </>
  );
};
