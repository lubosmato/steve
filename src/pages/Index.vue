<template>
  <q-page class="home q-mt-lg q-mb-lg">
    <h1 class="desktop-only text-h2">Steve Stifmeister</h1>
    <div class="buttons">
      <SoundButton v-for="(soundFile, index) in soundFiles" :key="index" :sound-file="soundFile" />
    </div>
  </q-page>
</template>

<script>
import { speech } from "src/speech"
import SoundButton from "src/components/SoundButton.vue"

export default {
  name: "PageIndex",
  components: {
    SoundButton,
  },
  data: function() {
    return {
      soundFiles: speech,
    }
  },
}
</script>

<style scoped lang="scss">
.home {
  --button-size: 160px;
  padding: 0 25%;
}

.buttons {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, var(--button-size));
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-auto-rows: 1fr;
}

.buttons::before {
  content: "";
  width: 0;
  padding-bottom: 100%;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

.buttons > *:first-child {
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

.buttons > * {
  width: var(--button-size);
  height: var(--button-size);
}

@media only screen and (max-width: 1920px) {
  .home {
    padding: 0 15%;
    --button-size: 140px;
  }
}

@media only screen and (max-width: 1024px) {
  .home {
    padding: 0 5%;
    --button-size: 100px;
  }
}

@media only screen and (max-width: 750px) {
  .home {
    padding: 0;
    --button-size: 80px;
  }
}
</style>
