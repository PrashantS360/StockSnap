<script setup>
import { ref, watch } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


const route = useRoute();
const symbol = ref(route.params.symbol);

const stock = ref(
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
    }
);

const stocks = ref([]);
const chartData = ref({
    labels: ['1D', '1Y', 'Average'],
    datasets: [
        {
            label: 'High',
            backgroundColor: '#02c712',
            data: [3, 4, 2]
        },
        {
            label: 'Low',
            backgroundColor: '#d90209',
            data: [1, 3, 1]
        },
    ]
});

const chartOptions = {
    responsive: true
};

const getStock = async (sym) => {
    const API = `${import.meta.env.VITE_STOCK_HOST}/${sym}?apikey=${import.meta.env.VITE_API_KEY}`;
    fetch(API).then(res => res.json()).then((data) => {
        stock.value = data[0];
    })
}

const getAllStocks = async () => {
    const ALL_STOCKS_API = `${import.meta.env.VITE_STOCK_HOST}/AAPL,FB,MSFT,MMM,AMZN,FORD,IRTC,CAR,GOOGL,GOGL,APAC,1805.T?apikey=${import.meta.env.VITE_API_KEY}`;
    fetch(ALL_STOCKS_API).then(res => res.json()).then((data) => {
        stocks.value = data.slice(0,10);;
    })
}

const router = useRouter();
const redirect = (sym) => {
    router.push(`/stock/${sym}`);
    symbol.value = sym;
    showChart.value = false;
    getStock(sym); 
}

const showChart = ref(false);
watch(stock, () => {
    chartData.value.datasets[0].data = [stock.value.dayHigh, stock.value.yearHigh, Math.max(stock.value.priceAvg200, stock.value.priceAvg50)]
    chartData.value.datasets[1].data = [stock.value.dayLow, stock.value.yearLow, Math.min(stock.value.priceAvg200, stock.value.priceAvg50)]
    showChart.value = true;
})

getStock(symbol.value);
getAllStocks();


</script>

<template>
    <div class="flex">
        <div class="mt-8 md:w-2/3 w-full">
            <h2 class="text-3xl px-1">{{ stock.name }} <span class="text-base text-gray-700 px-1">({{ stock.symbol }})</span>
        </h2>
        <h1 class="text-4xl font-bold px-1">
            ₹ {{ stock.price }} <span :class="`${stock.change < 0 ? 'text-red-500' : 'text-green-500'}`"
            class="text-lg font-normal">{{ stock.change }} ({{
                Math.abs(stock.changesPercentage) }}%)</span> <span class="text-gray-600 font-normal text-base">1D</span>
        </h1>
        <Bar v-if="showChart" class="mt-3" :data="chartData" :options="chartOptions"></Bar>
        
        <div class="shadow-md rounded-md px-3">
            <h3 class="text-3xl mt-10 px-1">Performance</h3>
            <div class="flex flex-wrap justify-evenly">
            <div class="my-2 px-2 py-1 w-1/4">
                <label for="open" class="text-gray-600">Open</label>
                <p class="font-bold text-lg">{{ stock.open }}</p>
            </div>
            <div class="my-2 px-2 py-1 w-1/4">
                <label for="previousClose" class="text-gray-600">Prev. Close</label>
                <p class="font-bold text-lg">{{ stock.previousClose }}</p>
            </div>
            <div class="my-2 px-2 py-1 w-1/4">
                <label for="volume " class="text-gray-600">Volume</label>
                <p class="font-bold text-lg">{{ stock.volume }}</p>
            </div>
            <div class="my-2 px-2 py-1 w-1/4">
                <label for="avgVolume" class="text-gray-600">Avg. Volume</label>
                <p class="font-bold text-lg">{{ stock.avgVolume }}</p>
            </div>
            <div class="my-2 px-2 py-1 w-1/4">
                <label for="marketCap" class="text-gray-600">Market Cap</label>
                <p class="font-bold text-lg">{{ stock.marketCap }}</p>
            </div>
            <div class="mx-4 my-2 px-2 py-1 w-1/4">
                <label for="exchange" class="text-gray-600">Exchange</label>
                <p class="font-bold text-lg">{{ stock.exchange }}</p>
            </div>
        </div>
    </div>
    </div>
    <div v-if="stocks.length>0" class="mt-8 w-1/3 md:block hidden shadow-md pt-5 ml-4 -pb-3 h-fit">
        <h3 class="text-2xl font-[580] pb-4 pl-4">You might be interested in </h3>
        <div>
            <div v-for="st in stocks" class="px-5 flex justify-between py-3 items-center border-b-2" v-show="st.symbol!=symbol">
                <p>{{ st.name }}</p>
                <button class="mx-2 px-2 py-1 text-blue-700 underline" @click="redirect(st.symbol)">View</button>
            </div>
        </div>
    </div>
    </div>
</template>