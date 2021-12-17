<template>
  <v-container>
    <v-row>
      <v-col>
        <nuxt-link to="/" class="back-link">
          <BaseButton>
            <ArrowLeftIcon />
            Back
          </BaseButton>
        </nuxt-link>
      </v-col>
    </v-row>
    <v-row class="flag-and-information-container">
      <v-col lg="5" cols="12">
        <BaseCard
          class="flag-card"
        >
          <v-img
            :src="filteredCountryData.flags.svg"
            height="400"
            :aspect-ratio="4/3"
          />
        </BaseCard>
      </v-col>
      <v-col lg="6" cols="12" class="contry-information">
        <v-row class="contry-information__title-row">
          <v-col>
            <span class="title">{{ filteredCountryData.name }}</span>
          </v-col>
        </v-row>
        <v-row class="contry-information__general-info-row">
          <v-col lg="6" cols="12">
            <div class="my-2">
              Native Name: <span class="answer-text">{{ filteredCountryData.nativeName }}</span>
            </div>
            <div class="my-2">
              Population: <span class="answer-text">{{ populationNumberWithSeparator }}</span>
            </div>
            <div class="my-2">
              Region: <span class="answer-text">{{ filteredCountryData.region }}</span>
            </div>
            <div class="my-2">
              Sub Region: <span class="answer-text">{{ filteredCountryData.subregion }}</span>
            </div>
            <div class="my-2">
              Captial: <span class="answer-text">{{ capital }}</span>
            </div>
          </v-col>
          <v-col lg="6" cols="12">
            <div class="my-2">
              Top Level Domain: <span class="answer-text">{{ filteredCountryData.topLevelDomain[0] }}</span>
            </div>
            <div class="my-2">
              Currencies: <span class="answer-text">{{ filteredCountryData.currencies[0].name }}</span>
            </div>
            <div class="my-2">
              Languages: <span class="answer-text">{{ languages }}</span>
            </div>
          </v-col>
        </v-row>
        <v-row class="contry-information__border-country-row">
          <v-col>
            <div>
              Border Countries:
              <span
                v-for="(borderCountry, index) in filteredCountryData.borders"
                :key="index"
              >
                <BaseButton
                  :to="`${convertNameOfBorderCountryToLowerCase(borderCountry)}`"
                >
                  {{ findNameOfBorderCountry(borderCountry) }}
                </BaseButton>
              </span>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BaseCard from '~/components/DesignSystem/BaseCard/BaseCard'
import BaseButton from '~/components/DesignSystem/BaseButton/BaseButton'
import { arrowIcon } from '~/assets/svg/svgRegisteration'

export default {
  name: 'CountryDetail',
  components: {
    BaseCard,
    BaseButton,
    ArrowLeftIcon: arrowIcon.ArrowLeftIcon
  },
  props: {
    filteredCountryData: {
      type: Object,
      default: () => {}
    },
    borderCountriesData: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    languages () {
      return this.filteredCountryData.languages.map(lang => lang.name).join(', ')
    },
    populationNumberWithSeparator () {
      return this.filteredCountryData.population.toLocaleString()
    },
    capital () {
      return this.filteredCountryData.capital ? this.filteredCountryData.capital : ' - '
    }
  },
  methods: {
    findNameOfBorderCountry (borderCountry) {
      return this.borderCountriesData.find(el => el.alpha3Code === borderCountry).name
    },
    convertNameOfBorderCountryToLowerCase (borderCountry) {
      return this.findNameOfBorderCountry(borderCountry).toLowerCase()
    }
  }
}
</script>

<style lang="scss" scoped>
@import './CountryDetail.scss';
</style>
