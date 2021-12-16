<template>
  <div class="base-search">
    <v-text-field
      v-bind="$attrs"
      outlined
      v-on="$listeners"
    >
      <template #prepend-inner>
        <SearchIcons />
      </template>
    </v-text-field>
  </div>
</template>

<script>
import { searchIcons } from '~/assets/svg/svgRegisteration'

export default {
  name: 'BaseSearch',
  components: {
    SearchIcons: searchIcons.light
  }
}
</script>

<style lang="scss" scoped>
@import "./BaseSearch.scss";
</style>
