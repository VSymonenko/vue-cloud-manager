import { mount } from 'vue-test-utils'
/* eslint-disable import/extensions */
import vcmButton from '../../../src/components/vcmButton/vcmButton.vue'

const wrapper = mount(vcmButton)
console.log(wrapper.classes())
/* eslint-disable no-undef */
expect(wrapper.contains('button')).toBe(true)
