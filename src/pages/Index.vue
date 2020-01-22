<template>
  <div class="home">
    <div class="buttons">
      <SoundButton v-for="(soundFile, index) in soundFiles" :key="index" :sound-file="soundFile" />
    </div>
  </div>
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
  padding: 0 20%;
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
}

.buttons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

@media only screen and (max-width: 1024px) {
  .home {
    padding: 0 5%;
  }
  .buttons {
    width: 100%;
  }
}

@media only screen and (max-width: 750px) {
  .home {
    padding: 0;
  }
  .buttons {
    width: 100%;
  }
}
</style>
