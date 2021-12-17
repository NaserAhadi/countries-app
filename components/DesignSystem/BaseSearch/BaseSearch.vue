<template>
  <div class="base-search">
    <v-text-field
      v-bind="$attrs"
      outlined
      v-on="$listeners"
    >
      <template #prepend-inner>
        <SearchIcon />
      </template>
    </v-text-field>
  </div>
</template>

<script>
import { searchIcon } from '~/assets/svg/svgRegisteration'

export default {
  name: 'BaseSearch',
  components: {
    SearchIcon: searchIcon.SearchIcon
  }
}
</script>

<style lang="scss" scoped>
@import "./BaseSearch.scss";
</style>
