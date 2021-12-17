<template>
  <v-btn
    v-bind="$attrs"
    class="base-button"
    type="submit"
    depressed
    elevation="1"
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
@import './BaseButton.scss';
</style>
