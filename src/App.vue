<script setup>
import { RouterView } from "vue-router"
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <Navbar />
    <div class="w-[1100px] m-auto py-4">
      <RouterView />
    </div>
    <Footer/>
  </div>
</template>