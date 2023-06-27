export const getEmptyText = (fieldName: string) => {
  return `The ${fieldName} field is required`
}

export const getMinLengthText = (fieldName: string, min: number) => {
  return `The ${fieldName} field must be atleast ${min} characters long`
}

export const getIsEmailText = (fieldName: string) => {
  return `The input is not a valid ${fieldName} address`
}

export const getNotContainsStringText = (fieldName: string) => {
  return `${fieldName} Should not contain user's first or last name`
}

export const getNotContainsLowerCaseText = (fieldName: string) => {
  return `${fieldName} Should contain lower letters`
}

export const getNotContainsUppercaseText = (fieldName: string) => {
  return `${fieldName} Should contain upper letters`
}
