<script setup>
import { RouterLink,useRouter,useRoute } from 'vue-router';
import { ref, watch } from 'vue';

const searchItems = ref([]);
const search = ref("");

const ALL_STOCKS_API = `${import.meta.env.VITE_STOCK_HOST}/AAPL,FB,MSFT,MMM,AMZN,FORD,IRTC,CAR,GOOGL,GOGL,APAC,1805.T?apikey=${import.meta.env.VITE_API_KEY}`;
watch(search, () => {
    if (search.value.length) {
        fetch(ALL_STOCKS_API).then(res => res.json()).then((data) => {
            searchItems.value = data.filter(d => d.name.toLowerCase().includes(search.value.toLowerCase())).slice(0,5);
        })
    }
    else {
        searchItems.value = [];
    }

    console.log(searchItems.value);
})

const router = useRouter();
const redirect = (sym) => {
    search.value = "";
    searchItems.value = [];
    router.push(`/stock/${sym}`);
}

const route = useRoute();

</script>

<template>
    <nav class="max-w-[1500px] m-auto shadow-lg sticky top-0 z-50 bg-white">
        <div class="flex flex-col md:flex-row space-y-3 md:space-y-0 justify-between px-12 py-1 items-center">
            <div class="space-x-5 flex flex-col sm:flex-row w-2/3 items-center">
                <RouterLink class="text-4xl -mt-1" to="/">
                    <img src="/logo.png" alt="logo" class="w-40"/>
                </RouterLink>
                <RouterLink class="text-xl my-1" active-class="active" to="/about">About</RouterLink>
                <RouterLink class="text-xl my-1" active-class="active" to="/contact">Contact</RouterLink>
            </div>
            <div v-if="route.path.substring(0,7)!='/stock/'" class="md:w-1/3 w-full px-4 flex items-center -space-x-8">
            <input v-model.trim="search" class="w-full px-4 py-2 pr-9 bg-gray-50 shadow-md rounded-full outline-none"
                type="text" name="search" id="search" placeholder="What are you looking for today?">
                <v-icon name="fa-search-dollar" class="text-gray-500 cursor-pointer" />
            </div>
        </div>
        <div v-if="searchItems.length > 0"
            class="md:max-w-[600px] md:w-[30%] bg-gray-50 z-30 -mt-4 mr-24 float-right border-2 ml-4 -pb-3 absolute right-4 2xl:right-[15%] md:top-20 top-32 rounded-md">
            <div v-for="stock in searchItems" class="px-5 flex justify-between py-3 items-center hover:bg-gray-100">
                <p>{{ stock.name }}</p>
                <button class="mx-2 px-2 py-1 text-blue-700 underline" @click="redirect(stock.symbol)">View</button>
            </div>
        </div>
    </nav>
    </template>

<style>
.active {
    color: blue;
}
</style>