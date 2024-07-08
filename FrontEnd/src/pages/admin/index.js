import React, { Component } from 'react';
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { actionCreators } from './store';
import Accessassignment from './components/Accessassignment';
import Approve from './components/Approve';
import Createproject from './components/Createproject';
import Createuser from './components/Createuser';
import Employee from './components/Employee';
import {
  AdminWrapper,
  AdminIndexlist,
  AdminHead,
  AdminContent,
  AdminPage,
  Adminpageoption
} from "./style";

class Admin extends Component {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Create User' },
      { id: 2, text: 'Access Assignment' },
      { id: 3, text: 'Create Project' },
      { id: 4, text: 'Approve' },
      { id: 5, text: 'Employee' }
    ]
  };

  handleMouseEnter = (index) => {
    this.setState({ hoveredBox: index });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredBox: null });
  };

  whichpage(adminpage) {
    switch (adminpage) {
      case 2:
        return <Accessassignment />;
      case 3:
        return <Createproject />;
      case 4:
        return <Approve />;
      case 5:
        return <Employee />;
      default:
        return <Createuser />;
    }
  }

  render() {
    const { loginstate, setadminpage, adminpage } = this.props;
    const { hoveredBox, pages } = this.state;

    if (loginstate) {
      return (
        <AdminWrapper>
          <AdminHead />
          <AdminContent>
            <AdminIndexlist>
              {pages.map(({ id, text }) => (
                <Adminpageoption
                  key={id}
                  onClick={() => setadminpage(id)}
                  onMouseEnter={() => this.handleMouseEnter(id)}
                  onMouseLeave={this.handleMouseLeave}
                  className={adminpage === id || hoveredBox === id ? 'mousein' : ''}
                >
                  {text}
                </Adminpageoption>
              ))}
            </AdminIndexlist>
            <AdminPage>
              {this.whichpage(adminpage)}
            </AdminPage>
          </AdminContent>
        </AdminWrapper>
      )
    } else {
      return <Navigate to='/login' />
    }
  }
}

const mapStateToProps = (state) => ({
  loginstate: state.login.login,
  adminpage: state.admin.adminpage,
});

const mapDispatchToProps = (dispatch) => ({
  setadminpage(page) {
    dispatch(actionCreators.setadminpage(page));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);