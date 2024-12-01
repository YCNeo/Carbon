import React from "react";
import { connect } from "react-redux";
import { actionCreators } from './store';
import { actionCreators as loginactionCreators } from '../../pages/login/store';
import { Link, useNavigate } from 'react-router-dom';
import {
  HeaderWrapper,
  Navitem,
  Jumpbottom
} from './style';

const Headers = (props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    props.logout();
    navigate('/login');
  }

  const { login, iforgotpassword } = props;
  const [cheatpage] = React.useState(true);

  const getjwp = () => {
    const token1 = localStorage.getItem('jwtToken');
    console.log("take:" + token1);
  };

  return (
    <div>
      {cheatpage ?
        <HeaderWrapper>
          <Navitem>page list</Navitem>
          <Link to='/'><Jumpbottom>home</Jumpbottom></Link>
          {
            login ?
              <Jumpbottom onClick={handleLogout}>press to logout</Jumpbottom> :
              <div>
                <Link to='/login'><Jumpbottom onClick={() => (iforgotpassword(false))}>login</Jumpbottom></Link>
                <Jumpbottom onClick={() => (iforgotpassword(true))}>revisepassword</Jumpbottom>
              </div>
          }
          <Link to='/admin'><Jumpbottom onClick={() => (iforgotpassword(false))}>admin (need login)</Jumpbottom></Link>
          <Link to='/statement'><Jumpbottom>statement</Jumpbottom></Link>
          <Link to='/projectmanagement'><Jumpbottom>project management</Jumpbottom></Link>
          <Link to='/ppe'><Jumpbottom>PPE</Jumpbottom></Link>
          <Link to='/esg'><Jumpbottom>ESG</Jumpbottom></Link>
          <button onClick={getjwp}>get JWT</button>
          <button onClick={() => (localStorage.setItem('authority', 'admin'))}>admin</button>
          <button onClick={() => (localStorage.setItem('authority', 'member'))}>member</button>
          <button onClick={() => (localStorage.setItem('authority', 'read_only'))}>read only</button>
        </HeaderWrapper>
        : null
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused,
    list: state.header.list,
    page: state.header.page,
    mousein: state.header.mousein,
    totalpage: state.header.totalpage,
    login: state.login.login
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout() {
      dispatch(loginactionCreators.logout());
    },
    iforgotpassword(value) {
      dispatch(actionCreators.iforgotpassword(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Headers);
