<template>
  <v-btn
    v-bind="$attrs"
    class="base-button"
    type="submit"
    depressed
    v-on="$listeners"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'BaseButton'
}
</script>
<style lang="scss">
.base-button{
    font: 400 0.875rem 'NunitoSans';
    color: #373737 !important ;
    padding: 0.8rem 1rem !important;
    margin: 0.2rem 0.5rem !important;
    border:thin solid #B8B8B8;
    border-radius: 0.5rem;
}
</style>
