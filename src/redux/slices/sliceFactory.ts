import fp from 'lodash/fp'
type ReducerActionType<T> = (arr: T, newArr: T) => T

export const factory = <T> (callback: ReducerActionType<T>) =>
  (propName: string) =>
    <U> (state: U, item: { payload: T, type: string }): U =>
      ({ ...state, [propName]: callback(fp.prop(propName, state), item.payload) })

export const FactoryAdd = factory<any[]>((arr, newArr) => fp.concat(arr, newArr))

export const FactoryRemove = factory<any[]>((arr, newArr) => fp.filter((item) => item !== newArr, arr))

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const FactorySet = factory<any[]>((_, item) => item)
