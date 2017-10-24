import Vue from 'vue';
import vcmContent from '@/components/vcmContent/vcmContent';

describe('vcmContent.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(vcmContent);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.content h1').textContent)
      .to.equal('content');
  });
});
