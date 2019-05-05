import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})

const changeList = (data) => {
  return {
    type: constants.CHANGE_LIST,
    data: fromJS(data)
  }
}

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
      .then((res) => {
        const data = res.data
        // console.log(data)
        dispatch(changeList(data.data))

      })
      .catch(() => {
        console.log('error')
      })
  }
}