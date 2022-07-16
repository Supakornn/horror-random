<template>
  <div class="section">
    <div>
      <h1 class="text-center" style="color: white">
        LV : {{ this.game[this.level].order }}
      </h1>
      <h1 class="text-center" style="color: white">
        Name:
        {{ $store.state.user.name }} : Score
        {{ $store.state.user ? $store.state.user.score : 0 }}
      </h1>
      <div
        class="d-flex justify-center align-center"
        style="height: 100vh"
        v-if="true"
      >
        <v-card
          class="pa-0 mt-10"
          v-if="game.length > 0 && showing"
          width="80%"
          style="background: none"
        >
          <v-carousel
            v-model="max"
            hide-delimiters
            cycle
            :interval="this.game[this.level].speed"
            :show-arrows="false"
          >
            <v-carousel-item
              v-for="(item, i) in this.game[this.level].color"
              :key="i"
              :src="item.src"
            >
              <v-sheet :color="item" height="100%" width="100%" tile>
                <v-row class="fill-height" align="center" justify="center">
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-card>
        <div v-else>
          <div class="btn" style="width: 100%; height: 100%">
            <div v-for="(item, i) in this.game[this.level].color" :key="i">
              <v-btn
                :color="item"
                @click="answer(item)"
                icon="circle"
                class="ma-2"
                size="x-large"
              ></v-btn>
            </div>
          </div>
        </div>
      </div>
      <div v-else><v-btn @click="status = true">Start</v-btn></div>
      {{ $store.state.user }}
    </div>
  </div>
</template>

<style>
.section {
  background: url(https://cdn.pixabay.com/photo/2020/02/06/19/01/floor-4825257_960_720.jpg);
  background-repeat: no-repeat;
  height: 100%;
  background-size: cover;
}
.btn {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-content: center;
}
</style>

<script>
import db from "../config/firebase";

export default {
  name: "Test",

  data: () => ({
    game: [],
    level: 0,
    max: 0,
    showing: true,
    check: false,
    status: false,
    answerColor: "",
    index: 0,
  }),
  firestore: {
    user: db.collection("user"),
    game: db.collection("game").orderBy("order"),
  },
  methods: {
    next() {
      this.level += 1;
      this.showing = true;
      this.index = 0;
    },
    answer(color) {
      if (color === this.game[this.level].color[this.index]) {
        this.index += 1;
        this.$store.commit("addScore", this.game[this.level]);
        if (this.$store.state.user) {
          db.collection("user").doc(this.$store.state.user.id).set({
            name: this.$store.state.user.name,
            score: this.$store.state.user.score,
          });
        }
        if (this.index === this.game[this.level].color.length) {
          this.next();
        }
      } else {
        alert("ผิดครับ เริ่มใหม่ตั้งแต่แรก !!!!!!");
        this.index = 0;
      }
    },
    randomArray(val) {
      return val.sort(() => 0.5 - Math.random());
    },
  },
  watch: {
    max(val) {
      if (val === 0) this.showing = false;
    },
  },
  computed: {
    returnColor() {
      return this.game[0].color;
    },
    randomChoic() {
      return this.randomArray(this.game[this.level].color);
    },
  },
};
</script>

<style></style>
