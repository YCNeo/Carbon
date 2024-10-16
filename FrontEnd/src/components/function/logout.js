import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionCreators as loginactionCreators } from '../../pages/login/store';
import { 
  Bigbutton
} from'../style'

const Logout = (props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    props.logout();
    navigate('/login');
  }
  return (
    <div>
      <Bigbutton onClick={() => (handleLogout())}>logout</Bigbutton>
    </div>
  )

};

const mapDispatchToProps = (dispatch) => {
  return {
    logout() {
      dispatch(loginactionCreators.logout());
    }
  };
};

export default connect(null, mapDispatchToProps)(Logout);