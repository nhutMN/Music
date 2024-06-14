<template>
    <div>
        <h1 v-if="isLoggedIn" class="text-white">abc</h1>
        <div v-else class="group relative text-white flex gap-2 px-5 py-2 bg-amber-600 rounded-3xl">          
            <div class="navbar-start" v-if="authStore.user.uid">
                <button class="cursor-pointer" @click.prevent="onLogout">Logout {{ authStore.user.email }}</button>                
            </div>
            <router-link to="/SignIn" v-else>
                <button class="">Đăng Nhập</button>
            </router-link>
        </div>        
    </div>
</template>

<script setup>
import { useAuthStore } from '../store/AuthStore';
const props = defineProps(['isLoggedIn'])

console.log(props.isLoggedIn)

const authStore = useAuthStore();

const onLogout = () => {
  authStore.logoutUser();
};
</script>

<style scoped>

</style>