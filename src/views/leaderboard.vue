<template>
  <div>
    <div>
      <v-card class="led">
        <p v-for="user in users" :key="user.name">
          {{ user.name }}: {{ user.score }}
        </p>
      </v-card>
    </div>
  </div>
</template>
0
<style>
/* .bg {
  background: url(https://cdn.pixabay.com/photo/2020/02/06/19/01/floor-4825257_960_720.jpg);
  background-size: cover;
  width: 100%;
  height: 100%;
} */
</style>

<script>
import db from "../config/firebase";

export default {
  data: () => ({
    users: [],
  }),
  firestore: {
    users: db.collection("user"),
  },
};
</script>
