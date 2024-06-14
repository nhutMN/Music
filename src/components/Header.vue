<template>
  <div id="header">
    <div class="flex justify-between w-full h-[70px] bg-[#120C1C] px-[60px] m-auto items-center">
      <!-- thanh tìm kiếm -->
      <div class="search relative">
        <input type="text" placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát ..."
          class="focus:outline pr-5 pl-9 py-2 rounded-3xl w-[200%]" />
        <span v-html="iconSearch" class="icon-search absolute top-2 left-2 fill-red-400 cursor-pointer"></span>
      </div>

      <!-- Đăng nhâp / đăng kí -->
      <div class="flex items-center">
        <!-- dowload/pre -->
        <!-- <div class="premium flex ">
          <button class="bg-orange-600 px-10 py-2 mr-12 w-[150%] rounded-3xl">Premium</button>
          <button class="bg-orange-600 px-10 py-2 mr-12 w-[150%] rounded-3xl">Download</button>
        </div> -->

        <!-- <div v-if="isauthenticated" class="">
          <img :src="chandung" alt="" class="rounded-full w-10 h-10">
        </div> -->
        <Register />
        <!-- Đăng nhập / đăng kí -->
        <!-- <div class="group relative text-white">
          <router-link to="/SignIn">
            <button class="cursor-pointer">Đăng Nhập</button>
             <div v-if="user">{{ user?.email }}<button @click="signout">Sign Out</button></div>
          </router-link>
        </div> -->
      </div>

    </div>
  </div>
</template>

<script setup>
import Register from './Register.vue';
import SignIn from './SignIn.vue';
import {auth} from '@/configs/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import chandung from '@/assets/image/chandung.png';
import { ref } from "vue";
const iconSearch = ref('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-auto"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>');

const isauthenticated = ref(false);
</script>

<style></style>