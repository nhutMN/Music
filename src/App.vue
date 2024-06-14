<script setup>

import { ref, onMounted } from 'vue';
import Header from "./components/Header.vue";
import SlideBar from "./components/SlideBar.vue";
import Register from "./components/Register.vue";
import SignIn from "./components/SignIn.vue";
import MusicPlayer from "./components/MusicPlayer.vue";
import { useSongStore } from '@/store/song'
import { storeToRefs } from 'pinia';
import { useAuthStore } from './store/AuthStore';
// import SignIn from './components/SignIn.vue';
//start auth
import {auth} from '@/configs/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
//end auth
const useSong = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(useSong)

const authStore = useAuthStore();

onMounted(() => {
  authStore.init();
});

onMounted(() => { isPlaying.value = false })
{
  Header;
  SlideBar;
  Register;
  SignIn;
}
</script>
<template>
  <div class="flex">
    <div class="w-[20%] fixed">
      <SlideBar class="" />
    </div>
    <div class="w-[80%] left-[20%] relative ">
      <Header class="fixed w-[80%] z-10" />
      <router-view class="relative top-[70px] touch-auto  "/>
    </div>
  </div>
  <MusicPlayer v-if="currentTrack" />
</template>

<style scoped>

</style>
