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
  Projectmanagementinnerpageoption
} from '../style';

class Flow extends PureComponent {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Design' },
      { id: 2, text: 'Revise' }
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
                <Componentindex>EID</Componentindex>
                <Componentinput ref={(input) => { this.eid = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentbutton className='reject' onClick={() => this.props.flowdesign(this.eid)}>Post</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 2:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>EID</Componentindex>
                <Componentinput ref={(input) => { this.eid = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentbutton className='reject' onClick={() => this.props.flowrevise(this.eid)}>Post</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      default:
        return;
    }
  }

  render() {
    const { setflowpage, flowpage } = this.props;
    const { hoveredBox, pages } = this.state;
    return (
      <ComponentWapper>
        <Componenttitle>Flow</Componenttitle>
        <ComponentoptionWapper>
          {pages.map(({ id, text }) => (
            <Projectmanagementinnerpageoption
              key={id}
              onClick={() => setflowpage(id)}
              onMouseEnter={() => this.handleMouseEnter(id)}
              onMouseLeave={this.handleMouseLeave}
              className={flowpage === id || hoveredBox === id ? 'mousein' : ''}
            >
              {text}
            </Projectmanagementinnerpageoption>
          ))}
        </ComponentoptionWapper>
        {this.whichpage(flowpage)}
      </ComponentWapper>
    )
  }
}

const mapStateToProps = (state) => ({
  flowpage: state.projectmanagement.flowpage
})

const mapDisptchToProps = (dispatch) => {
  return {
    setflowpage(id) {
      dispatch(actionCreators.setflowpage(id));
    },
    flowdesign(eid) {
      dispatch(actionCreators.flowdesign(eid.value));
    },
    flowrevise(eid) {
      dispatch(actionCreators.flowrevise(eid.value));
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Flow);