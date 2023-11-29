import { createSlice } from '@reduxjs/toolkit'

export interface ConfigStateType {
  ip: string
}

const initialState: ConfigStateType = {
  ip: localStorage.getItem('config.ip') ?? ''
}

export const configSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    set: (state, newIp) => {
      localStorage.setItem('config.ip', newIp.payload)
      state.ip = newIp.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { set } = configSlice.actions

export default configSlice.reducer
