<script setup>
import { ref, toRefs, onMounted } from 'vue'
import iconPlay from "./icon/iconPlay.vue";
import iconHeart from "./icon/iconHeart.vue";
import iconPause from "./icon/iconPause.vue";


import { useSongStore } from '@/store/song'
import { storeToRefs } from 'pinia';
const useSong = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(useSong)

let isHover = ref(false)
let isTrackTime = ref(null)

const props = defineProps({
    track: Object,
    artist: Object,
    index: Number,
})

const { track, artist, index } = toRefs(props)

onMounted(() => {
    const audio = new Audio(track.value.path);
    audio.addEventListener('loadedmetadata', function() {
        const duration = audio.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        isTrackTime.value = minutes+':'+seconds.toString().padStart(2, '0')
    });
})
</script>

<template>
    <li
        class="flex items-center justify-between rounded-md hover:bg-[#2A2929]"
        @mouseenter="isHover = true"
        @mouseleave="isHover = false"
    >
        <div class="flex items-center w-full py-1.5">
            <div v-if="isHover" class="w-[40px] ml-[14px] mr-[6px] cursor-pointer">
                <component v-if="!isPlaying"
                    @click="useSong.playOrPauseThisSong(artist, track)" :is="iconPlay" class="w-5 h-5" />
                <component v-else-if="isPlaying && currentTrack.name !== track.name"
                    @click="useSong.loadSong(artist, track)" :is="iconPlay" class="w-5 h-5" />
                <component v-else @click="useSong.playOrPauseSong()" :is="iconPause" class="w-5 h-5" />
            </div>
            <div v-else class="text-white font-semibold w-[40px] ml-5">
                <span :class="{'text-green-500': currentTrack && currentTrack.name === track.name}">
                    {{ index }}
                </span>
            </div>
            <div>
                <div
                    :class="{'text-green-500': currentTrack && currentTrack.name === track.name}"
                    class="text-white font-semibold"
                >
                    {{ track.name }}
                </div>
                <div class="text-sm font-semibold text-gray-400">{{ artist.name }}</div>
            </div>
        </div>
        <div class="flex items-center">
            <button type="button" v-if="isHover">
                <component :is="iconHeart" class="w-5 h-5" />
                <Heart fillColor="#1BD760" :size="22"/>
            </button>
            <div
                v-if="isTrackTime"
                class="text-xs mx-5 text-gray-400"
            >
                {{ isTrackTime }}
            </div>
        </div>
    </li>
</template>