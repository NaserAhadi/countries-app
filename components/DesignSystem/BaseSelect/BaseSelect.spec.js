import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import BaseSelect from './BaseSelect'

describe('BaseSelect', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it(`
        GIVEN: user open select box, 
        WHEN: user select a value
        THEN: value is emitted
      `, async () => {
    const wrapper = mount(BaseSelect, {
      vuetify
    })
    const selectBox = wrapper.find('[data-testId="base-select"]')
    await selectBox.trigger('change')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('selected-value')).toHaveLength(1)
  })
})
