// import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '前端框架',
    imgUrl: ''
  }, {
    id: 2,
    title: '社会热点',
    imgUrl: ''
  }, {
    id: 3,
    title: '诗歌',
    imgUrl: ''
  }, {
    id: 4,
    title: '社招',
    imgUrl: ''
  }],
  articleList: [{
    id: 1,
    title: '',
    desc: '',
    imgUrl: '',
  }]
})

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}