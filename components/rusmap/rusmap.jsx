import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import mapData from "./helpers/mapData";


if (typeof Highcharts === 'object') {
    require('highcharts/modules/map')(Highcharts);
}

const options = {
    chart: {
        map: 'countries/ru/custom/ru-all-disputed',
        animation: false,
        backgroundColor: null,
    },

    title: {
        text: ''
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/ru/custom/ru-all-disputed.js">Russia with disputed territories</a>'
    },

    mapNavigation: {
        enabled: false,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: [],
        name: 'data',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
}



export const RusMap = ({ mapTitle,  data, minVal, maxVal, stopColors }) => {


    const mapOptions = {
        backgroundColor: 'transparent',
        title: {
            text: mapTitle || ''
        },
        colorAxis: {
            min: minVal || undefined,
            max: maxVal || undefined,
            // stops: stopColors || [[0.4, '#f88f8f'], [0.65, '#fd4d4d'], [1, '#ff0000']]
            stops: stopColors || undefined
        },

        series: [
            {
                mapData: mapData,
                name: 'Russia',
                data
            }
        ]
    };

    return <>
        <HighchartsReact
            isAnimationActive={false}
            highcharts={Highcharts}
            constructorType={'mapChart'}
            options={mapOptions}
        />
    </>
}