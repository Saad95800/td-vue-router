<template>
    <div>
      <h1>Connexion</h1>
      <form @submit.prevent="login">
        <input v-model="username" placeholder="Identifiant" />
        <input type="password" v-model="password" placeholder="Mot de passe" />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  const username = ref("");
  const password = ref("");
  
  const login = () => {
    if (username.value === "user" && password.value === "1234") {
      localStorage.setItem("userLoggedIn", "true");
      router.push({ name: "home" });
    } else {
      alert("Identifiant ou mot de passe incorrect");
    }
  };
  </script>
  