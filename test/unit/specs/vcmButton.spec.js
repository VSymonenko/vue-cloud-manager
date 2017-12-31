import { mount } from 'vue-test-utils'
import { expect } from 'chai'
/* eslint-disable import/extensions */
import vcmButton from '../../../src/components/vcmButton/vcmButton.vue'

const wrapper = mount(vcmButton)
expect(wrapper.name()).to.equal('vcm-button')
