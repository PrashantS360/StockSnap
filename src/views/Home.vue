<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const data =
    [
        {
            "symbol": "AAPL",
            "name": "Apple Inc.",
            "price": 175.43,
            "changesPercentage": 1.4105,
            "change": 2.44,
            "dayLow": 173.11,
            "dayHigh": 175.77,
            "yearHigh": 176.39,
            "yearLow": 124.17,
            "marketCap": 2759285913979,
            "priceAvg50": 166.2418,
            "priceAvg200": 152.2899,
            "exchange": "NASDAQ",
            "volume": 52056501,
            "avgVolume": 57939876,
            "open": 175.37,
            "previousClose": 172.99,
            "eps": 5.9,
            "pe": 29.73,
            "earningsAnnouncement": "2023-07-26T20:00:00.000+0000",
            "sharesOutstanding": 15728700416,
            "timestamp": 1685131205
        },
        {
            "symbol": "MSFT",
            "name": "Microsoft Corporation",
            "price": 332.89,
            "changesPercentage": 2.1386,
            "change": 6.97,
            "dayLow": 323.92,
            "dayHigh": 333.3999,
            "yearHigh": 333.3999,
            "yearLow": 213.43,
            "marketCap": 2475200196859,
            "priceAvg50": 294.951,
            "priceAvg200": 260.17685,
            "exchange": "NASDAQ",
            "volume": 35719560,
            "avgVolume": 29070890,
            "open": 332.86,
            "previousClose": 325.92,
            "eps": 9.23,
            "pe": 36.07,
            "earningsAnnouncement": "2023-07-24T10:59:00.000+0000",
            "sharesOutstanding": 7435489792,
            "timestamp": 1685131204
        },
        {
            "symbol": "MMM",
            "name": "3M Company",
            "price": 96.94,
            "changesPercentage": -0.1133,
            "change": -0.11,
            "dayLow": 96.365,
            "dayHigh": 97.44,
            "yearHigh": 152.3,
            "yearLow": 95.35,
            "marketCap": 53479083680,
            "priceAvg50": 102.7216,
            "priceAvg200": 116.5152,
            "exchange": "NYSE",
            "volume": 2306948,
            "avgVolume": 3415855,
            "open": 96.84,
            "previousClose": 97.05,
            "eps": 9.68,
            "pe": 10.01,
            "earningsAnnouncement": "2023-07-24T13:30:00.000+0000",
            "sharesOutstanding": 551672000,
            "timestamp": 1685131222
        },
        {
            "symbol": "AMZN",
            "name": "Amazon.com, Inc.",
            "price": 120.11,
            "changesPercentage": 4.4435,
            "change": 5.11,
            "dayLow": 116.03,
            "dayHigh": 121.5,
            "yearHigh": 146.57,
            "yearLow": 81.43,
            "marketCap": 1232376659374,
            "priceAvg50": 105.1496,
            "priceAvg200": 105.28055,
            "exchange": "NASDAQ",
            "volume": 92141475,
            "avgVolume": 61328349,
            "open": 120.175,
            "previousClose": 115,
            "eps": 0.42,
            "pe": 285.98,
            "earningsAnnouncement": "2023-07-26T10:59:00.000+0000",
            "sharesOutstanding": 10260400128,
            "timestamp": 1685131204
        },
        {
            "symbol": "FORD",
            "name": "Forward Industries, Inc.",
            "price": 1.0193,
            "changesPercentage": 1.93,
            "change": 0.0193,
            "dayLow": 1.0193,
            "dayHigh": 1.06,
            "yearHigh": 1.87,
            "yearLow": 0.95,
            "marketCap": 10255381,
            "priceAvg50": 1.0488,
            "priceAvg200": 1.2332,
            "exchange": "NASDAQ",
            "volume": 45433,
            "avgVolume": 20715,
            "open": 1.025,
            "previousClose": 1,
            "eps": -0.25,
            "pe": -4.08,
            "earningsAnnouncement": "2023-08-08T10:59:00.000+0000",
            "sharesOutstanding": 10061200,
            "timestamp": 1685130719
        },
        {
            "symbol": "IRTC",
            "name": "iRhythm Technologies, Inc.",
            "price": 119.3,
            "changesPercentage": -1.356,
            "change": -1.64,
            "dayLow": 118.708,
            "dayHigh": 124.8,
            "yearHigh": 164.69,
            "yearLow": 85.74,
            "marketCap": 3635166440,
            "priceAvg50": 127.4713,
            "priceAvg200": 119.65883,
            "exchange": "NASDAQ",
            "volume": 177351,
            "avgVolume": 321703,
            "open": 118.97,
            "previousClose": 120.94,
            "eps": -3.3,
            "pe": -36.15,
            "earningsAnnouncement": "2023-08-02T10:59:00.000+0000",
            "sharesOutstanding": 30470800,
            "timestamp": 1685131204
        },
        {
            "symbol": "CAR",
            "name": "Avis Budget Group, Inc.",
            "price": 162.98,
            "changesPercentage": -1.4989,
            "change": -2.48,
            "dayLow": 159.84,
            "dayHigh": 165.87,
            "yearHigh": 251.26,
            "yearLow": 131.83,
            "marketCap": 6480198886,
            "priceAvg50": 174.3988,
            "priceAvg200": 188.7277,
            "exchange": "NASDAQ",
            "volume": 336975,
            "avgVolume": 458390,
            "open": 162.96,
            "previousClose": 165.46,
            "eps": 55.5,
            "pe": 2.94,
            "earningsAnnouncement": "2023-07-31T10:59:00.000+0000",
            "sharesOutstanding": 39760700,
            "timestamp": 1685131204
        },
        {
            "symbol": "GOOGL",
            "name": "Alphabet Inc.",
            "price": 124.61,
            "changesPercentage": 0.9151,
            "change": 1.13,
            "dayLow": 122.46,
            "dayHigh": 125.26,
            "yearHigh": 126.43,
            "yearLow": 83.34,
            "marketCap": 1586970689019,
            "priceAvg50": 108.4816,
            "priceAvg200": 100.7679,
            "exchange": "NASDAQ",
            "volume": 33992870,
            "avgVolume": 35463096,
            "open": 124.735,
            "previousClose": 123.48,
            "eps": 4.59,
            "pe": 27.15,
            "earningsAnnouncement": "2023-07-24T20:00:00.000+0000",
            "sharesOutstanding": 12735500273,
            "timestamp": 1685131204
        },
        {
            "symbol": "GOGL",
            "name": "Golden Ocean Group Limited",
            "price": 7.46,
            "changesPercentage": -0.1339,
            "change": -0.01,
            "dayLow": 7.39,
            "dayHigh": 7.505,
            "yearHigh": 16.46,
            "yearLow": 7.24,
            "marketCap": 1495163040,
            "priceAvg50": 8.939,
            "priceAvg200": 9.1023,
            "exchange": "NASDAQ",
            "volume": 1438784,
            "avgVolume": 1557558,
            "open": 7.425,
            "previousClose": 7.47,
            "eps": 1.63,
            "pe": 4.58,
            "earningsAnnouncement": "2023-08-23T06:30:00.000+0000",
            "sharesOutstanding": 200424000,
            "timestamp": 1685131205
        },
        {
            "symbol": "APAC",
            "name": "StoneBridge Acquisition Corporation",
            "price": 11.31,
            "changesPercentage": 4.7222,
            "change": 0.51,
            "dayLow": 10.73,
            "dayHigh": 11.31,
            "yearHigh": 11.31,
            "yearLow": 9.89,
            "marketCap": 90609149,
            "priceAvg50": 10.59222,
            "priceAvg200": 10.31472,
            "exchange": "NASDAQ",
            "volume": 901,
            "avgVolume": 6933,
            "open": 10.76,
            "previousClose": 10.8,
            "eps": 0.43,
            "pe": 26.3,
            "earningsAnnouncement": "2023-03-31T00:00:00.000+0000",
            "sharesOutstanding": 8011419,
            "timestamp": 1685130159
        },
        {
            "symbol": "1805.T",
            "name": "Tobishima Corporation",
            "price": 1206,
            "changesPercentage": 1.005,
            "change": 12,
            "dayLow": 1198,
            "dayHigh": 1212,
            "yearHigh": 1230,
            "yearLow": 993,
            "marketCap": 23070056400,
            "priceAvg50": 1111.96,
            "priceAvg200": 1063.26,
            "exchange": "JPX",
            "volume": 58700,
            "avgVolume": 89669,
            "open": 1212,
            "previousClose": 1194,
            "eps": 156.18,
            "pe": 7.72,
            "earningsAnnouncement": "2023-08-08T04:00:00.000+0000",
            "sharesOutstanding": 19129400,
            "timestamp": 1685339949
        }
    ];
