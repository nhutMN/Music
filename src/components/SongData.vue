<script setup>
import { ref, toRefs, onMounted } from 'vue'
import iconPlay from "./icon/iconPlay.vue";
import iconPause from "./icon/iconPause.vue";
import iconStar from "./icon/iconStar.vue";

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
    <div
        class="rounded-md"
        @mouseenter="isHover = true"
        @mouseleave="isHover = false"
    >

            <div class="relative isMusics group">
                <div class="absolute left-[50%] top-[50%] hidden group-hover:block ">                
                    <div class="cursor-pointer">
                    <component v-if="!isPlaying"
                        @click="useSong.playOrPauseThisSong(artist, track)" :is="iconPlay" class="w-5 h-5" />
                    <component v-else-if="isPlaying && currentTrack.name !== track.name"
                        @click="useSong.loadSong(artist, track)" :is="iconPlay" class="w-5 h-5" />
                    <component v-else @click="useSong.playOrPauseSong()" :is="iconPause" class="w-5 h-5" />
                    </div>                
                </div>
                <img class="rounded-md w-[100%]" :src=track.img alt="">
            </div>
            
            <div>
                <div
                    
                    :class="{'text-green-500': currentTrack && currentTrack.name === track.name}"
                    class="text-white text-lg hover:text-[#c273ed] cursor-pointer truncate group-hover:truncate group-hover:w-[70%]"
                >
                    {{ track.name }}
                </div>
                <div class="flex gap-3">
                    <span class="text-sm text-gray-500 group-hover/author:text-[#c273ed] hover:underline cursor-pointer">{{ track.singer }}</span>
                    <span><component :is="iconStar" class="w-4 h-4 fill-white text-gray-500 group-hover/author:fill-[#c273ed]" /></span>
                </div>
            </div>

    </div>
</template>

<style scoped>

</style>