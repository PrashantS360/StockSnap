<script setup>
import { RouterView } from "vue-router"
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <Navbar />
    <div class="max-w-[1100px] px-4 m-auto py-4">
      <RouterView />
    </div>
    <Footer/>
  </div>
</template>