const stocks = ref();

const sortBy = ref("gain");
const API = `${import.meta.env.VITE_STOCK_HOST}/AAPL,FB,MSFT,MMM,AMZN,FORD,IRTC,CAR,GOOGL,GOGL,APAC,1805.T?apikey=${import.meta.env.VITE_API_KEY}`;

const getStocks = async () => {
    fetch(API).then(res => res.json()).then((data) => {
        data.sort((a, b) => (a.changesPercentage < b.changesPercentage) ? 1 : (a.changesPercentage > b.changesPercentage) ? -1 : 0);
        stocks.value = data;
    })
}

const router = useRouter();
const redirect = (symbol) => {
    router.push(`/stock/${symbol}`);
}

getStocks();

const orderBy = () => {
    let copy = stocks.value;
    let s = sortBy.value;
    if (s == "gain") {
        sortBy.value = "gain";
        copy.sort((a, b) => (a.changesPercentage < b.changesPercentage) ? 1 : (a.changesPercentage > b.changesPercentage) ? -1 : 0);
    }
    else if (s == "loss") {
        sortBy.value = "loss";
        copy.sort((a, b) => (a.changesPercentage > b.changesPercentage) ? 1 : (a.changesPercentage < b.changesPercentage) ? -1 : 0);
    }
    else if (s == "volume") {
        sortBy.value = "volume";
        copy.sort((a, b) => (a.volume < b.volume) ? 1 : (a.volume > b.volume) ? -1 : 0);
    }
    else if (s == "yearHigh") {
        sortBy.value = "yearHigh";
        copy.sort((a, b) => (a.yearHigh < b.yearHigh) ? 1 : (a.yearHigh > b.yearHigh) ? -1 : 0);
    }
    else if (s == "yearLow") {
        sortBy.value = "yearLow";
        copy.sort((a, b) => (a.yearLow > b.yearLow) ? 1 : (a.yearLow < b.yearLow) ? -1 : 0);
    }

    stocks.value = copy;
}

