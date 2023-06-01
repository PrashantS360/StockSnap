// DEFINE OUR ROUTING RULES //

import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/404.vue'
import Stock from '../views/Stock.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: "home",
            path: "/",
            component: Home
        },
        {
            path: "/home",
            redirect:"/"
        },
        {
            name: "about",
            path: "/about",
            component: About
        },
        {
            name: "contact",
            path: "/contact",
            component: Contact
        },
        {
            name: "stock",
            path: "/stock/:symbol",
            component: Stock,
            // children: [
            //     {
            //         name: "Car Contact",
            //         path: "contact",
            //         component: Contact
            //     }
            // ]
        },
        {
            path:"/:catchall(.*)*",
            name:"Not Found",
            component:NotFound
        }
    ]
})

export default router;