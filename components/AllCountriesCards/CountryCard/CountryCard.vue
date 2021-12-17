<template>
  <BaseCard class="country-card">
    <v-img
      :src="countrySpecification.flags.svg"
      :aspect-ratio="4/3"
    />
    <v-card-title class="country-card__title">
      {{ countrySpecification.name }}
    </v-card-title>
    <v-card-text class="country-card__text-wrapper">
      <v-row class="country-card__text-wrapper__text">
        <v-col cols="12" class="py-0">
          Population: <span class="answer-text">{{ populationNumberWithSeparator }}</span>
        </v-col>
        <v-col cols="12" class="py-0">
          Region: <span class="answer-text">{{ countrySpecification.region }}</span>
        </v-col>
        <v-col cols="12" class="py-0">
          Capital: <span class="answer-text">{{ countrySpecification.capital }}</span>
        </v-col>
      </v-row>
    </v-card-text>
  </BaseCard>
</template>

<script>
import BaseCard from '~/components/DesignSystem/BaseCard/BaseCard'

export default {
  name: 'CountryCard',
  components: {
    BaseCard
  },
  props: {
    countrySpecification: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    populationNumberWithSeparator () {
      return this.countrySpecification.population.toLocaleString()
    }
  }
}
</script>

<style lang="scss" scoped>
@import './CountryCard.scss';
</style>
