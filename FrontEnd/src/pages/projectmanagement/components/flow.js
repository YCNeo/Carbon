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
  Projectmanagementinnerpageoption,
  FlowWapper,
  Description
} from '../style';

class Flow extends PureComponent {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Design' },
      { id: 2, text: 'Revise' }
    ],
    steps: [
      { equipment: '', material: '', description: '' } // Initial step
    ]
  };

  handleMouseEnter = (id) => {
    this.setState({ hoveredBox: id });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredBox: null });
  };

  addStep = () => {
    this.setState((prevState) => ({
      steps: [...prevState.steps, { equipment: '', material: '', description: '' }]
    }));
  };

  handleChange = (index, field, value) => {
    const newSteps = [...this.state.steps];
    newSteps[index][field] = value;
    this.setState({ steps: newSteps });
  };

  whichpage(page) {
    switch (page) {
      case 1:
        return (
          <ComponentWapper>
            {this.state.steps.map((step, index) => (
              <ComponentoptionWapper className='flow' key={index}>
                <Componentindex>Step {index + 1}</Componentindex>
                <FlowWapper className='step'>
                  <FlowWapper>
                    <Componentindex>Equipment</Componentindex>
                    <Componentinput
                      className='flow'
                      value={step.equipment}
                      onChange={(e) => this.handleChange(index, 'equipment', e.target.value)}
                    />
                    <Componentindex>Material</Componentindex>
                    <Componentinput
                      className='flow'
                      value={step.material}
                      onChange={(e) => this.handleChange(index, 'material', e.target.value)}
                    />
                  </FlowWapper>
                  <FlowWapper>
                    <Componentindex>Description</Componentindex>
                    <Description
                      className='big'
                      value={step.description}
                      onChange={(e) => this.handleChange(index, 'description', e.target.value)}
                    />
                  </FlowWapper>
                </FlowWapper>
              </ComponentoptionWapper>
            ))}
            <ComponentoptionWapper>
              <Componentbutton className='addstep' onClick={this.addStep}>Add Step</Componentbutton>
            </ComponentoptionWapper>
            <ComponentoptionWapper>
              <Componentbutton onClick={() => this.props.flowdesign(this.state.steps)}>Post</Componentbutton>
            </ComponentoptionWapper>
          </ComponentWapper>
        );
      case 2:
        return (
          <ComponentWapper>
            <ComponentoptionWapper>
              <Componentindex>EID</Componentindex>
              <Description ref={(input) => { this.eid = input }} />
            </ComponentoptionWapper>
            <ComponentoptionWapper>
              <Componentbutton onClick={() => this.props.flowrevise(this.eid)}>Post</Componentbutton>
            </ComponentoptionWapper>
          </ComponentWapper>
        );
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
    flowdesign(steps) {
      dispatch(actionCreators.flowdesign(steps));
    },
    flowrevise(eid) {
      dispatch(actionCreators.flowrevise(eid.value));
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Flow);