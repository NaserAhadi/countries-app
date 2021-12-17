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
.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FFF;
    height: 3rem;
    padding:2.5rem 3.5rem;

    &__title{
      color: #000;
      font: 800 2rem 'NunitoSans';
    }

    &__dark-mode-toggle{
      color: #373737;
      font: 400 1rem 'NunitoSans';
    }
}

.main-content{
  background: #FAFAFA;
}

@media only screen and (max-width: 1024px) {
  .header{
    &__title{
      font: 600 1rem 'NunitoSans';
    }

     &__dark-mode-toggle{
      font: 400 0.875rem 'NunitoSans';
    }
  }
}
</style>
