<template>
    <div class="w-full h-[100vh] bg-[#1C1625]">
        <div class="py-5">
            <div>
                <div class="py-4 px-10 flex items-center cursor-pointer group w-full ">
                    <iconMusic class="w-5 h-5 mr-3 fill-[#dbdbdb] group-hover:fill-white" />
                    <p class="text-[#dbdbdb] group-hover:text-white text-base font-semibold">
                        Thư viện
                    </p>
                </div>
            </div>
        </div>

        <div v-if="authStore.user.uid">
            <router-link :to="{ name: 'Playlist-route' }">
                <div class="px-10 flex items-center cursor-pointer group w-full hover:bg-violet-950 ">
                    <div class="flex items-center w-full  py-2 relative group rounded-2xl">
                        <div class="w-[20%] pr-3">
                            <img :src="nhacgd01" alt="" class="w-36 rounded-2xl" />
                        </div>
                        <div class="w-[80%] pr-5">
                            <h3
                                class="text-white text-lg hover:text-[#c273ed] cursor-pointer truncate group-hover:truncate group-hover:w-[70%] font-semibold">
                                Playlist 1</h3>
                        </div>
                    </div>
                </div>
            </router-link>



        </div>
        <router-link to="/SignIn" v-else>
            <div class="px-10 flex items-center cursor-pointer group w-full text-white py-2 bg-amber-600 rounded-3xl"> Bạn cần đăng nhập</div>
        </router-link>

    </div>
</template>

<script setup>
import { useAuthStore } from '../store/AuthStore';

import { computed, ref } from "vue";
import nhacgd01 from "@/assets/image/nhac-nghe-gan-day/nhacgd01.jpg";
import iconMusic from "./icon/iconMusic.vue";

components: {
    iconMusic
}
name: 'lybary';

const props = defineProps(['isLoggedIn'])

console.log(props.isLoggedIn)

const authStore = useAuthStore();

const onLogout = () => {
  authStore.logoutUser();
};

const isauthenticated = ref(true);
</script>

<style></style>