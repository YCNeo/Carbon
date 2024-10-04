import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
import {
  ComponentWapper,
  Componentindex,
  Componentinput,
  Componentbutton,
  Componenttitle,
  ComponentoptionWapper,
  Componentcheckbox,
  Innerpageoption,
  DatePickerWrapper,
  FlowWapper,
  Description,
  PMcustomStyles
} from '../../../components/style';
import { getequipment, getmaterial } from '../../admin/store/actionCreators';

class Dailyrecord extends PureComponent {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Post' },
      { id: 2, text: 'Revise' },
      { id: 3, text: 'Retieve' },
    ],
    postFormdata: {
      Date: new Date(),
      customTimeInput: "",
      equipment: [
        { name: '', amount: '', runtime: '' }
      ],
      material: [
        { name: '', amount: '', unit: '' }
      ],
      description: ''
    },
    reviseFormdata: {
      Date: new Date(),
      customTimeInput: "",
      equipment: [
        { name: '', amount: '', runtime: '' }
      ],
      material: [
        { name: '', amount: '', unit: '' }
      ],
      description: ''
    },
    retrieveFormdata: {
      Date: new Date(),
      customTimeInput: "",
    },
    display: false
  };

  handleMouseEnter = (id) => {
    this.setState({ hoveredBox: id });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredBox: null });
  };

  handleDateChange = (form, date) => {
    this.setState((prevState) => ({
      [form]: {
        ...prevState[form],
        Date: date
      }
    }));
  };

  handleTimeInputChange = (form, event) => {
    const value = event.target.value;
    this.setState((prevState) => ({
      [form]: {
        ...prevState[form],
        customTimeInput: value
      }
    }));
  };

  handleChange = (form, type, index, field, value) => {
    const newFormdata = { ...this.state[form] };
    if (type === 'equipment') {
      const newEquipment = [...newFormdata.equipment];
      newEquipment[index][field] = value;
      newFormdata.equipment = newEquipment;
    } else if (type === 'material') {
      const newMaterial = [...newFormdata.material];
      newMaterial[index][field] = value;
      newFormdata.material = newMaterial;
    }
    this.setState({ [form]: newFormdata });
  };

  addStep = (form, type) => {
    const newFormdata = { ...this.state[form] };
    if (type === 'material') {
      newFormdata.material.push({ name: '', amount: '', unit: '' });
    } else if (type === 'equipment') {
      newFormdata.equipment.push({ name: '', amount: '', runtime: '' });
    }
    this.setState({ [form]: newFormdata });
  };

  whichpage(page) {
    const materialOptions = this.props.materiallist.map(item => ({
      value: item.id,
      label: item.name
    }));

    const equipmentOptions = this.props.equipmentlist.map(item => ({
      value: item.id,
      label: item.name
    }));

    const { postFormdata, reviseFormdata, retrieveFormdata } = this.state;
    const CustomTimeInput = ({ value, onChange }) => (
      <input
        value={value}
        onChange={onChange}
        placeholder="HH:mm"
        className="custom-time-input"
      />
    );

    switch (page) {
      case 1:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>Date</Componentindex>
                <DatePickerWrapper>
                  <DatePicker
                    selected={postFormdata.Date}
                    onChange={(date) => this.handleDateChange('postFormdata', date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={30}
                    dateFormat="yyyy/MM/dd HH:mm"
                    timeCaption="time"
                    customTimeInput={<CustomTimeInput value={postFormdata.customTimeInput} onChange={(e) => this.handleTimeInputChange('postFormdata', e)} />}
                  />
                </DatePickerWrapper>
              </ComponentoptionWapper >
              {this.state.postFormdata.equipment.map((step, index) => (
                <ComponentoptionWapper className='flow' key={index}>
                  {index === 0 ? <Componentindex>Equipment</Componentindex> : <Componentindex className='blank' />}
                  <FlowWapper className='dailyrecord'>
                    {index + 1}:&nbsp;&nbsp;
                    <Select
                      placeholder="Select equipment"
                      options={equipmentOptions}
                      value={step.name}
                      onChange={(selectedOption) => this.handleChange('postFormdata', 'equipment', index, 'name', selectedOption)}
                      styles={PMcustomStyles}
                    />
                    amount:&nbsp;&nbsp;
                    <Componentinput
                      className='small'
                      value={step.amount}
                      onChange={(e) => this.handleChange('postFormdata', 'equipment', index, 'amount', e.target.value)}
                    />
                    runtime:&nbsp;&nbsp;
                    <Componentinput
                      className='small'
                      value={step.runtime}
                      onChange={(e) => this.handleChange('postFormdata', 'equipment', index, 'runtime', e.target.value)}
                    />
                  </FlowWapper>
                </ComponentoptionWapper>
              ))}
              <ComponentoptionWapper>
                <Componentbutton className='addstepDailyrecord' onClick={() => this.addStep('postFormdata', 'equipment')}>Add Step</Componentbutton>
              </ComponentoptionWapper>
              {this.state.postFormdata.material.map((step, index) => (
                <ComponentoptionWapper className='flow' key={index}>
                  {index === 0 ? <Componentindex>Materail</Componentindex> : <Componentindex className='blank' />}
                  <FlowWapper className='dailyrecord'>
                    {index + 1}:&nbsp;&nbsp;
                    <Select
                      placeholder="Select material"
                      options={materialOptions}
                      value={step.name}
                      onChange={(selectedOption) => this.handleChange('postFormdata', 'material', index, 'name', selectedOption)}
                      styles={PMcustomStyles}
                    />
                    amount:&nbsp;&nbsp;
                    <Componentinput
                      className='small'
                      value={step.amount}
                      onChange={(e) => this.handleChange('postFormdata', 'material', index, 'amount', e.target.value)}
                    />
                    unit:&nbsp;&nbsp;
                    <Componentinput
                      className='small'
                      value={step.unit}
                      onChange={(e) => this.handleChange('postFormdata', 'material', index, 'unit', e.target.value)}
                    />
                  </FlowWapper>
                </ComponentoptionWapper>
              ))}
              <ComponentoptionWapper>
                <Componentbutton className='addstepDailyrecord' onClick={() => this.addStep('postFormdata', 'material')}>Add Step</Componentbutton>
              </ComponentoptionWapper>
              <ComponentoptionWapper className='flow'>
                <Componentindex>Description</Componentindex>
                <Description
                  className='short'
                  value={this.state.postFormdata.description}
                  onChange={(e) => this.setState((prevState) => ({ postFormdata: { ...prevState.postFormdata, description: e.target.value } }))}>
                </Description>
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.dailyrecordpost(postFormdata)}>Post</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 2:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>Date</Componentindex>
                <DatePickerWrapper>
                  <DatePicker
                    selected={reviseFormdata.Date}
                    onChange={(date) => this.handleDateChange('reviseFormdata', date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={30}
                    dateFormat="yyyy/MM/dd HH:mm"
                    timeCaption="time"
                    customTimeInput={<CustomTimeInput value={reviseFormdata.customTimeInput} onChange={(e) => this.handleTimeInputChange('customTimeInput', e)} />}
                  />
                </DatePickerWrapper>
              </ComponentoptionWapper >
              {this.state.reviseFormdata.equipment.map((step, index) => (
                <ComponentoptionWapper className='flow' key={index}>
                  {index === 0 ? <Componentindex>Equipment</Componentindex> : <Componentindex className='blank' />}
                  <FlowWapper className='dailyrecord'>
                    {index + 1}:&nbsp;&nbsp;
                    <Select
                      placeholder="Select equipment"
                      options={equipmentOptions}
                      value={step.name}
                      onChange={(selectedOption) => this.handleChange('reviseFormdata', 'equipment', index, 'name', selectedOption)}
                      styles={PMcustomStyles}
                    />
                    amount:&nbsp;&nbsp;
                    <Componentinput
                      className='small'
                      value={step.amount}
                      onChange={(e) => this.handleChange('reviseFormdata', 'equipment', index, 'amount', e.target.value)}
                    />
                    runtime:&nbsp;&nbsp;
                    <Componentinput
                      className='small'
                      value={step.runtime}
                      onChange={(e) => this.handleChange('reviseFormdata', 'equipment', index, 'runtime', e.target.value)}
                    />
                  </FlowWapper>
                </ComponentoptionWapper>
              ))}
              <ComponentoptionWapper>
                <Componentbutton className='addstepDailyrecord' onClick={() => this.addStep('reviseFormdata', 'equipment')}>Add Step</Componentbutton>
              </ComponentoptionWapper>
              {this.state.reviseFormdata.material.map((step, index) => (
                <ComponentoptionWapper className='flow' key={index}>
                  {index === 0 ? <Componentindex>Materail</Componentindex> : <Componentindex className='blank' />}
                  <FlowWapper className='dailyrecord'>
                    {index + 1}:&nbsp;&nbsp;
                    <Select
                      placeholder="Select material"
                      options={materialOptions}
                      value={step.name}
                      onChange={(selectedOption) => this.handleChange('reviseFormdata', 'material', index, 'name', selectedOption)}
                      styles={PMcustomStyles}
                    />
                    amount:&nbsp;&nbsp;
                    <Componentinput
                      className='small'
                      value={step.amount}
                      onChange={(e) => this.handleChange('reviseFormdata', 'material', index, 'amount', e.target.value)}
                    />
                    unit:&nbsp;&nbsp;
                    <Componentinput
                      className='small'
                      value={step.unit}
                      onChange={(e) => this.handleChange('reviseFormdata', 'material', index, 'unit', e.target.value)}
                    />
                  </FlowWapper>
                </ComponentoptionWapper>
              ))}
              <ComponentoptionWapper>
                <Componentbutton className='addstepDailyrecord' onClick={() => this.addStep('reviseFormdata', 'material')}>Add Step</Componentbutton>
              </ComponentoptionWapper>
              <ComponentoptionWapper className='flow'>
                <Componentindex>Description</Componentindex>
                <Description
                  className='short'
                  value={this.state.reviseFormdata.description}
                  onChange={(e) => this.setState((prevState) => ({ reviseFormdata: { ...prevState.reviseFormdata, description: e.target.value } }))}>
                </Description>
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.dailyrecordrevise(reviseFormdata)}>Revise</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 3:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>Date</Componentindex>
                <DatePickerWrapper>
                  <DatePicker
                    selected={retrieveFormdata.Date}
                    onChange={(date) => this.handleDateChange('retrieveFormdata', date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={30}
                    dateFormat="yyyy/MM/dd HH:mm"
                    timeCaption="time"
                    customTimeInput={<CustomTimeInput value={retrieveFormdata.customTimeInput} onChange={(e) => this.handleTimeInputChange('customTimeInput', e)} />}
                  />
                </DatePickerWrapper>
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentbutton onClick={() => { this.props.dailyrecordretrieve(retrieveFormdata); this.setState({ display: true }); }}>Retrieve</Componentbutton>
              </ComponentoptionWapper>
              {this.state.display ?
                <div>
                  <ComponentoptionWapper>
                    <Componentcheckbox>list</Componentcheckbox>
                  </ComponentoptionWapper>
                  <ComponentoptionWapper>
                    <Componentbutton onClick={() => { this.props.setdailyrecordpage(2) }}>revise</Componentbutton>
                  </ComponentoptionWapper>
                </div>
                :
                ''}
            </ComponentWapper>
          );
        }
      default:
        return;
    }
  }

  render() {
    const { setdailyrecordpage, dailyrecordpage } = this.props;
    const { hoveredBox, pages } = this.state;
    return (
      <ComponentWapper>
        <Componenttitle>Daily Record</Componenttitle>
        <ComponentoptionWapper>
          {pages.map(({ id, text }) => (
            <Innerpageoption
              key={id}
              onClick={() => setdailyrecordpage(id)}
              onMouseEnter={() => this.handleMouseEnter(id)}
              onMouseLeave={this.handleMouseLeave}
              className={dailyrecordpage === id || hoveredBox === id ? 'mousein' : ''}
            >
              {text}
            </Innerpageoption>
          ))}
        </ComponentoptionWapper>
        {this.whichpage(dailyrecordpage)}
      </ComponentWapper>
    )
  }

  componentDidMount() {
    this.props.getmaterial();
    this.props.getequipment();
  }
}

const mapStateToProps = (state) => ({
  dailyrecordpage: state.projectmanagement.dailyrecordpage,
  materiallist: state.admin.materiallist,
  equipmentlist: state.admin.equipmentlist
})

const mapDisptchToProps = (dispatch) => {
  return {
    setdailyrecordpage(id) {
      dispatch(actionCreators.setdailyrecordpage(id));
    },
    dailyrecordpost(postFormdata) {
      const { Date, equipment, material, description } = postFormdata
      dispatch(actionCreators.dailyrecordpost(Date, equipment, material, description))
    },
    dailyrecordrevise(reviseFormdata) {
      const { Date, equipment, material, description } = reviseFormdata
      dispatch(actionCreators.dailyrecordrevise(Date, equipment, material, description));
    },
    dailyrecordretrieve(retrieveFormdata) {
      const { Date } = retrieveFormdata
      dispatch(actionCreators.dailyrecordretrieve(Date));
    },
    getmaterial() {
      dispatch(getmaterial());
    },
    getequipment() {
      dispatch(getequipment());
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Dailyrecord);