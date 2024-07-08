import { Component } from 'react'
import Header from './common/header';
import store from './store';
import Admin from './pages/admin'
import Login from './pages/login'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<h1>this is main page</h1>}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/admin' element={<Admin />}></Route>
            <Route path='/detail/:id' element={<Detail />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider >
    )
  }
}

export default App;