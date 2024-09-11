import { Component } from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Navigate } from "react-router-dom";

import store from './store';
import Header from './common/header';
import Home from './pages/home';
import Login from './pages/login'
import Admin from './pages/admin'
import Statement from './pages/statement'
import Detail from './pages/detail';
import Projectmanagement from './pages/projectmanagement';
import PPE from './pages/ppe';
import ESG from './pages/esg';

import {
  MainWrapper,
  MainIndexlist,
  Maintop,
  Mainpageoption
} from './style';
import './index.css';

class App extends Component {
  state = {
    mainpage: 0,
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Admin', link: 'admin' },
      { id: 2, text: 'Project management', link: 'projectmanagement' },
      { id: 3, text: 'PPE', link: 'ppe' },
      { id: 4, text: 'Statement', link: 'statement' },
      { id: 5, text: 'ESG', link: 'esg' }
    ],
    eid: '',
    ename: ''
  };
  handleMouseEnter = (index) => {
    this.setState({ hoveredBox: index });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredBox: null });
  };

  setmainpage = (page) => {
    this.setState({ mainpage: page });
  }

  getaccess = () => {
    this.setState({ eid: localStorage.getItem('EID') });
    this.setState({ ename: localStorage.getItem('Ename') });
  }

  render() {
    const { hoveredBox, pages, mainpage } = this.state;
    return (
      <Provider store={store}>
        <BrowserRouter>
          {<Header />}
          <MainWrapper>
            <MainIndexlist>
              <h2 onClick={() => (<Navigate to='/' />)}>Carbon Project</h2>
              {pages.map(({ id, text, link }) => (
                <Link to={`/${link}`} key={id} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Mainpageoption
                    onClick={() => this.setmainpage(id)}
                    onMouseEnter={() => this.handleMouseEnter(id)}
                    onMouseLeave={this.handleMouseLeave}
                    className={mainpage === id || hoveredBox === id ? 'mousein' : ''}
                  >
                    {text}
                  </Mainpageoption>
                </Link>
              ))}
            </MainIndexlist>
            <MainWrapper className='context'>
              <Maintop>id:&nbsp;{this.state.eid}&nbsp;&nbsp;name:&nbsp;{this.state.ename}</Maintop>
              <Routes>
                <Route path='/' element={((localStorage.getItem('jwtToken')) != null) ? <h1>Home page</h1> : <Navigate to='/login' />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/admin' element={<Admin />}></Route>
                <Route path='/statement' element={<Statement />}></Route>
                <Route path='/projectmanagement' element={<Projectmanagement />}></Route>
                <Route path='/ppe' element={<PPE />}></Route>
                <Route path='/esg' element={<ESG />}></Route>
                <Route path='/detail/:id' element={<Detail />}></Route>
              </Routes>
            </MainWrapper>
          </MainWrapper >
        </BrowserRouter>
      </Provider >
    )
  }

  componentDidMount() {
    this.getaccess();
  }
}

export default App;