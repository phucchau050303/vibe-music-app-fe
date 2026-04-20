import { createRouter, createWebHistory } from "vue-router";
import PlaylistDisplay from "../components/PlaylistDisplay.vue";
import PromtWindow from "../components/PromtWindow.vue";

const routes = [
    {
        path: '/',
        name: 'Promt Window',
        component: PromtWindow
    },
    {
        path: '/results',
        name: 'Results',
        component: PlaylistDisplay
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;