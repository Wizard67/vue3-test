import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

const MSG = 'Hello Vue 3.0 + Vite'

describe('HelloWorld', () => {
  test('should render', async () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: MSG
      }
    })

    expect(wrapper.find('h1').text()).toEqual(MSG)
  })
})