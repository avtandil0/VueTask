import { reactive } from '@vue/reactivity'
import useValidators from './validators'

const { isEmpty, minLength, isEmail, notContainsString,notContainsLowerCase,notContainsUppercase } = useValidators()

interface Error {
  firstName: Array<string>
  lastName: Array<string>
  email: Array<string>
  password: Array<string>
}

const errors: Error = reactive({ firstName: [], lastName: [], email: [], password: [] })

export default function useFormValidation() {
  const validateNameField = (fieldName: string, fieldValue: string) => {
    errors[fieldName as keyof Error] = []
    if (fieldValue?.length < 1)
      errors[fieldName as keyof Error]?.push(isEmpty(fieldName, fieldValue))
  }

  const validateEmailField = (fieldName: string, fieldValue: string) => {
    errors[fieldName as keyof Error] = []

    let isEmptylValidationResult = isEmpty(fieldName, fieldValue)
    if (isEmptylValidationResult) errors[fieldName as keyof Error]?.push(isEmptylValidationResult)

    let emailValidationResult = isEmail(fieldName, fieldValue)
    if (emailValidationResult) errors[fieldName as keyof Error]?.push(emailValidationResult)
  }

  const validatePasswordField = (fieldName: string, fieldValue: string, target: Array<string>) => {
    errors[fieldName as keyof Error] = []

    let isEmptylValidationResult = isEmpty(fieldName, fieldValue)
    if (isEmptylValidationResult) errors[fieldName as keyof Error]?.push(isEmptylValidationResult)

    let notContainsLowerCaseValidationResult = notContainsLowerCase(fieldName, fieldValue)
    if (notContainsLowerCaseValidationResult) errors[fieldName as keyof Error]?.push(notContainsLowerCaseValidationResult)

    let notContainsUppercaseValidationResult = notContainsUppercase(fieldName, fieldValue)
    if (notContainsUppercaseValidationResult) errors[fieldName as keyof Error]?.push(notContainsUppercaseValidationResult)

    let minLengthlValidationResult = minLength(fieldName, fieldValue, 8)
    if (minLengthlValidationResult)
      errors[fieldName as keyof Error]?.push(minLengthlValidationResult)

    target.forEach((element) => {
      let notContainsValidationResult = notContainsString(fieldName, fieldValue, element)
      if (notContainsValidationResult)
        errors[fieldName as keyof Error]?.push(notContainsValidationResult)
    })
  }

  return { errors, validateNameField, validateEmailField, validatePasswordField }
}
