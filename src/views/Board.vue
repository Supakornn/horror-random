<template>
  <div class="bg">
    <!-- <v-card class="led">
      <p class="leader-head">Leader Board</p>
      <p v-for="user in users" :key="user.name">
        {{ user.name }}: {{ user.score }}
      </p>
    </v-card> -->
  </div>
</template>

<script>
import db from "../config/firebase";
export default {
  data: () => ({
    users: [
      { name: "test", score: 0 },
      { name: "minmin", score: 0 },
      { name: "bass", score: 0 },
    ],
  }),
  firestore: {
    users: db.collection("user"),
  },
};
</script>
