<template>

    <div>
      <div class="bg-[#120C1C] h-auto px-[60px] pt-5 flex flex-wrap">
        <div class="flex justify-between mt-12 items-center">
        <div class="flex">
          <p class="text-gray-400 mr-2">Remix</p>
          <component :is="iconChevronRight" class="w-4 h-4 fill-white" />
        </div>
      </div>
      </div>
      <div class="bg-[#120C1C] h-auto px-[60px] pt-5 grid grid-cols-5 gap-10">
          <div class="m-5" v-for="track, index in artist.tracks" :key="track">
              <SongData :artist="artist" :track="track" :index="++index"/>
          </div>
   
        
      </div>
    </div>
  </template>
  
  <script setup>
  import iconChevronRight from './icon/iconChevronRight.vue';
  import SongData from '../components/SongData.vue'
  import artist from '@/data/remix.json'
  import { useSongStore } from '@/store/song'
  import { storeToRefs } from 'pinia';
  const useSong = useSongStore()
  const { isPlaying, currentTrack, currentArtist } = storeToRefs(useSong)
  const playFunc = () => {
      if (currentTrack.value) {
          useSong.playOrPauseThisSong(currentArtist.value, currentTrack.value)
          return
      } 
      useSong.playFromFirst()
  }
  </script>
  
  <style scoped>
  </style>
  