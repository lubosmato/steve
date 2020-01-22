<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="mobile-only">
      <q-toolbar>
        <q-toolbar-title>
          Steve Stifmeister
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MyLayout",

  data() {
    return {
      leftDrawerOpen: false,
    }
  },
}
</script>