</script>

<template>
    <div class="mt-4">
        <div class="my-4">
            <label for="underline_select" class="font-bold text-3xl mb-2">{{ sortBy == "gain" ? "Top Gainers" : sortBy ==
                "loss" ? "Top Losers" : sortBy ==
                    "volume" ? "Top Volume" :
                sortBy == "yearHigh" ? "52 Week High" : "52 Week Low" }}</label>
            <select id="underline_select"
                class="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 mt-3 min-w-[33%]" 
                v-model="sortBy" @change="orderBy">
                <option value="gain" selected>Top Gainers</option>
                <option value="loss">Top Losers</option>
                <option value="volume">Top By Volume</option>
                <option value="yearHigh">52W High</option>
                <option value="yearLow">52W Low</option>
            </select>
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-left ">
                <thead class="text-gray-400 uppercase text-sm">
                    <tr class="border-[1px] ">
                        <th scope="col" class="px-6 py-3">
                            company
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Volume
                        </th>
                        <th scope="col" class="px-6 py-3">
                            market price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            52W low
                        </th>
                        <th scope="col" class="px-6 py-3">
                            52W high
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Exchange
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="stock in stocks" :key="stock.symbol"
                        class="bg-white border-[1px] hover:bg-gray-100 cursor-pointer " @click="redirect(stock.symbol)">
                        <th scope="row" class="px-6 py-4 font-normal text-gray-900 whitespace-nowrap text-lg">
                            {{ stock.name }}
                        </th>
                        <td class="px-6 py-4 text-gray-600">
                            {{ stock.volume }}
                        </td>
                        <td class="px-6 py-4">
                            <div class="font-[600]">
                                &#8377; {{ stock.price }}
                            </div>
                            <div v-if="stock.changesPercentage < 0" class="text-red-500">
                                {{ stock.change }}({{ stock.changesPercentage * -1 }}%)
                            </div>
                            <div v-else class="text-green-500">
                                {{ stock.change }}({{ stock.changesPercentage }}%)
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-600">
                            &#8377; {{ stock.yearLow }}
                        </td>
                        <td class="px-6 py-4 text-gray-600">
                            &#8377; {{ stock.yearHigh }}
                        </td>
                        <td class="px-6 py-4 ">
                            <button class="text-blue-500 border-2 border-blue-500 rounded-md px-2 py-1">
                                {{ stock.exchange }}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>