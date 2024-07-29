import { Component } from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import store from './store';
import Header from './common/header';
import Home from './pages/home';
import Login from './pages/login'
import Admin from './pages/admin'
import Statement from './pages/statement'
import Detail from './pages/detail';
import Projectmanagement from './pages/projectmanagement';

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
            <Route path='/statement' element={<Statement />}></Route>
            <Route path='/projectmanagement' element={<Projectmanagement />}></Route>
            <Route path='/detail/:id' element={<Detail />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider >
    )
  }
}

export default App;