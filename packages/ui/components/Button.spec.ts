import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('UI Button', () => {
  it('renders slot content', () => {
    const slotContent = 'Click me'
    const wrapper = mount(Button, {
      slots: {
        default: slotContent,
      },
    })
    expect(wrapper.html()).toContain(slotContent)
  })

  it('is not disabled by default', () => {
    const wrapper = mount(Button)
    expect(wrapper.attributes('disabled')).toBeFalsy()
  })

  it('can be disabled', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true,
      },
    })
    expect(wrapper.attributes('disabled')).toBeTruthy()
  })

  it('emits a click event when clicked', async () => {
    const wrapper = mount(Button)
    await wrapper.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })

})
