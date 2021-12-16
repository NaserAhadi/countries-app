<template>
  <div>
    <BaseSelect
      label="Filter By Region"
      :input-items="regionalBlock"
      item-text="name"
      item-value="symbol"
      @selected-value="setSelectedCountriesRegion($event)"
    >
      <template #item="{ item }">
        {{ item.name }}
      </template>
    </BaseSelect>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BaseSelect from '~/components/DesignSystem/BaseSelect/BaseSelect'

export default {
  name: 'RegionFilter',
  components: {
    BaseSelect
  },
  data () {
    return {
      regionalBlock: [
        { name: 'European Union', symbol: 'EU' },
        { name: 'European Free Trade Association', symbol: 'EFTA' },
        { name: 'Caribbean Community', symbol: 'CARICOM' },
        { name: 'Pacific Alliance', symbol: 'PA' },
        { name: 'African Union', symbol: 'AU' },
        { name: 'Union of South American Nations', symbol: 'USAN' },
        { name: 'Eurasian Economic Union', symbol: 'EEU' },
        { name: 'Arab League', symbol: 'AL' },
        { name: 'Association of Southeast Asian Nations', symbol: 'ASEAN' },
        { name: 'Central American Integration System', symbol: 'CAIS' },
        { name: 'Central European Free Trade Agreement', symbol: 'CEFTA' },
        { name: 'North American Free Trade Agreement', symbol: 'NAFTA' },
        { name: 'South Asian Association for Regional Cooperation', symbol: 'SAARC' },
        { name: 'All', symbol: 'all' }
      ]
    }
  },
  methods: {
    ...mapActions('home', ['getRegionalCountriesInformation', 'getAllCountriesInformation']),

    setSelectedCountriesRegion (region) {
      if (region === 'all') {
        this.getAllCountriesInformation()
      } else {
        this.getRegionalCountriesInformation(region)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
