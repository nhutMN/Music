<template>
  <div class="bg-[#120C1C] h-[1000px] px-[60px] pt-5 w-full">
    <div class="cursor-pointer">
      <ul class="flex gap-3 justify-center">
        <li class="text-white" :class="{ 'is-active': !register }"><a @click.prevent="register = false">Login</a></li>
        <li class="text-white">/</li>
        <li class="text-white" :class="{ 'is-active': register }"><a @click.prevent="register = true">Register</a></li>
      </ul>
    </div>

    <form @submit.prevent="onSubmit">
      <div class="card auth-form">
        <div class="card-content">
          <div class="title text-3xl mt-5 text-white">{{ formTitle }}</div>
          <div class="content">
              <!-- start email -->
            <div class="field mt-5">
              <label class="label block mb-2 text-sm font-medium text-white dark:text-white">Email</label>
              <div class="control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <input class="input" type="email" placeholder="Email Address" required v-model="credentials.email" />
              </div>
              <!-- end email -->
            </div>
              <!-- start email -->
            <div class="field mt-5">
              <label class="label block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
              <div class="control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <input
                  class="input "
                  type="Password"
                  placeholder="Enter Password"
                  v-model="credentials.password"
                />
              </div>
            </div>
              <!-- end email -->

            <div class="field is-grouped is-grouped-right">
              <p class="control">
                <button class="button mt-5 is-danger text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{{ formTitle }}</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
  import { computed, reactive, ref } from 'vue';
  import { useAuthStore } from '../store/AuthStore';

  const register = ref(false);

  const authStore = useAuthStore();

  const credentials = reactive({
    email: '',
    password: ''
  });

  const formTitle = computed(() => {
    return register.value ? 'Register' : 'Login';
  });

  const onSubmit = () => {
    if (!credentials.email || !credentials.password) {
      alert('Please enter email and password');
      return;
    }

    if (register.value) {
      authStore.registerUser(credentials);
    } else {
      authStore.loginUser(credentials);
    }
  };
</script>

<style scoped>
  .auth-form {
    max-width: 400px;
    margin: 0 auto;
  }
</style>