import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../pages/Home.vue"),
        },
        {
            path: "/projects",
            name: "projects",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../pages/Projects.vue"),
        },
        {
            path: "/wallet",
            name: "wallet",
            component: () => import("../pages/Wallet.vue")
        }
    ],
});

export default router;
