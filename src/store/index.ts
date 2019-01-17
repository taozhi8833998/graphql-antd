import * as React from 'react'
import { message } from 'antd'
import CommonManger from './common'

export interface Store {
  commonManager: CommonManger,
}

export interface ContextStore {
  store: Store
}

const createStore = () => {
  const store: any = {
    commonManager: new CommonManger(),
  }

  Object.keys(store).forEach(key => {
    store[key].refs = store
    store[key].message = message
    store[key].init && store[key].init()
  })

  return store
}

const store = createStore()
const StoreContext = React.createContext<ContextStore>({ store })

export default store
export const StoreProvider = StoreContext.Provider
export const StoreConsumer = StoreContext.Consumer