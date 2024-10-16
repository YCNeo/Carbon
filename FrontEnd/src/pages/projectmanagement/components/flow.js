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
  Innerpageoption,
  FlowWapper,
  Description,
  PMcustomStyles
} from '../../../components/style';
import { getequipment, getmaterial } from '../../admin/store/actionCreators';

class Flow extends PureComponent {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Design' },
      { id: 2, text: 'Revise' }
    ],
    designSteps: [
      { equipment: '', material: '', description: '' }
    ],
    reviseSteps: [
      { equipment: '', material: '', description: '' }
    ]
  };

  handleMouseEnter = (id) => {
    this.setState({ hoveredBox: id });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredBox: null });
  };

  addStep = (page) => {
    this.setState((prevState) => ({
      [`${page}Steps`]: [...prevState[`${page}Steps`], { equipment: '', material: '', description: '' }]
    }));
  };

  handleChange = (page, index, field, value) => {
    const newSteps = [...this.state[`${page}Steps`]];
    newSteps[index][field] = value;
    this.setState({ [`${page}Steps`]: newSteps });
  };

  whichpage(page) {
    const { designSteps, reviseSteps } = this.state;
    const materialOptions = this.props.materiallist.map(item => ({
      value: item.id,
      label: item.name
    }));

    const equipmentOptions = this.props.equipmentlist.map(item => ({
      value: item.id,
      label: item.name
    }));

    switch (page) {
      case 1:
        return (
          <ComponentWapper>
            {designSteps.map((step, index) => (
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
                      onChange={(selectedOption) => this.handleChange('design', index, 'equipment', selectedOption)}
                      styles={PMcustomStyles}
                    />
                    <Componentindex>Material</Componentindex>
                    <Select
                      placeholder="Select material"
                      options={materialOptions}
                      value={step.material}
                      isMulti
                      closeMenuOnSelect={false}
                      onChange={(selectedOption) => this.handleChange('design', index, 'material', selectedOption)}
                      styles={PMcustomStyles}
                    />
                  </FlowWapper>
                  <FlowWapper>
                    <Componentindex>Description</Componentindex>
                    <Description
                      value={step.description}
                      onChange={(e) => this.handleChange('design', index, 'description', e.target.value)}
                    />
                  </FlowWapper>
                </FlowWapper>
              </ComponentoptionWapper>
            ))}
            <ComponentoptionWapper>
              <Componentbutton className='addstep' onClick={() => this.addStep('design')}>Add Step</Componentbutton>
            </ComponentoptionWapper>
            <ComponentoptionWapper>
              <Componentbutton onClick={() => this.props.flowdesign(designSteps)}>Post</Componentbutton>
            </ComponentoptionWapper>
          </ComponentWapper>
        );
      case 2:
        return (
          <ComponentWapper>
            {reviseSteps.map((step, index) => (
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
                      onChange={(selectedOption) => this.handleChange('revise', index, 'equipment', selectedOption)}
                      styles={PMcustomStyles}
                    />
                    <Componentindex>Material</Componentindex>
                    <Select
                      placeholder="Select material"
                      options={materialOptions}
                      value={step.material}
                      isMulti
                      closeMenuOnSelect={false}
                      onChange={(selectedOption) => this.handleChange('revise', index, 'material', selectedOption)}
                      styles={PMcustomStyles}
                    />
                  </FlowWapper>
                  <FlowWapper>
                    <Componentindex>Description</Componentindex>
                    <Description
                      value={step.description}
                      onChange={(e) => this.handleChange('revise', index, 'description', e.target.value)}
                    />
                  </FlowWapper>
                </FlowWapper>
              </ComponentoptionWapper>
            ))}
            <ComponentoptionWapper>
              <Componentbutton className='addstep' onClick={() => this.addStep('revise')}>Add Step</Componentbutton>
            </ComponentoptionWapper>
            <ComponentoptionWapper>
              <Componentbutton onClick={() => this.props.flowrevise(reviseSteps)}>Post</Componentbutton>
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
            (localStorage.getItem('pm_rank') === 'pm' || text === 'Design') && (
              <Innerpageoption
                key={id}
                onClick={() => setflowpage(id)}
                onMouseEnter={() => this.handleMouseEnter(id)}
                onMouseLeave={this.handleMouseLeave}
                className={flowpage === id || hoveredBox === id ? 'mousein' : ''}
              >
                {text}
              </Innerpageoption>
            )
          ))}
        </ComponentoptionWapper>
        {this.whichpage(flowpage)}
      </ComponentWapper>
    );
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
});

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
  };
};

export default connect(mapStateToProps, mapDisptchToProps)(Flow);