import React, { Fragment } from 'react';
import { GlobalStyle } from './style.js';
import { IconfontStyle } from './statics/iconfont/iconfont'
import Header from './common/header/index'
import store from './store/index'
import { Provider } from 'react-redux'

function App() {
  return (
    <Fragment>
      <IconfontStyle />
      <GlobalStyle />
      <Provider store={store}>
        <Header />
      </Provider>
    </Fragment>
    
  );
}

export default App;
