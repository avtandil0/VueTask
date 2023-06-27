import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BaseInput from '../BaseInput.vue'
import useValidators from '@/utils/validators'
import {
  getEmptyText,
  getIsEmailText,
  getMinLengthText,
  getNotContainsLowerCaseText,
  getNotContainsStringText,
  getNotContainsUppercaseText
} from '@/utils/validatorTexts'
const {
  isEmpty,
  minLength,
  isEmail,
  notContainsString,
  notContainsLowerCase,
  notContainsUppercase
} = useValidators()

describe('BaseInput.spec', () => {
  it('renders properly', () => {
    const wrapper = mount(BaseInput, {
      props: { label: 'Firstanme', type: 'text', rules: ['invalid value', 'length error'] }
    })
    expect(wrapper.text()).toContain('invalid value')
    expect(wrapper.text()).toContain('length error')
  })

  it('isEmpty', () => {
    expect(isEmpty('name', '')).toEqual(getEmptyText('name'))
    expect(isEmpty('name', 'Avto')).toEqual('')
  })

  it('minLength', () => {
    expect(minLength('pass', '123', 8)).toEqual(getMinLengthText('pass', 8))
    expect(minLength('name', 'Avto123123', 5)).toEqual('')
  })

  it('isEmail', () => {
    expect(isEmail('email', 'aa@aa')).toEqual(getIsEmailText('email'))
    expect(isEmail('email', 'aa@aa.aa')).toEqual(``)
  })

  it('notContainsString', () => {
    expect(notContainsString('password', 'myNewPass', 'New')).toEqual(
      getNotContainsStringText('password')
    )
    expect(notContainsString('password', 'myNewPass', 'test')).toEqual(``)
  })

  it('notContainsLowerCase', () => {
    expect(notContainsLowerCase('name', 'NAME')).toEqual(getNotContainsLowerCaseText('name'))
    expect(notContainsLowerCase('name', 'name')).toEqual(``)
  })

  it('notContainsUppercase', () => {
    expect(notContainsUppercase('name', 'name')).toEqual(getNotContainsUppercaseText('name'))
    expect(notContainsUppercase('name', 'NAME')).toEqual(``)
  })
})
