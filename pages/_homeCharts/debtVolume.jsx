import React from "react";
import { CommonChart } from "components/commonChart/CommonChart";
// import {CommonChart} from "../commonChart/CommonChart";


//TODO doublecheck this data
const categories = ["01.01.2006","01.04.2006","01.07.2006","01.10.2006","01.01.2007","01.04.2007","01.07.2007","01.10.2007","01.01.2008","01.04.2008","01.07.2008","01.10.2008","01.01.2009","01.02.2009","01.03.2009","01.04.2009","01.05.2009","01.06.2009","01.07.2009","01.08.2009","01.09.2009","01.10.2009","01.11.2009","01.12.2009","01.01.2010","01.02.2010","01.03.2010","01.04.2010","01.05.2010","01.06.2010","01.07.2010","01.08.2010","01.09.2010","01.10.2010","01.11.2010","01.12.2010","01.01.2011","01.02.2011","01.03.2011","01.04.2011","01.05.2011","01.06.2011","01.07.2011","01.08.2011","01.09.2011","01.10.2011","01.11.2011","01.12.2011","01.01.2012","01.02.2012","01.03.2012","01.04.2012","01.05.2012","01.06.2012","01.07.2012","01.08.2012","01.09.2012","01.10.2012","01.11.2012","01.12.2012","01.01.2013","01.02.2013","01.03.2013","01.04.2013","01.05.2013","01.06.2013","01.07.2013","01.08.2013","01.09.2013","01.10.2013","01.11.2013","01.12.2013","01.01.2014","01.02.2014","01.03.2014","01.04.2014","01.05.2014","01.06.2014","01.07.2014","01.08.2014","01.09.2014","01.10.2014","01.11.2014","01.12.2014","01.01.2015","01.02.2015","01.03.2015","01.04.2015","01.05.2015","01.06.2015","01.07.2015","01.08.2015","01.09.2015","01.10.2015","01.11.2015","01.12.2015","01.01.2016","01.02.2016","01.03.2016","01.04.2016","01.05.2016","01.06.2016","01.07.2016","01.08.2016","01.09.2016","01.10.2016","01.11.2016","01.12.2016","01.01.2017","01.02.2017","01.03.2017","01.04.2017","01.05.2017","01.06.2017","01.07.2017","01.08.2017","01.09.2017","01.10.2017","01.11.2017","01.12.2017","01.01.2018","01.01.2019","01.02.2019","01.03.2019","01.04.2019","01.05.2019","01.06.2019","01.07.2019","01.08.2019","01.09.2019","01.10.2019","01.11.2019","01.12.2019","01.01.2020","01.02.2020","01.03.2020","01.04.2020","01.05.2020","01.06.2020","01.07.2020","01.08.2020","01.09.2020","01.10.2020","01.11.2020","01.12.2020","01.01.2021","01.02.2021","01.03.2021","01.04.2021","01.05.2021","01.06.2021","01.07.2021","01.08.2021","01.09.2021","01.10.2021","01.11.2021","01.12.2021","01.01.2022"];
const data = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 489032, 24468, 14487, 24745, 36580, 47401, 60763, 75793, 90852, 107784, 128280, 148135, 177950, 11677, 27299, 52467, 81089, 108537, 142265, 177053, 212115, 250801, 289148, 331554, 395422, 23460, 51885, 91840, 136681, 183642, 233778, 283744, 337352, 393405, 451824, 511983, 590437, 33494, 78872, 136620, 198773, 258528, 319083, 382240, 451802, 514325, 586304, 658150, 740975, 37566, 89266, 151011, 223978, 286842, 357108, 437902, 518218, 595286, 684873, 769354, 880326, 52354, 123837, 208529, 307278, 389334, 471629, 565990, 652859, 739814, 836718, 924646, 1059396, 45731, 94875, 138940, 189593, 234552, 288019, 347503, 406471, 473567, 540074, 608290, 710571, 53206, 174175, 269535, 364720, 446269, 536099, 623113, 721430, 823104, 921536, 1028600, 1169439, 54483, 129258, 234440, 341109, 443810, 553530, 662571, 785054, 913832, 1058450, 1214170, 189874, 192834, 103899, 134364, 131575, 139152, 111178, 124906, 127024, 137890, 140082, 155067, 154124, 192489, 105782, 144582, 165684, 117246, 122533, 167670, 203865, 215028, 254402, 270481, 235372, 261638, 120866, 181536, 220606, 237610, 185283, 231616, 179651, 183364, 194993, 200990, 200925, 247054],
    // [113978,35801,113208,213749,347068,100391,241773,424101,650192,174095,392655,614513,756786,8392,18109,29806,43679,54681,68376,82345,96159,111481,130406,149968,182192,9852,29157,58112,89639,119813,155117,193100,230234,272472,316623,364425,437440,23298,63110,116055,173351,232130,299364,363779,434270,508602,582887,662506,769601,40599,108361,189773,278907,363051,449213,540282,638518,729135,835528,943782,1072482,54106,137684,234728,351506,449014,560160,686159,813392,939562,1082491,1220198,1404533,81804,204727,346384,513021,651548,793895,956308,1107185,1261162,1431605,1586806,1821318,73335,154248,223451,306500,381426,470580,568759,665906,776731,889043,1002744,1175016,90264,308423,470270,634044,774324,929741,1081404,1253058,1430397,1605220,1796793,2053874,99353,236559,434432,635474,830228,1039739,1245105,1477445,1726243,2008995,2313787,375436,427782,230453,304862,300564,318667,257491,290712,292865,317446,327740,369564,117751,474642,267994,372784,430278,272765,294955,413340,528580,571849,681491,734188,646735,728294,350903,538434,164616,728903,578243,759883,152603,171033,628307,661677,691905,872996],
    // [ 14,  13.3,  13,  12.95,  12.85,  12.6,  12.3,  12,  11.9,  11.7,  11.75,  11.9,  12,  14.21,  14.22,  14.25,  14.36,  14.34,  14.34,  14.3,  14.25,  14.15,  14.11,  14.09,  13.79,  13.065,  12.695,  12.465,  12.37,  12.385,  12.43,  12.455,  12.455,  12.445,  12.375,  12.35,  12.26,  11.875,  11.805,  11.77,  11.35,  11.21,  11.115,  11.06,  10.995,  10.91,  10.86,  10.875,  10.87,  10.805,  10.725,  10.91,  10.835,  10.875,  10.95,  10.95,  10.975,  10.995,  11.02,  11.035,  11.115,  10.91,  11.345,  11.295,  11.425,  11.45,  11.32,  11.265,  11.16,  11.16,  11.1,  11.1,  11.085,  11.055,  10.865,  10.785,  10.89,  10.925,  10.89,  10.88,  10.835,  10.86,  10.87,  10.845,  10.895,  12.29,  13.135,  13.37,  13.21,  12.765,  12.38,  12.145,  12.04,  11.98,  11.855,  11.785,  11.725,  11.83,  10.4325,  11.365,  11.4463,  11.485,  11.5575,  11.5925,  11.5925,  11.6013,  11.595,  11.5825,  11.5575,  9.4325,  9.5175,  10.3425,  10.245,  10.16,  10.0825,  10.0975,  9.915,  9.8625,  9.8025,  9.71, 19.56, 19.06, 19.53, 30.1, 28.09, 29.81, 32.58, 30.12, 19.91, 19.25, 28.79, 27.29, 22.79, 27.33, 16.84, 25.54, 25.52, 15.37, 13.35, 13.74, 20.95, 13.14, 18.26, 18.21, 13.3, 13.19, 13.09, 13.18, 13.14, 18.13, 23.92, 20.31, 13.9, 14.17, 18.77, 16.7, 19.42, 18.69],
    [125723, 142143, 192496, 261935, 350174, 411654, 503052, 622988, 757530, 859648, 993884, 1149831, 1270186, 1298810, 1287141, 1250170, 1233777, 1210117, 1199641, 1199233, 1193048, 1178402, 1168642, 1172138, 1180761, 1174657, 1171196, 1171203, 1177118, 1190010, 1198473, 1205741, 1219581, 1233595, 1250611, 1270954, 1295440, 1289910, 1295453, 1310762, 1329977, 1360084, 1396240, 1423171, 1464163, 1507538, 1527221, 1573721, 1624845, 1620057, 1641988, 1680594, 1725474, 1777568, 1821023, 1855735, 1910076, 1950333, 2011052, 2066482, 2122986, 2126998, 2169349, 2209426, 2273209, 2325705, 2386376, 2453545, 2511165, 2512803, 2596813, 2676495, 2765478, 2798032, 2860870, 2924691, 3021580, 3091982, 3153162, 3251110, 3321464, 3400735, 3481333, 3575749, 3657903, 3691092, 3695488, 3686965, 3688923, 3711298, 3732135, 3768737, 3823218, 3865597, 3908484, 3957605, 4048291, 4850260, 4958167, 4989289, 5020567, 5051700, 5079511, 5104578, 5162200, 5221331, 5283780, 5361814, 5462031, 5439012, 5457752, 5518027, 5596761, 5606845, 5680090, 5753767, 5848968, 5964291, 6040266, 6182928, 6307982, 7776214, 8041051, 8139231, 8252946, 8375588, 8366660, 8437313, 8550742, 8674994, 8806760, 8835284, 9022392, 9160677, 9224860, 9376991, 9526680, 9570819, 9587173, 9831201, 9869904, 10399389, 10761966, 11140718, 11233250, 11437173, 11547248, 11780479, 12062738, 12414865, 12681972, 13070094, 13606284, 13508462, 13789832, 14060110, 14168386, 14584378]
]



const DebtVolNum = ({ data }) => {

    if (!data) {
        return <></>
    }

    const categories = Object.keys(data?.Data);
    const dataVals = [];
    categories.forEach(category => dataVals.push(data?.Data[category][0]));

    return (
                <CommonChart label={data?.Header}
                             categories={categories}
                             data={dataVals}
                />
    )
};


export default DebtVolNum;