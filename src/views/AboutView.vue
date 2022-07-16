<template>
  <div class="background">
    <div class="overlay">
      <div class="overlay2">
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" class="text-center">
                <img
                  src="https://media.discordapp.net/attachments/990286060321931344/997779835516620860/IMG_5719.png"
                  alt=""
                  class="center"
                />
                <div class="mb-4">
                  <div class="red">
                    If you want to open a new experience, Press Enter!!! <br />
                    for ITCAMP18 group A.
                  </div>
                </div>
                <div>
                  <v-col cols="12" sm="4" class="mx-auto">
                    <v-text-field
                      filled
                      label="Name"
                      clearable
                      class="white"
                      v-model="name"
                    ></v-text-field>
                    <div class="red">
                      <v-btn
                        @click="createUser"
                        icon="mdi-play"
                        size="x-large"
                        class="mx-auto"
                      ></v-btn>
                     </div>
                  </v-col>
                </div>
              </v-col>
              <div>
              <div>
              <v-btn
               icon="mdi-book"
               size="x-large"
             
               ></v-btn>
              </div>
              </div>
            </v-row>
          </v-container>
        </v-form>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap");

.overlay {
  display: flex;
  position: relative;
  height: 100vh;
  width: 100%;
  z-index: -1;
}
.overlay2 {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;
  z-index: -1;
}
.background {
  background-image: url(https://media.discordapp.net/attachments/990286060321931344/997769612026445864/1657957195556.jpg);
  background-size: cover;
  z-index: -2;
}
.center {
  margin: auto;
}
.red {
  color: red;
  font-family: "Inconsolata", monospace;
    z-index: 1;
}
.white {
  color: white;
}
</style>

<script>
import db from "../config/firebase";

export default {
  data(){
      return {
        dialog: false,
      }
  },
  name: "Test",

  data: () => ({
    name: "",
    
  }),
  firestore: {
    users: db.collection("user"),
  },
  methods: {
    async createUser() {
      const user = await db.collection("user").add({
        name: this.name,
        score: 0,
      });
      console.log(user);
    },
  
  },

};
</script>
