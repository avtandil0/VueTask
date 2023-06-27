import {
  getEmptyText,
  getIsEmailText,
  getMinLengthText,
  getNotContainsLowerCaseText,
  getNotContainsStringText,
  getNotContainsUppercaseText
} from './validatorTexts'

export default function useValidators() {
  const isEmpty = (fieldName: string, fieldValue: string) => {
    return !fieldValue ? getEmptyText(fieldName) : ''
  }

  const minLength = (fieldName: string, fieldValue: string, min: number) => {
    return fieldValue.length < min ? getMinLengthText(fieldName, min) : ''
  }

  const isEmail = (fieldName: string, fieldValue: string) => {
    let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return !pattern.test(fieldValue) ? getIsEmailText(fieldName) : '' 
  }

  const notContainsString = (fieldName: string, fieldValue: string, target: string) => {
    return fieldValue.includes(target) ? getNotContainsStringText(fieldName) : ``
  }

  const notContainsLowerCase = (fieldName: string, fieldValue: string) => {
    return !/[a-z]/.test(fieldValue) ? getNotContainsLowerCaseText(fieldName) : ``
  }

  const notContainsUppercase = (fieldName: string, fieldValue: string) => {
    return !/[A-Z]/.test(fieldValue) ? getNotContainsUppercaseText(fieldName) : ``
  }

  return {
    isEmpty,
    minLength,
    isEmail,
    notContainsString,
    notContainsLowerCase,
    notContainsUppercase
  }
}
