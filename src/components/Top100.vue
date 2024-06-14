<template>
    <div>
        <div class="bg-[#120C1C] h-auto px-[60px] pt-5 w-full">
            <div class="mt-10 ">
                <img :src="imgbanner" alt="" class="rounded-xl mx-auto" />
            </div>
            <!-- Noi bac -->
            <div>
                <!-- Tieu de -->
                <div class="flex justify-between mt-12 items-center">
                    <h3 class="text-2xl font-bold text-white">Nổi bậc</h3>
                </div>

                <!-- Noi dung  -->
                <div class="grid grid-cols-5 gap-5 mt-5">
                    <div v-for="item in thumbnb" :key="item">
                        <div class="group truncate rounded-2xl relative">
                            <div
                                class="hidden group-hover:block z-10 absolute items-center top-[50%] right-[50%] translate-x-1/2 -translate-y-1/2">
                                <div class="flex justify-between cursor-pointer items-center">
                                    <!-- opacity-30	 -->
                                    <div class="mx-4 p-1">
                                        <component :is="iconHeart" class="w-5 h-5 fill-white" />
                                    </div>
                                    <div class="mx-4 p-1">
                                        <component :is="iconPlay" class="w-5 h-5 fill-white  " />
                                    </div>
                                    <div class="mx-4 p-1">
                                        <component :is="iconEllipsis" class="w-5 h-5 fill-white" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <img :src="item.img" alt=""
                                    class="cursor-pointer duration-[900ms] group-hover:scale-125" />
                            </div>
                        </div>
                        <p class="mt-4 text-base font-semibold text-white hover:text-violet-400 cursor-pointer">
                            {{ item.title }}
                        </p>
                    </div>
                </div>
            </div>
            <!-- Nhac VN -->
            <div>
                <!-- Tieu de -->
                <div class="flex justify-between mt-12 items-center">
                    <h3 class="text-2xl font-bold text-white">Nhạc Việt Nam</h3>
                </div>

                <!-- Noi dung  -->
                <div class="grid grid-cols-5 gap-5 mt-5">
                    <div v-for="item in thumbnv" :key="item">
                        <div class="group truncate rounded-2xl relative">
                            <div
                                class="hidden group-hover:block z-10 absolute items-center top-[50%] right-[50%] translate-x-1/2 -translate-y-1/2">
                                <div class="flex justify-between cursor-pointer items-center">
                                    <!-- opacity-30	 -->
                                    <div class="mx-4 p-1">
                                        <component :is="iconHeart" class="w-5 h-5 fill-white" />
                                    </div>
                                    <div class="mx-4 p-1">
                                        <component :is="iconPlay" class="w-5 h-5 fill-white  " />
                                    </div>
                                    <div class="mx-4 p-1">
                                        <component :is="iconEllipsis" class="w-5 h-5 fill-white" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <img :src="item.img" alt=""
                                    class="cursor-pointer duration-[900ms] group-hover:scale-125" />
                            </div>
                        </div>
                        <p class="mt-4 text-base font-semibold text-white hover:text-violet-400 cursor-pointer">
                            {{ item.title }}
                        </p>
                    </div>
                </div>
            </div>
            <!-- Nhac Chau A -->
            <div>
                <!-- Tieu de -->
                <div class="flex justify-between mt-12 items-center">
                    <h3 class="text-2xl font-bold text-white">Nhạc Việt Nam</h3>
                </div>

                <!-- Noi dung  -->
                <div class="grid grid-cols-5 gap-5 mt-5">
                    <div v-for="item in thumbca" :key="item">
                        <div class="group truncate rounded-2xl relative">
                            <div
                                class="hidden group-hover:block z-10 absolute items-center top-[50%] right-[50%] translate-x-1/2 -translate-y-1/2">
                                <div class="flex justify-between cursor-pointer items-center">
                                    <!-- opacity-30	 -->
                                    <div class="mx-4 p-1">
                                        <component :is="iconHeart" class="w-5 h-5 fill-white" />
                                    </div>
                                    <div class="mx-4 p-1">
                                        <component :is="iconPlay" class="w-5 h-5 fill-white  " />
                                    </div>
                                    <div class="mx-4 p-1">
                                        <component :is="iconEllipsis" class="w-5 h-5 fill-white" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <img :src="item.img" alt=""
                                    class="cursor-pointer duration-[900ms] group-hover:scale-125" />
                            </div>
                        </div>
                        <p class="mt-4 text-base font-semibold text-white hover:text-violet-400 cursor-pointer">
                            {{ item.title }}
                        </p>
                    </div>
                </div>
            </div>
            <!-- Nhac Au My -->
            <div>
                <!-- Tieu de -->
                <div class="flex justify-between mt-12 items-center">
                    <h3 class="text-2xl font-bold text-white">Nhạc Âu Mỹ</h3>
                </div>

                <!-- Noi dung  -->
                <div class="grid grid-cols-5 gap-5 mt-5">
                    <div v-for="item in thumbam" :key="item">
                        <div class="group truncate rounded-2xl relative">
                            <div
                                class="hidden group-hover:block z-10 absolute items-center top-[50%] right-[50%] translate-x-1/2 -translate-y-1/2">
                                <div class="flex justify-between cursor-pointer items-center">
                                    <!-- opacity-30	 -->
                                    <div class="mx-4 p-1">
                                        <component :is="iconHeart" class="w-5 h-5 fill-white" />
                                    </div>
                                    <div class="mx-4 p-1">
                                        <component :is="iconPlay" class="w-5 h-5 fill-white  " />
                                    </div>
                                    <div class="mx-4 p-1">
                                        <component :is="iconEllipsis" class="w-5 h-5 fill-white" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <img :src="item.img" alt=""
                                    class="cursor-pointer duration-[900ms] group-hover:scale-125" />
                            </div>
                        </div>
                        <p class="mt-4 text-base font-semibold text-white hover:text-violet-400 cursor-pointer">
                            {{ item.title }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import iconEllipsis from "./icon/iconEllipsis.vue";
import iconPlay from "./icon/iconPlay.vue";
import iconHeart from "./icon/iconHeart.vue";
import banner01 from '@/assets/image/100.png';
import nb001 from '@/assets/image/top100/noibat/nb001.jpg'
import nb002 from '@/assets/image/top100/noibat/nb002.jpg'
import nb003 from '@/assets/image/top100/noibat/nb003.jpg'
import nb004 from '@/assets/image/top100/noibat/nb004.jpg'
import nb005 from '@/assets/image/top100/noibat/nb005.jpg'
import nv001 from '@/assets/image/top100/nhacviet/nv001.jpg'
import nv002 from '@/assets/image/top100/nhacviet/nv002.jpg'
import nv003 from '@/assets/image/top100/nhacviet/nv003.jpg'
import nv004 from '@/assets/image/top100/nhacviet/nv004.jpg'
import nv005 from '@/assets/image/top100/nhacviet/nv005.jpg'
import nv006 from '@/assets/image/top100/nhacviet/nv006.jpg'
import nv007 from '@/assets/image/top100/nhacviet/nv007.jpg'
import nv008 from '@/assets/image/top100/nhacviet/nv008.jpg'
import nv009 from '@/assets/image/top100/nhacviet/nv009.jpg'
import nv010 from '@/assets/image/top100/nhacviet/nv010.jpg'
import ca001 from '@/assets/image/top100/nhacchaua/ca001.jpg'
import ca002 from '@/assets/image/top100/nhacchaua/ca002.jpg'
import ca003 from '@/assets/image/top100/nhacchaua/ca003.jpg'
import ca004 from '@/assets/image/top100/nhacchaua/ca004.jpg'
import ca005 from '@/assets/image/top100/nhacchaua/ca005.jpg'
import am001 from '@/assets/image/top100/nhacaumy/am001.jpg'
import am002 from '@/assets/image/top100/nhacaumy/am002.jpg'
import am003 from '@/assets/image/top100/nhacaumy/am003.jpg'
import am004 from '@/assets/image/top100/nhacaumy/am004.jpg'
import am005 from '@/assets/image/top100/nhacaumy/am005.jpg'
import am006 from '@/assets/image/top100/nhacaumy/am006.jpg'

const imgbanner = ref(banner01);
const thumbnb = ref([
    { img: nb001, title: 'Top 100 Bài Nhạc Trẻ' },
    { img: nb002, title: 'Top 100 POP Âu Mỹ' },
    { img: nb003, title: 'Top 100 Nhạc Hàn' },
    { img: nb004, title: 'Top 100 Rap Việt' },
    { img: nb005, title: 'Top 100 EDM' }
])
const thumbnv = ref([
    { img: nv001, title: 'Top 100 EDM Việt' },
    { img: nv002, title: 'Top 100 V-POP' },
    { img: nv003, title: 'Top 100 Nhạc Phim Việt' },
    { img: nv004, title: 'Top 100 Nhạc Trịnh' },
    { img: nv005, title: 'Top 100 Cải Lương' },
    { img: nv006, title: 'Top 100 Nhạc Không lời' },
    { img: nv007, title: 'Top 100 Nhạc Thiếu Nhi' },
    { img: nv008, title: 'Top 100 Nhạc Quê Hương' },
    { img: nv009, title: 'Top 100 Nhạc Cách Mạng' },
    { img: nv010, title: 'Top 100 Nhạc Dance Việt' }
])
const thumbca = ref([
    { img: ca001, title: 'Top 100 Nhạc Phim Hoa Ngữ' },
    { img: ca002, title: 'Top 100 Nhạc Phim Hàn' },
    { img: ca003, title: 'Top 100 Nhạc Hoa Ngữ Hay' },
    { img: ca004, title: 'Top 100 Nhạc Nhật' },
    { img: ca005, title: 'Top 100 Nhạc Hàn Quốc' }
])
const thumbam = ref([
    { img: am001, title: 'Top 100 Nhạc BLUES/JAZZ' },
    { img: am002, title: 'Top 100 Nhạc TRANCE/HOUSE?TECHNO' },
    { img: am003, title: 'Top 100 Nhạc ROCK Âu Mỹ' },
    { img: am004, title: 'Top 100 Nhạc RAP & HIPHOP' },
    { img: am005, title: 'Top 100 Nhạc R&B' },
    { img: am006, title: 'Top 100 Nhạc FOLK' }
])
</script>

<style></style>