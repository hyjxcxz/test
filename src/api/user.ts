import axios from 'axios'
import type { User } from '@/types/user'

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export const getUsers = async () => {
  return api.get<User[]>('/users')
}

export const getUser = async (id: number) => {
  return api.get<User>(`/users/${id}`)
}

export const createUser = async (user: Omit<User, 'id'>) => {
  return api.post<User>('/users', user)
}

export const updateUser = async (id: number, user: Partial<User>) => {
  return api.put<User>(`/users/${id}`, user)
}

export const deleteUser = async (id: number) => {
  return api.delete(`/users/${id}`)
}