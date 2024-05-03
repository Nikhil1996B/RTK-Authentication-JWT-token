import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  getToken,
  removeToken,
  setToken,
} from '../../common/utils/clientStorage'
import api from '../../common/services/api'
import history from '../../common/utils/history'

export const fetchUserData = createAsyncThunk(
  'auth/fetchUserData',
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = getToken()
      api.defaults.headers.Authorization = `Bearer ${accessToken}`
      const user = await api.get('/user')
      return {
        accessToken,
        user,
      }
    } catch (error) {
      console.log(error)
      alert(JSON.stringify('Error', error))
      removeToken()
      return rejectWithValue('')
    }
  }
)

export const login = createAsyncThunk('auth/login', async (payload) => {
  const response = await api.post('/login', payload)
  setToken(response.data.accessToken)
  history.push('/dashboard')
  return response.data
})

export const signOut = createAsyncThunk('auth/signOut', async () => {
  removeToken()
})
