<script setup>
import { ref } from 'vue'

const users = ref([
    {
        nom: 'DOE',
        prenom: 'John'
    },
    {
        nom: 'MARTIN',
        prenom: 'Julien'
    },
    {
        nom: 'DUPONT',
        prenom: 'Alexandre'
    },
]);
</script>

<template>
  <h1>Page d'accueil</h1>

  <ul>
    <li v-for="(user, index) in users">{{ user.prenom }}</li>
  </ul>

</template>
