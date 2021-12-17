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
          Population: <span class="second-part-text">{{ populationNumberWithSeparator }}</span>
        </v-col>
        <v-col cols="12" class="py-0">
          Region: <span class="second-part-text">{{ countrySpecification.region }}</span>
        </v-col>
        <v-col cols="12" class="py-0">
          Capital: <span class="second-part-text">{{ countrySpecification.capital }}</span>
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
.country-card{
    background: #FFF;
    color: #000;

    &__title{
        color: #000;
        font: 600 1rem 'NunitoSans';
    }

    &__text-wrapper{
        padding: 0.8rem 1rem 2.5rem;

        &__text{
            color: #373737;
            font: 400 0.875rem 'NunitoSans';

            .second-part-text{
                color: #636363
            }
        }
    }
}
</style>
