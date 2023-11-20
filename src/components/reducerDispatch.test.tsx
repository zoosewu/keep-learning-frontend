import { screen } from '@testing-library/react'
import { Component as ReducerDispatch } from './reducerDispatch'
import { renderWithProviders } from '@/utils/redux-utils'

// type DispatchExts = ThunkDispatch<RootState, void, AnyAction>

// const middleware = [thunk]
// const mockStore = createMockStore<RootState, DispatchExts>(middleware)

describe('renders reducerDispatch', () => {
  beforeAll(() => {
    renderWithProviders(<ReducerDispatch />, {
      preloadedState: {
        counter: { value: 5 }
      }
    })
    const buttonElements = screen.getAllByRole('button')
    expect(buttonElements).toHaveLength(3)
  })
  test('test button', () => {

  })
})
