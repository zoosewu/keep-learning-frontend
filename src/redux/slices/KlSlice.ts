import { CategoryType, ContentType, SubjectType } from '@/components/type'
import { createSlice } from '@reduxjs/toolkit'
import fp from 'lodash/fp'
import { FactoryAdd } from './sliceFactory'
export interface KlStateType {
  categories: CategoryType[]
  subjects: SubjectType[]
  contents: ContentType[]
}

const initialState: KlStateType = {
  categories: [],
  subjects: [],
  contents: []
}

export const categorySlice = createSlice({
  name: 'learning',
  initialState,
  reducers: {
    add: FactoryAdd('categories'),
    remove: (state, removeItem) => ({ ...state, categories: fp.filter((item) => item !== removeItem.payload, state.categories) }),
    initialize: (state, removeItem) => ({ ...state, categories: removeItem.payload })
  }
})

// Action creators are generated for each case reducer function
export const { add, remove } = categorySlice.actions

export default categorySlice.reducer
