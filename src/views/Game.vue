<template>
  <div>
    <div v-if="true">
      <v-carousel
        v-if="game.length > 0 && showing"
        v-model="max"
        hide-delimiters
        cycle
        :interval="1000"
        :show-arrows="false"
      >
        <v-carousel-item
          v-for="(item, i) in this.game[this.level].color"
          :key="i"
          :src="item.src"
        >
          <v-sheet :color="item" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center"> </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <div v-else>
        <div v-for="(item, i) in this.game[this.level].color" :key="i">
          <v-btn :color="item" @click="answer"></v-btn>
        </div>
      </div>
      <v-btn @click="next">NextLv</v-btn>
    </div>
    <div v-else><v-btn @click="status = true">Start</v-btn></div>
  </div>
</template>

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
  }),
  firestore: {
    game: db.collection("game").orderBy("order"),
  },
  methods: {
    next() {
      this.level += 1;
      console.log(this.game[this.level].color);
      this.showing = true;
    },
    answer() {
      // 
    }
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
  },
};
</script>

<style></style>
