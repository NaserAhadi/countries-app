<template>
  <v-app>
    <BaseCard>
      <header class="header">
        <span class="header__title">
          Where in the world?
        </span>
        <span class="header__dark-mode-toggle">
          Dark mode
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

export default {
  name: 'DefaultLayout',
  components: {
    BaseCard
  }
}
</script>
<style lang="scss">
@import './default.scss';
</style>
