import React, { Component } from 'react';
import { connect } from "react-redux";
import { actionCreators } from './store';
import { Navigate } from "react-router-dom";

import BoundaryEdition from './components/boundarymanagement';
import Source from './components/source';
import Statement from './components/statement';
import Audit from './components/audit';

import {
  ESGWrapper,
  ESGIndexlist,
  ESGPage,
  ESGpageoption
} from "./style";

class ESG extends Component {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Boundary Edition' },
      { id: 2, text: 'Source' },
      { id: 3, text: 'Statement' },
      { id: 4, text: 'Audit' }
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
        return <Source />;
      case 3:
        return <Statement />;
      case 4:
        return <Audit />;
      default:
        return <BoundaryEdition />;
    }
  }

  render() {
    const { setesgpage, esgpage } = this.props;
    const { hoveredBox, pages } = this.state;
    if (localStorage.getItem('jwtToken') != null) {
      return (
        <ESGWrapper>
          <ESGIndexlist>
            {pages.map(({ id, text }) => (
              <ESGpageoption
                key={id}
                onClick={() => setesgpage(id)}
                onMouseEnter={() => this.handleMouseEnter(id)}
                onMouseLeave={this.handleMouseLeave}
                className={esgpage === id || hoveredBox === id ? 'mousein' : ''}
              >
                {text}
              </ESGpageoption>
            ))}
          </ESGIndexlist>
          <ESGPage>
            {this.whichpage(esgpage)}
          </ESGPage>
        </ESGWrapper>
      )
    } else {
      return <Navigate to='/login' />
    }
  }
}

const mapStateToProps = (state) => ({
  esgpage: state.esg.esgpage,
});

const mapDispatchToProps = (dispatch) => ({
  setesgpage(page) {
    dispatch(actionCreators.setesgpage(page));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ESG);