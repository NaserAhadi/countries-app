<template>
  <v-app>
    <BaseCard>
      <header class="header">
        <span class="header__title">
          Where in the world?
        </span>
        <span class="header__dark-mode-toggle" @click="toggleDarkMode()">
          <MoonIcon />
          <span>Dark Mode</span>
        </span>
      </header>
    </BaseCard>
    <v-main class="main-content">
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import BaseCard from '~/components/DesignSystem/BaseCard/BaseCard'
import { moonIcon } from '~/assets/svg/svgRegisteration'

export default {
  name: 'DefaultLayout',
  components: {
    BaseCard,
    MoonIcon: moonIcon.Moon
  },
  methods: {
    toggleDarkMode () {
      this.$vuetify.theme.isDark = !this.$vuetify.theme.isDark
    }
  }
}
</script>
<style lang="scss">
@import './default.scss';
</style>
