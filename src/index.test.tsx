import { AnyAction } from 'redux' // Or your own Action definition
import createMockStore from 'redux-mock-store'
import { incrementByAmount, increment, decrement } from '@slices/counterSlice'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { RootState } from './redux/store'

type DispatchExts = ThunkDispatch<RootState, void, AnyAction>

const middleware = [thunk]
const mockStore = createMockStore<RootState, DispatchExts>(middleware)

describe('test redux', () => {
  // 每一次測試後清除 fetchMock 的紀錄
  afterEach(() => {
    // fetchMock.restore();
  })
  describe('test actions', () => {
    test('test increment', () => {
      const expectItem = expect(increment())
      expectItem.toHaveProperty('type')
      expectItem.toHaveProperty('payload')
    })

    test('test decrement', () => {
      const expectItem = expect(decrement())
      expectItem.toHaveProperty('type')
      expectItem.toHaveProperty('payload')
    })

    test('test incrementByAmount', () => {
      const expectItem = expect(incrementByAmount(4))
      expectItem.toHaveProperty('type')
      expectItem.toHaveProperty('payload')
    })
  })

  test('get count dispatch of action', () => {
    // fetchMock 與 fetchCount() 內的請求網址相同
    // fetchMock.getOnce('http://example.com/count', {
    // body: { count: 3 }
    // })

    // 創建 store
    const store = mockStore()

    // 使用 store 用 fetchCount() 觸發 dispatch
    store.dispatch(increment())

    const actions = store.getActions()
    const expectedPayload = { type: 'counter/increment' }
    expect(actions).toEqual([expectedPayload])
  })
})
