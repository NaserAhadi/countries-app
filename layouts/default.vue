<template>
  <v-app>
    <header class="header">
      <span class="header__title">
        Where in the world?
      </span>
      <span class="header__dark-mode-toggle">
        Dark mode
      </span>
    </header>
    <v-main class="main-content">
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {

    }
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
</style>
