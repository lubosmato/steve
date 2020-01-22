<template>
  <q-page class="home q-mt-lg q-mb-lg">
    <h1 class="desktop-only text-h2">Steve Stifmeister</h1>
    <div class="buttons">
      <SoundButton v-for="(soundFile, index) in soundFiles" :key="index" :sound-file="soundFile" />
    </div>

    <div class="q-pa-md q-gutter-sm">
      <q-dialog v-model="isInstallDialogShown" seamless position="bottom" square>
        <q-card>
          <q-card class="bg-primary text-white">
            <q-card-section class="row items-center no-wrap">
              <div>
                <div class="text-weight-bold">Přidat Steva na plochu</div>
                <div class="">Používej Steva i offline</div>
              </div>
              <q-space />
              <div class="q-gutter-sm q-ml-sm">
                <q-btn label="Jindy" color="white" small flat no-caps v-close-popup />
                <q-btn
                  label="Přidat"
                  text-color="primary"
                  color="white"
                  small
                  v-close-popup
                  @click="confirmInstallation"
                />
              </div>
            </q-card-section>
          </q-card>
        </q-card>
      </q-dialog>
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
      isInstalled: window.matchMedia("(display-mode: standalone)").matches,
      installPrompt: null,
      isInstallDialogShown: false,
      soundFiles: speech,
    }
  },
  methods: {
    confirmInstallation() {
      this.installPrompt.prompt()
    },
  },
  created() {
    if (!this.$q.platform.is.mobile || this.isInstalled) return

    window.addEventListener("beforeinstallprompt", e => {
      e.preventDefault()
      this.installPrompt = e
      this.isInstallDialogShown = true
    })
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
