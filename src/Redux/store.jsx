import { configureStore } from "@reduxjs/toolkit"
import todoStore from './createStore'

export const store = ()=>{
    const init = configureStore({
        reducer: {
            todos: todoStore
        }
    })
    return init
}