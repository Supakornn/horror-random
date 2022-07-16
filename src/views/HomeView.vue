<template>
  <Game />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Game from './Game.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    Game,
  },
});
</script>
