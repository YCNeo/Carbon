import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import Select from 'react-select';
import {
  ComponentWapper,
  Componentindex,
  Componentbutton,
  Componenttitle,
  Componentinput,
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
    reviseSteps: [{
      equipments: [
        {
          PN: '', amount: '', unit: ''
        }
      ],
      materials: [
        {
          PN: '', amount: '', unit: ''
        }
      ],
      description: ''
    }],
    flowlist: []
  };

  handleMouseEnter = (id) => {
    this.setState({ hoveredBox: id });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredBox: null });
  };

  addStep = (page, index, target) => {
    const newSteps = [...this.state[`${page}Steps`]];
    if (target === 'equipment') {
      newSteps[index].equipments.push({ PN: '', amount: '', unit: '' });
    } else if (target === 'material') {
      newSteps[index].materials.push({ PN: '', amount: '', unit: '' });
    } else {
      newSteps.push({
        equipments: [{ PN: '', amount: '', unit: '' }],
        materials: [{ PN: '', amount: '', unit: '' }],
        description: ''
      });
    }
    this.setState({ [`${page}Steps`]: newSteps });
  };

  handleChange = (page, index, type, field, subIndex, value) => {
    const newSteps = [...this.state[`${page}Steps`]];
    if (type === 'description') {
      newSteps[index][type] = value;
    } else {
      newSteps[index][type][subIndex][field] = value;
    }
    this.setState({ [`${page}Steps`]: newSteps });
  };

  editflowlist = () => {
    const formatFlowlist = this.props.flowlist.map(step => {

      const formattedEquipments = step.equipments.map(equipment => {
        const matchedEquipment = this.props.equipmentlist.find(item => item.PN === equipment.PN);
        return {
          ...equipment,
          PN: matchedEquipment ? {
            value: matchedEquipment.id,
            PN: matchedEquipment.PN,
            label: matchedEquipment.name
          } : equipment.PN
        };
      });

      const formattedMaterials = step.materials.map(material => {
        const matchedMaterial = this.props.materiallist.find(item => item.PN === material.PN);
        return {
          ...material,
          PN: matchedMaterial ? {
            value: matchedMaterial.id,
            PN: matchedMaterial.PN,
            label: matchedMaterial.name
          } : material.PN
        };
      });

      return {
        ...step,
        equipments: formattedEquipments,
        materials: formattedMaterials
      };
    });
    this.setState({ flowlist: formatFlowlist, reviseSteps: formatFlowlist });
  }

  deletestep = (index) => {
    const newSteps = [...this.state.reviseSteps];
    newSteps.splice(index, 1);
    this.setState({ reviseSteps: newSteps });
  };

  deleteoption = (index, type, subIndex) => {
    const newSteps = [...this.state.reviseSteps];
    newSteps[index][type].splice(subIndex, 1);
    this.setState({ reviseSteps: newSteps });
  };

  whichpage(page) {
    const { reviseSteps } = this.state;
    const materialOptions = this.props.materiallist.map(item => ({
      value: item.id,
      label: item.name,
      PN: item.PN
    }));

    const equipmentOptions = this.props.equipmentlist.map(item => ({
      value: item.id,
      label: item.name,
      PN: item.PN
    }));

    switch (page) {
      case 1:
        return (
          <ComponentWapper>
            {this.state.flowlist.map((step, index) => (
              <ComponentoptionWapper className='flow' key={index}>
                <Componentindex>Step {index + 1}</Componentindex>
                <FlowWapper className='step'>
                  {step.equipments.map((equipment, subIndex) => (
                    <FlowWapper className='stepoption' key={subIndex}>
                      <Componentindex>Equipment</Componentindex>
                      <Select
                        placeholder="Select equipment"
                        options={equipmentOptions}
                        readOnly
                        value={equipment.PN}
                        styles={PMcustomStyles}
                      />
                      <Componentindex>Amount</Componentindex>
                      <Componentinput
                        className='small'
                        value={equipment.amount}
                        readOnly
                      />
                      <Componentindex>Unit</Componentindex>
                      <Componentinput
                        className='small'
                        value={equipment.unit}
                        readOnly
                      />
                    </FlowWapper>
                  ))}
                  {step.materials.map((material, subIndex) => (
                    <FlowWapper className='stepoption' key={subIndex}>
                      <Componentindex>Material</Componentindex>
                      <Select
                        placeholder="Select material"
                        options={materialOptions}
                        readOnly
                        value={material.PN}
                        styles={PMcustomStyles}
                      />
                      <Componentindex>Amount</Componentindex>
                      <Componentinput
                        className='small'
                        value={material.amount}
                        readOnly
                      />
                      <Componentindex>Unit</Componentindex>
                      <Componentinput
                        className='small'
                        value={material.unit}
                        readOnly
                      />
                    </FlowWapper>
                  ))}
                  <FlowWapper>
                    <Componentindex>Description</Componentindex>
                    <Description
                      value={step.description}
                      readOnly
                    />
                  </FlowWapper>
                </FlowWapper>
              </ComponentoptionWapper>
            ))}
          </ComponentWapper>
        );
      case 2:
        return (
          <ComponentWapper>
            {reviseSteps.map((step, index) => (
              <ComponentoptionWapper className='flow' key={index}>
                <FlowWapper className='step'>
                  <Componentindex className='bottom'>Step {index + 1}</Componentindex>
                  <Componentindex className='remove' onClick={() => (this.deletestep(index))}>delete step</Componentindex>
                </FlowWapper>
                <FlowWapper className='step'>
                  {step.equipments.map((equipment, subIndex) => (
                    <FlowWapper className='stepoption' key={subIndex}>
                      <Componentindex>Equipment</Componentindex>
                      <Select
                        placeholder="Select equipment"
                        options={equipmentOptions}
                        value={equipment.PN}
                        onChange={(selectedOption) => this.handleChange('revise', index, 'equipments', 'PN', subIndex, selectedOption)}
                        styles={PMcustomStyles}
                      />
                      <Componentindex>Amount</Componentindex>
                      <Componentinput
                        className='small'
                        value={equipment.amount}
                        onChange={(e) => this.handleChange('revise', index, 'equipments', 'amount', subIndex, e.target.value)}
                      />
                      <Componentindex>Unit</Componentindex>
                      <Componentinput
                        className='small'
                        value={equipment.unit}
                        onChange={(e) => this.handleChange('revise', index, 'equipments', 'unit', subIndex, e.target.value)}
                      />
                      <Componentindex className='remove' onClick={() => (this.deleteoption(index, 'equipments', subIndex))}>delete this</Componentindex>
                    </FlowWapper>
                  ))}
                  <Componentbutton className='addstepEM' onClick={() => this.addStep('revise', index, 'equipments')}>Add equipment</Componentbutton>
                  {step.materials.map((material, subIndex) => (
                    <FlowWapper className='stepoption' key={subIndex}>
                      <Componentindex>Material</Componentindex>
                      <Select
                        placeholder="Select material"
                        options={materialOptions}
                        value={material.PN}
                        onChange={(selectedOption) => this.handleChange('revise', index, 'materials', 'PN', subIndex, selectedOption)}
                        styles={PMcustomStyles}
                      />
                      <Componentindex>Amount</Componentindex>
                      <Componentinput
                        className='small'
                        value={material.amount}
                        onChange={(e) => this.handleChange('revise', index, 'materials', 'amount', subIndex, e.target.value)}
                      />
                      <Componentindex>Unit</Componentindex>
                      <Componentinput
                        className='small'
                        value={material.unit}
                        onChange={(e) => this.handleChange('revise', index, 'materials', 'unit', subIndex, e.target.value)}
                      />
                      <Componentindex className='remove' onClick={() => (this.deleteoption(index, 'materials', subIndex))}>delete this</Componentindex>
                    </FlowWapper>
                  ))}
                  <Componentbutton className='addstepEM' onClick={() => this.addStep('revise', index, 'materials')}>Add material</Componentbutton>
                  <FlowWapper>
                    <Componentindex>Description</Componentindex>
                    <Description
                      value={step.description}
                      onChange={(e) => this.handleChange('revise', index, 'description', null, 0, e.target.value)}
                    />
                  </FlowWapper>
                </FlowWapper>
              </ComponentoptionWapper>
            ))}
            <ComponentoptionWapper>
              <Componentbutton className='addstep' onClick={() => this.addStep('revise', null, null)}>Add Step</Componentbutton>
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
    this.props.getflow();
  }

  componentDidUpdate() {
    if (this.props.updateflowlist) {
      this.props.setflowpage(1);
      (this.props.flowlist.length === 0 && localStorage.getItem('pm_rank') === 'pm') ? this.props.setflowpage(2) : this.editflowlist();
      this.props.updateflow();
    }
  }
}

const mapStateToProps = (state) => ({
  flowpage: state.projectmanagement.flowpage,
  materiallist: state.admin.materiallist,
  equipmentlist: state.admin.equipmentlist,
  flowlist: state.projectmanagement.flowlist,
  updateflowlist: state.projectmanagement.updateflowlist
});

const mapDisptchToProps = (dispatch) => {
  return {
    setflowpage(id) {
      dispatch(actionCreators.setflowpage(id));
    },
    flowrevise(steps) {
      const formatSteps = steps.map(step => ({
        ...step,
        equipments: step.equipments.map(equipment => ({
          ...equipment,
          PN: equipment.PN.PN
        })),
        materials: step.materials.map(material => ({
          ...material,
          PN: material.PN.PN
        }))
      }));

      dispatch(actionCreators.flowrevise(formatSteps));
    },
    getmaterial() {
      dispatch(getmaterial());
    },
    getequipment() {
      dispatch(getequipment());
    },
    getflow() {
      dispatch(actionCreators.getflow());
    },
    updateflow() {
      dispatch(actionCreators.updateflow());
    }
  };
};

export default connect(mapStateToProps, mapDisptchToProps)(Flow);