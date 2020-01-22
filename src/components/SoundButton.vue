<template>
  <div class="sound-button">
    <audio ref="audio">
      <source :src="mp3Path" type="audio/mpeg" />
      <source :src="oggPath" type="audio/ogg" />
    </audio>
    <q-btn @click="play" color="primary" :label="soundFile" />
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: "SoundButton",
  props: {
    soundFile: { type: String, required: true },
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    }
  },
  computed: {
    oggPath() {
      return `statics/speech/${this.soundFile}.ogg`
    },
    mp3Path() {
      return `statics/speech/${this.soundFile}.mp3`
    },
  },
  methods: {
    play() {
      this.$refs.audio.play()
    },
  },
}
</script>

<style scoped lang="scss">
.q-btn {
  width: 100%;
  height: 100%;
  font-size: 1em;
  word-wrap: break-word;
}
@media only screen and (max-width: 1024px) {
  .q-btn {
    font-size: 0.9em;
  }
}
@media only screen and (max-width: 750px) {
  .q-btn {
    font-size: 0.8em;
  }
}
</style>
