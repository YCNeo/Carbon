import React from 'react';
import { connect } from 'react-redux';
import {
  Maintop,
  HeaderWapper
} from '../style';
import Logout from './logout';

const Header = (props) => {
  const { eid, ename } = props;
  return (
    <Maintop>
      <h2>Carbon Project</h2>
      <HeaderWapper>
        {eid}&nbsp;&nbsp;{ename}
        <Logout />
      </HeaderWapper>
    </Maintop>
  )
};

const mapStateToProps = (state) => ({
  eid: state.login.EID,
  ename: state.login.Ename
});

export default connect(mapStateToProps, null)(Header);