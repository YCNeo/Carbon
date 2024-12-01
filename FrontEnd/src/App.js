import { Component } from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import store from './store';

//import Headers from './common/header';
import Login from './pages/login'
import Admin from './pages/admin'
import Statement from './pages/statement'
import Projectmanagement from './pages/projectmanagement';
import PPE from './pages/ppe';
import ESG from './pages/esg';

import {
  MainWrapper,
  MainIndexlist,
  Mainpageoption
} from './components/style';
import './index.css';
import Header from './components/function/header';

class App extends Component {
  state = {
    mainpage: 0,
    hoveredBox: null,
    pages: [
      { id: 0, text: 'home', link: '' },
      { id: 1, text: 'ESG', link: 'esg' },
      { id: 2, text: 'Admin', link: 'admin' },
      { id: 3, text: 'Project management', link: 'projectmanagement' },
      { id: 4, text: 'PPE', link: 'ppe' },
      { id: 5, text: 'Statement', link: 'statement' }
    ]
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

  render() {
    const { hoveredBox, pages, mainpage } = this.state;
    return (
      <Provider store={store}>
        <BrowserRouter>
          {/*<Headers />*/}
          <MainWrapper className='context'>
            <Header />
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
}

export default App;