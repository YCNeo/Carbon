import { Component } from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import store from './store';
import Header from './common/header';
import Login from './pages/login'
import Admin from './pages/admin'
import Statement from './pages/statement'
import Projectmanagement from './pages/projectmanagement';
import PPE from './pages/ppe';
import ESG from './pages/esg';

import {
  MainWrapper,
  MainIndexlist,
  Maintop,
  Mainpageoption
} from './components/style';
import './index.css';
import Logout from './components/function/logout';

class App extends Component {
  state = {
    mainpage: 0,
    hoveredBox: null,
    pages: [
      { id: 0, text: 'home', link: '' },
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

  getinfo = () => {
    this.setState({ eid: localStorage.getItem('EID'), ename: localStorage.getItem('Ename') });
  }

  render() {
    const { hoveredBox, pages, mainpage } = this.state;
    return (
      <Provider store={store}>
        <BrowserRouter>
          {<Header />}
          <MainWrapper className='context'>
            <Maintop>
              <h2>Carbon Project</h2>
              {this.state.eid}&nbsp;&nbsp;{this.state.ename}
              <Logout />
            </Maintop>
            <MainWrapper>
              <MainIndexlist>
                {pages.map(({ id, text, link }) => (
                  (localStorage.getItem('authority') === 'admin' || text !== 'Admin') && (
                    <Link to={`/${link}`} key={id} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Mainpageoption
                        onClick={() => { this.setmainpage(id) }}
                        onMouseEnter={() => this.handleMouseEnter(id)}
                        onMouseLeave={this.handleMouseLeave}
                        className={mainpage === id || hoveredBox === id ? 'mousein' : ''}
                      >
                        {text}
                      </Mainpageoption>
                    </Link>
                  )
                ))}
              </MainIndexlist>
              <Routes>
                <Route path='/' element={<h1>Home page</h1>}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/admin' element={<Admin />}></Route>
                <Route path='/statement' element={<Statement />}></Route>
                <Route path='/projectmanagement' element={<Projectmanagement />}></Route>
                <Route path='/ppe' element={<PPE />}></Route>
                <Route path='/esg' element={<ESG />}></Route>
              </Routes>
            </MainWrapper>
          </MainWrapper >
        </BrowserRouter>
      </Provider >
    )
  }

  componentDidMount() {
    this.getinfo();
  }
}

export default App;