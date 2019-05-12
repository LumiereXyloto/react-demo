import React, { Fragment } from 'react';
import { GlobalStyle } from './style.js';
import { IconfontStyle } from './statics/iconfont/iconfont'
import Header from './common/header/index'
import store from './store/index'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home/index'
import Detail from './pages/detail/index'
import Login from './pages/login/index'

function App() {
  return (
    <Fragment>
      <IconfontStyle />
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    </Fragment>
    
  );
}

export default App;
