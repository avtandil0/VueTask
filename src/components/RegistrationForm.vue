<script setup lang="ts">
import { ref, watch, reactive, computed } from 'vue'
import BaseInput from './BaseInput.vue'
import useFormValidation from '../utils/useFormValidation'
import { addUser } from '@/services/users'
import type { User } from '@/types/user'

const { validateNameField, validateEmailField, validatePasswordField, errors } = useFormValidation()

let user: User = reactive({
  firstName: null,
  lastName: null,
  password: null,
  email: null
})

watch(
  () => user.firstName,
  (newValue: any) => {
    validateNameField('firstName', newValue)
    if (user.password) {
      validatePasswordField('password', user.password ?? '', [user.firstName ?? ''])
    }
  }
)

watch(
  () => user.lastName,
  (newValue: any) => {
    validateNameField('lastName', newValue)
    if (user.password) {
      validatePasswordField('password', user.password ?? '', [user.lastName ?? ''])
    }
  }
)

watch(
  () => user.email,
  (newValue: any) => {
    validateEmailField('email', newValue)
  }
)

watch(
  () => user.password,
  (newValue: any) => {
    validatePasswordField('password', newValue, [user.lastName ?? '', user.firstName ?? ''])
  }
)

function userIsFullFilled() {
  if (!user.firstName || !user.lastName || !user.email || !user.password) {
    return false
  }
  return true
}

function errorsIsEmpty() {
  if (
    errors.firstName.length ||
    errors.lastName.length ||
    errors.email.length ||
    errors.password.length
  ) {
    return false
  }
  return true
}

const disabledSubmit = computed(() => {
  if (userIsFullFilled() && errorsIsEmpty()) {
    return false
  }
  return true
})

async function handleSubmitForm() {
  console.log('useruseruser', user)

  await addUser({
    ...user
  })
}
</script>

<template>
  <div class="center">
    <form @submit.prevent="handleSubmitForm">
      <BaseInput label="Firstanme" type="text" :rules="errors.firstName" v-model="user.firstName" />
      <BaseInput label="Lastname" type="text" :rules="errors.lastName" v-model="user.lastName" />
      <BaseInput label="Email" type="email" :rules="errors.email" v-model="user.email" />
      <BaseInput
        label="Password"
        type="password"
        :rules="errors.password"
        v-model="user.password"
      />
      <button type="submit" :disabled="disabledSubmit">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
