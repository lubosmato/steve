<template>
  <div class="sound-button">
    <audio ref="audio">
      <source :src="mp3Path" type="audio/mpeg" />
      <source :src="oggPath" type="audio/ogg" />
    </audio>
    <q-linear-progress :value="clickProgress" class="click-progress" />
    <q-btn @click="play" color="primary" :label="soundFile" />
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
    clicks() {
      return this.$store.state.steve.clicks[this.soundFile] ?? 0
    },
    clickProgress() {
      const mostClicks = Math.max(...Object.values(this.$store.state.steve.clicks), 0)
      if (mostClicks == 0) {
        return 0
      }
      return this.clicks / mostClicks
    },
    oggPath() {
      return `statics/speech/${this.soundFile}.ogg`
    },
    mp3Path() {
      return `statics/speech/${this.soundFile}.mp3`
    },
  },
  methods: {
    play() {
      this.$store.commit("steve/ADD_CLICK", this.soundFile)
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
.click-progress {
  margin-bottom: 0.15em;
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
