<script setup>
import SongList from '../components/SongList.vue'
import iconPlay from './icon/iconPlay.vue';
import iconPause from './icon/iconPause.vue';
import iconDotsHorizontal from './icon/iconDotsHorizontal.vue';
import iconHeart from './icon/iconHeart.vue';
import iconClock from './icon/iconClock.vue';
import artist from '../data/artist.json'

import { useSongStore } from '@/store/song'
import { storeToRefs } from 'pinia';
const useSong = useSongStore()
const { isPlaying, currentTrack, currentArtist } = storeToRefs(useSong)
// <component :is="iconHeart" class="w-5 h-5" />
const playFunc = () => {
    if (currentTrack.value) {
        useSong.playOrPauseThisSong(currentArtist.value, currentTrack.value)
        return
    } 
    useSong.playFromFirst()
}
</script>

<template>
    <div  class="bg-[#120C1C] h-auto px-[60px] pt-5 w-full">
        <button
            type="button"
            class="text-white text-2xl font-semibold hover:underline cursor-pointer"
        >
            {{ artist.name }}
        </button>

        <div class="py-1.5"></div>
        <div class="flex items-center w-full relative h-full">
            <img width="140" :src="artist.album">

            <div class="w-full ml-5">

                <div
                    style="font-size: 33px;"
                    class="text-white absolute w-full hover:underline cursor-pointer top-0 font-bosemiboldld"
                >
                    {{ artist.name }}
                </div>

                <div class="text-gray-300 text-[13px] flex">
                    <div class="flex">Album</div>
                    <div class="ml-2 flex">
                        <div class="circle mt-2 mr-2" />
                        <span class="ml-0.5">{{ artist.releaseYear }}</span>
                    </div>
                    <div class="ml-2 flex">
                        <div class="circle mt-2 mr-2" />
                        <span class="ml-0.5">{{ artist.tracks.length }} songs</span>
                    </div>
                </div>

                <div class="absolute flex gap-4 items-center justify-start bottom-0 mb-1.5">
                    <button class="p-1" @click="playFunc()">
                        <component :is="iconPlay" v-if="!isPlaying" class="w-5 h-5" />
                        <component :is="iconPause" v-else class="w-5 h-5" />
                        <!-- <Play v-if="!isPlaying" fillColor="#181818" :size="25"/>
                        <Pause v-else fillColor="#181818" :size="25"/> -->
                    </button>
                    <button type="button">
                        <component :is="iconHeart" class="w-5 h-5" />
                        <!-- <Heart fillColor="#1BD760" :size="30"/> -->
                    </button>
                    <button type="button">
                        <component :is="iconDotsHorizontal" class="w-5 h-5" />
                        <!-- <DotsHorizontal fillColor="#FFFFFF" :size="25"/> -->
                    </button>
                </div>
            </div>
        </div>

        <div class="mt-6"></div>
        <div class="flex items-center justify-between px-5 pt-2">
            <div class="flex items-center justify-between text-gray-400">
                <div class="mr-7">#</div>
                <div class="text-sm">Title</div>
            </div>
            <div><component :is="iconClock" class="w-5 h-5" /></div>
            <!-- <ClockTimeThreeOutline fillColor="#FFFFFF" :size="18"/> -->
        </div>
        <div class="border-b border-b-[#2A2A2A] mt-2"></div>
        <div class="mb-4"></div>
        <ul class="w-full" v-for="track, index in artist.tracks" :key="track">
            <SongList :artist="artist" :track="track" :index="++index"/>
        </ul>
    </div>
</template>

<style scoped>
    .circle {
        width: 4px;
        height: 4px;
        background-color: rgb(189, 189, 189);
        border-radius: 100%;
    }
</style>