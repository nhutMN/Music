<template>
  <div class="w-full h-[100vh] bg-[#1C1625]">
    <div class="py-5">
      <!-- logo -->
      <router-link :to="{name: 'Discover-route'}">
        <div class="logo px-10 mb-8 text-[#dbdbdb]">
          <img :src="logo" alt="" class="w-20" />
        </div>
      </router-link>
      

      <!-- title -->
      <router-link :to="{name: 'Discover-route'}">
        <button
          class="py-4 px-10 flex items-center group active:bg-[#57535E] focus:bg-[#57535E] w-full active:border-l-4 focus:border-l-4 active:border-[#7C3EB3] focus:border-[#7C3EB3]">
          <iconHome class="w-5 h-5 mr-3 fill-[#dbdbdb] group-hover:fill-white" />
          <p class="text-[#dbdbdb] group-hover:text-white text-base font-semibold">
            Trang chủ
          </p>
        </button>
      </router-link>    

      <router-link :to="{name: 'remix-route'}">
        <button
          class="py-4 px-10 flex items-center group active:bg-[#57535E] focus:bg-[#57535E] w-full active:border-l-4 focus:border-l-4 active:border-[#7C3EB3] focus:border-[#7C3EB3]">
          <iconHome class="w-5 h-5 mr-3 fill-[#dbdbdb] group-hover:fill-white" />
          <p class="text-[#dbdbdb] group-hover:text-white text-base font-semibold">
            Remix
          </p>
        </button>
      </router-link>

      <router-link :to="{name: 'Accoustic-route'}">
        <button
          class="py-4 px-10 flex items-center group active:bg-[#57535E] focus:bg-[#57535E] w-full active:border-l-4 focus:border-l-4 active:border-[#7C3EB3] focus:border-[#7C3EB3]">
          <iconHome class="w-5 h-5 mr-3 fill-[#dbdbdb] group-hover:fill-white" />
          <p class="text-[#dbdbdb] group-hover:text-white text-base font-semibold">
            Accoustic
          </p>
        </button>
      </router-link>

      <router-link :to="{name: 'nhactre-route'}">
        <button
          class="py-4 px-10 flex items-center group active:bg-[#57535E] focus:bg-[#57535E] w-full active:border-l-4 focus:border-l-4 active:border-[#7C3EB3] focus:border-[#7C3EB3]">
          <iconHome class="w-5 h-5 mr-3 fill-[#dbdbdb] group-hover:fill-white" />
          <p class="text-[#dbdbdb] group-hover:text-white text-base font-semibold">
            Nhạc trẻ
          </p>
        </button>
      </router-link>
      <div class="border-b-[1px] border-gray-100 mx-10 pt-5 mb-5"></div>

      <Libary />
    </div>
  </div>
</template>

<script setup>
import logo from "@/assets/image/logo.png";
import iconDiscover from "./icon/iconDiscover.vue";
import iconMusic from "./icon/iconMusic.vue";
import iconRadio from "./icon/iconRadio.vue";
import iconZingchart from "./icon/iconZingchart.vue";
import iconChart from "./icon/iconChart.vue";
import iconHome from "./icon/iconHome.vue";
import Libary from "./Libary.vue";
components: {
  iconMusic, iconDiscover, iconZingchart, iconRadio, Libary;
}

</script>

<style></style>
