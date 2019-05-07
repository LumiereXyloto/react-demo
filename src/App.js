import React, { Fragment } from 'react';
import { GlobalStyle } from './style.js';
import { IconfontStyle } from './statics/iconfont/iconfont'
import Header from './common/header/index'
import store from './store/index'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home/index'
import Detail from './pages/detail/index'

function App() {
  return (
    <Fragment>
      <IconfontStyle />
      <GlobalStyle />
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    </Fragment>
    
  );
}

export default App;
