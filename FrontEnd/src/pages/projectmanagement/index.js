import React, { Component } from 'react';
import { connect } from "react-redux";
import { actionCreators } from './store';
import { Navigate } from "react-router-dom";

import Member from './components/member';
import Flow from './components/flow';
import Material from './components/material';
import Equipment from './components/equipment';
import Dailyrecord from './components/dailyrecord';

import {
  PageWrapper,
  PageIndexlist,
  PagePage,
  Pagepageoption
} from "../../components/style";

class Projectmanagement extends Component {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Member' },
      { id: 2, text: 'Flow' },
      { id: 3, text: 'Material' },
      { id: 4, text: 'Equipment' },
      { id: 5, text: 'Daily Record' }
    ]
  };

  handleMouseEnter = (index) => {
    this.setState({ hoveredBox: index });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredBox: null });
  };

  whichpage(Projectmanagementpage) {
    switch (Projectmanagementpage) {
      case 2:
        return <Flow />;
      case 3:
        return <Material />;
      case 4:
        return <Equipment />;
      case 5:
        return <Dailyrecord />;
      default:
        return <Member />;
    }
  }

  render() {
    const { setprojectmanagementpage, projectmanagementpage } = this.props;
    const { hoveredBox, pages } = this.state;

    if (localStorage.getItem('jwtToken') != null) {
      return (
        <PageWrapper>
          <PageIndexlist>
            {pages.map(({ id, text }) => (
              <Pagepageoption
                key={id}
                onClick={() => setprojectmanagementpage(id)}
                onMouseEnter={() => this.handleMouseEnter(id)}
                onMouseLeave={this.handleMouseLeave}
                className={projectmanagementpage === id || hoveredBox === id ? 'mousein' : ''}
              >
                {text}
              </Pagepageoption>
            ))}
          </PageIndexlist>
          <PagePage>
            {this.whichpage(projectmanagementpage)}
          </PagePage>
        </PageWrapper>
      )
    } else {
      return <Navigate to='/login' />
    }
  }
}

const mapStateToProps = (state) => ({
  loginstate: state.login.login,
  projectmanagementpage: state.projectmanagement.projectmanagementpage,
});

const mapDispatchToProps = (dispatch) => ({
  setprojectmanagementpage(page) {
    dispatch(actionCreators.setprojectmanagementpage(page));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Projectmanagement);