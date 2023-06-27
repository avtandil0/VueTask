import { API_PREFIX } from '@/constants'
import CallApi from './api'
import type { User } from '@/types/user'

export const addUser = (user: User) =>
  CallApi({
    url: `${API_PREFIX}/users`,
    method: 'post',
    data: user
  })
