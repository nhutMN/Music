import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
  } from 'firebase/auth';
  import { defineStore } from 'pinia';
  import { auth } from '../configs/firebase';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export const useAuthStore = defineStore('authStore', () => {
    const user = ref({});
    const router = useRouter();
    const init = () => {
      onAuthStateChanged(auth, (userDetails) => {
        if (userDetails) {
          const uid = userDetails.uid;
          user.value = { email: userDetails.email, uid };
          router.push({ name: 'Discover-route' });
        } else {
          user.value = {};
          router.replace({ name: 'Discover-route' });
        }
      });
    };
    const registerUser = (credentials) => {
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          alert('Đăng ký thành công');
          // ...
        })
        .catch((error) => {
          console.log(error.message);
          alert('Đăng ký thất bại');
        });
    };
  
    const loginUser = (credentials) => {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          alert('Đăng nhập thành công');
          // ...
        })
        .catch((error) => {
          console.log(error.message);
          alert('Sai tài khoản hoặc mật khẩu, nhập lại !');

        });
    };
  
    const logoutUser = () => {
      signOut(auth)
        .then(() => {
          console.log('loggedout');
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        });
    };
  
    return {
      registerUser,
      loginUser,
      logoutUser,
      init,
      user
    };
  });