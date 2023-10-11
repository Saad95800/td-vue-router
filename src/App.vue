<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const isUserLoggedIn = ref(localStorage.getItem('userLoggedIn') === 'true');
const router = useRouter();

const logout = () => {
  localStorage.removeItem('userLoggedIn');
  isUserLoggedIn.value = false;
  router.push({ name: 'login' });
};

</script>

<template>
  <router-link class="button" to="/">Accueil</router-link>
  <router-link class="button" to="/about">A propos</router-link>
  <router-link class="button" to="/user-list">Liste des utilisateurs</router-link>
  <router-link class="button" to="/login" v-if="!isUserLoggedIn">Connexion</router-link>
  <button v-if="isUserLoggedIn" @click="logout">Se déconnecter</button>
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
