import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    // 不使用immutable.js
    // return { 
    //   focused: true
    // }

    // 使用immutable.js immutable对象的set方法，会结合之前immutable对象的值
    // 和设置的值，返回一个全新的对象
    return state.set('focused', true)
  }
  if (action.type === constants.SEARCH_BLUR) {
    // return {
    //   focused: false
    // }
    return state.set('focused', false)
  }
  return state
}