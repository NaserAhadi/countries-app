<template>
  <v-card>
    <v-img
      :src="countrySpecification.flags.svg"
      :aspect-ratio="4/3"
    />
    <v-card-text>
      {{ countrySpecification.name }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'CountryCard',
  props: {
    countrySpecification: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
