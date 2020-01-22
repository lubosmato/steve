<template>
  <div class="sound-button">
    <audio ref="audio">
      <source :src="mp3Path" type="audio/mpeg" />
      <source :src="oggPath" type="audio/ogg" />
    </audio>
    <button @click="play">{{ soundFile }}</button>
  </div>
</template>

<script>
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
      return `${this.publicPath}speech/${this.soundFile}.ogg`
    },
    mp3Path() {
      return `${this.publicPath}speech/${this.soundFile}.mp3`
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
button {
  width: 120px;
  height: 120px;
  margin: 8px;
}
button::first-letter {
  text-transform: uppercase;
}
</style>
