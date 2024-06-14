<template>

    <div>
      <div class="bg-[#120C1C] h-auto px-[60px] pt-5 flex flex-wrap">
        <div class="search relative">
        <input type="text" placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát ..."
          class="focus:outline pr-5 pl-9 py-2 rounded-3xl w-[200%]" />
        <span v-html="iconSearch" class="icon-search absolute top-2 left-2 fill-red-400 cursor-pointer"></span>
      </div>
        <div class="flex">
          <h2 class="text-[#dbdbdb] font-medium">Danh sách bài hát</h2>
          <component :is="iconChevronRight" class="w-5 h-5" />
        </div>
      </div>
      <div class="bg-[#120C1C] h-auto px-[60px] pt-5 flex flex-wrap">
          <div class="m-5" v-for="track, index in artist.tracks" :key="track">
              <SongData :artist="artist" :track="track" :index="++index"/>
          </div>
   
        
      </div>
    </div>
  </template>
  
  <script setup>
  import iconChevronRight from './icon/iconChevronRight.vue';
  import SongData from '../components/SongData.vue'
  import artist from '../data/music.json'
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
  