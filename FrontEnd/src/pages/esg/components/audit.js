import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
  ComponentWapper,
  Componentindex,
  Componentinput,
  Componentbutton,
  Componenttitle,
  ComponentoptionWapper,
  Innerpageoption
} from '../../../components/style';

class Audit extends PureComponent {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Internal Audit' },
      { id: 2, text: 'External Audit' }
    ]
  };

  handleMouseEnter = (id) => {
    this.setState({ hoveredBox: id });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredBox: null });
  };


  whichpage(page) {
    switch (page) {
      case 1:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>i audit</Componentindex>
                <Componentinput ref={(input) => { this.name = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentbutton>Post</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 2:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>e audit</Componentindex>
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentbutton>Post</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );        
        }
      default:
        return;
    }
  }

  render() {
    const { setauditpage, auditpage } = this.props;
    const { hoveredBox, pages } = this.state;
    return (
      <ComponentWapper>
        <Componenttitle>Audit</Componenttitle>
        <ComponentoptionWapper>
          {pages.map(({ id, text }) => (
            <Innerpageoption
              key={id}
              onClick={() => setauditpage(id)}
              onMouseEnter={() => this.handleMouseEnter(id)}
              onMouseLeave={this.handleMouseLeave}
              className={auditpage === id || hoveredBox === id ? 'mousein' : ''}
            >
              {text}
            </Innerpageoption>
          ))}
        </ComponentoptionWapper>
        {this.whichpage(auditpage)}
      </ComponentWapper>
    )
  }
}

const mapStateToProps = (state) => ({
  auditpage: state.esg.auditpage
});

const mapDisptchToProps = (dispatch) => {
  return {
    setauditpage(id) {
      dispatch(actionCreators.setauditpage(id));
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Audit);