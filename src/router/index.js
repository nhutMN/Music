import { createRouter,createWebHistory } from "vue-router";

import Discover from "@/components/Discover.vue";
import remix from '@/components/remix.vue';
import nhactre from '@/components/nhactre.vue';
import Accoustic from '@/components/Accoustic.vue';
import SignIn from "@/components/SignIn.vue";
import Register from "@/components/Register.vue";
import Playlist from "@/components/Playlist.vue"

const routes = [
    {
        path: '/',
        name: 'Discover-route',
        component: Discover
    },
    {
        path: '/SignIn',
        name: 'SignIn-route', 
        component: SignIn
    },
    {
        path: '/Register',
        name: 'Register-route', 
        component: Register
    },
    {
        path: '/Playlist',
        name: 'Playlist-route',
        component: Playlist
    },
    {
        path: '/remix',
        name: 'remix-route',
        component: remix
    },
    {
        path: '/nhactre',
        name: 'nhactre-route',
        component: nhactre
    },
    {
        path: '/Accoustic',
        name: 'Accoustic-route',
        component: Accoustic
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})



export default router

