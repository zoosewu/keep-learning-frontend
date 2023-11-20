import { combineReducers, configureStore } from '@reduxjs/toolkit'
import type { AnyAction, PreloadedState, ThunkMiddleware } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import type { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  counter: counterReducer
})

export const setupStore = (preloadedState?: PreloadedState<RootState>): ToolkitStore<any, AnyAction, [ThunkMiddleware<any, AnyAction>]> => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
