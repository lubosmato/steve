<template>
  <q-page class="home q-mt-lg">
    <h1 class="desktop-only text-h2">Steve Stifmeister</h1>
    <div class="row q-gutter-md justify-center">
      <SoundButton v-for="(soundFile, index) in soundFiles" :key="index" :sound-file="soundFile" />
      <SoundButton
        class="button-placeholder"
        area-hidden="true"
        v-for="i in 7"
        :key="`placeholder${i}`"
        sound-file="baby a cecky"
      />
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
  padding: 0 25%;
}

.button-placeholder {
  visibility: hidden;
}

@media only screen and (max-width: 1920px) {
  .home {
    padding: 0 15%;
  }
}

@media only screen and (max-width: 1024px) {
  .home {
    padding: 0 5%;
  }
}

@media only screen and (max-width: 750px) {
  .home {
    padding: 0;
  }
}
</style>
