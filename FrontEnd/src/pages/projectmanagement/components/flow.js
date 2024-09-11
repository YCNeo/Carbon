import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import Select from 'react-select';
import {
  ComponentWapper,
  Componentindex,
  Componentbutton,
  Componenttitle,
  ComponentoptionWapper,
  Projectmanagementinnerpageoption,
  FlowWapper,
  Description,
  customStyles
} from '../style';
import { getequipment, getmaterial } from '../../admin/store/actionCreators';

class Flow extends PureComponent {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Design' },
      { id: 2, text: 'Revise' }
    ],
    steps: [
      { equipment: '', material: '', description: '' }
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
        {
          const materialOptions = this.props.materiallist.map(item => ({
            value: item.id,
            label: item.name
          }));

          const equipmentOptions = this.props.equipmentlist.map(item => ({
            value: item.id,
            label: item.name
          }));
          return (
            <ComponentWapper>
              {this.state.steps.map((step, index) => (
                <ComponentoptionWapper className='flow' key={index}>
                  <Componentindex>Step {index + 1}</Componentindex>
                  <FlowWapper className='step'>
                    <FlowWapper>
                      <Componentindex>Equipment</Componentindex>
                      <Select
                        placeholder="Select equipment"
                        options={equipmentOptions}
                        value={step.equipment}
                        isMulti
                        closeMenuOnSelect={false}
                        onChange={(selectedOption) => this.handleChange(index, 'equipment', selectedOption)}
                        styles={customStyles}
                      />
                      <Componentindex>Material</Componentindex>
                      <Select
                        placeholder="Select access"
                        options={materialOptions}
                        value={step.material}
                        isMulti
                        closeMenuOnSelect={false}
                        onChange={(selectedOption) => this.handleChange(index, 'material', selectedOption)}
                        styles={customStyles}
                      />
                    </FlowWapper>
                    <FlowWapper>
                      <Componentindex>Description</Componentindex>
                      <Description
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
        }
      case 2:
        {
          const materialOptions = this.props.materiallist.map(item => ({
            value: item.id,
            label: item.name
          }));

          const equipmentOptions = this.props.equipmentlist.map(item => ({
            value: item.id,
            label: item.name
          }));
          return (
            <ComponentWapper>
              {this.state.steps.map((step, index) => (
                <ComponentoptionWapper className='flow' key={index}>
                  <Componentindex>Step {index + 1}</Componentindex>
                  <FlowWapper className='step'>
                    <FlowWapper>
                      <Componentindex>Equipment</Componentindex>
                      <Select
                        placeholder="Select equipment"
                        options={equipmentOptions}
                        value={step.equipment}
                        isMulti
                        closeMenuOnSelect={false}
                        onChange={(selectedOption) => this.handleChange(index, 'equipment', selectedOption)}
                        styles={customStyles}
                      />
                      <Componentindex>Material</Componentindex>
                      <Select
                        placeholder="Select access"
                        options={materialOptions}
                        value={step.material}
                        isMulti
                        closeMenuOnSelect={false}
                        onChange={(selectedOption) => this.handleChange(index, 'material', selectedOption)}
                        styles={customStyles}
                      />
                    </FlowWapper>
                    <FlowWapper>
                      <Componentindex>Description</Componentindex>
                      <Description
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
                <Componentbutton onClick={() => this.props.flowrevise(this.state.steps)}>Post</Componentbutton>
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

  componentDidMount() {
    this.props.getmaterial();
    this.props.getequipment();
  }
}

const mapStateToProps = (state) => ({
  flowpage: state.projectmanagement.flowpage,
  materiallist: state.admin.materiallist,
  equipmentlist: state.admin.equipmentlist
})

const mapDisptchToProps = (dispatch) => {
  return {
    setflowpage(id) {
      dispatch(actionCreators.setflowpage(id));
    },
    flowdesign(steps) {
      dispatch(actionCreators.flowdesign(steps));
    },
    flowrevise(steps) {
      dispatch(actionCreators.flowrevise(steps));
    },
    getmaterial() {
      dispatch(getmaterial());
    },
    getequipment() {
      dispatch(getequipment());
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Flow);