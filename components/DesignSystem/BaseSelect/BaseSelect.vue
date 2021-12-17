<template>
  <div class="BaseSelect">
    <v-select
      outlined
      v-bind="$attrs"
      :items="inputItems"
      @change="sendOutSelectedValue($event)"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    inputItems: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    sendOutSelectedValue (value) {
      this.$emit('selected-value', value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./BaseSelect.scss";
</style>
