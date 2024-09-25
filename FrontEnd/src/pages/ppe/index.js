import React, { Component } from 'react';
import { connect } from "react-redux";
import { actionCreators } from './store';
import { Navigate } from "react-router-dom";

import Material from './components/material';
import Equipment from './components/equipment';

import {
  PageWrapper,
  PageIndexlist,
  PagePage,
  Pagepageoption
} from "../../components/style";

class PPE extends Component {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Material' },
      { id: 2, text: 'Equipment' }
    ]
  };

  handleMouseEnter = (index) => {
    this.setState({ hoveredBox: index });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredBox: null });
  };

  whichpage(page) {
    switch (page) {
      case 2:
        return <Equipment />;
      default:
        return <Material />;
    }
  }

  render() {
    const { setppepage, ppepage } = this.props;
    const { hoveredBox, pages } = this.state;
    if (localStorage.getItem('jwtToken') != null) {
      return (
        <PageWrapper>
          <PageIndexlist>
            {pages.map(({ id, text }) => (
              <Pagepageoption
                key={id}
                onClick={() => setppepage(id)}
                onMouseEnter={() => this.handleMouseEnter(id)}
                onMouseLeave={this.handleMouseLeave}
                className={ppepage === id || hoveredBox === id ? 'mousein' : ''}
              >
                {text}
              </Pagepageoption>
            ))}
          </PageIndexlist>
          <PagePage>
            {this.whichpage(ppepage)}
          </PagePage>
        </PageWrapper>
      )
    } else {
      return <Navigate to='/login' />
    }
  }
}

const mapStateToProps = (state) => ({
  ppepage: state.ppe.ppepage,
});

const mapDispatchToProps = (dispatch) => ({
  setppepage(page) {
    dispatch(actionCreators.setppepage(page));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PPE);