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
  Projectmanagementinnerpageoption,
  DatePickerWrapper,
  FlowWapper,
  Description,
  customStyles
} from '../style';
import { getequipment, getmaterial } from '../../admin/store/actionCreators';

class Dailyrecord extends PureComponent {
  state = {
    hoveredBox: null,
    Date: new Date(),
    customTimeInput: "",
    pages: [
      { id: 1, text: 'Post' },
      { id: 2, text: 'Revise' },
      { id: 3, text: 'Retieve' },
    ],
    equipment: [
      { name: '', amount: '', runtime: '' }
    ],
    material: [
      { name: '', amount: '', unit: '' }
    ],
    description: '',
    display: false
  };

  handleMouseEnter = (id) => {
    this.setState({ hoveredBox: id });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredBox: null });
  };

  handleDateChange = (field, date) => {
    this.setState({ [field]: date });
  };

  handleTimeInputChange = (field, event) => {
    this.setState({ [field]: event.target.value });
  };

  addStepM = () => {
    this.setState((prevState) => ({
      material: [...prevState.material, { name: '', amount: '', unit: '' }]
    }));
  };

  handleChangeM = (index, field, value) => {
    const newSteps = [...this.state.material];
    newSteps[index][field] = value;
    this.setState({ material: newSteps });
  };

  addStepE = () => {
    this.setState((prevState) => ({
      equipment: [...prevState.equipment, { name: '', amount: '', runtime: '' }]
    }));
  };

  handleChangeE = (index, field, value) => {
    const newSteps = [...this.state.equipment];
    newSteps[index][field] = value;
    this.setState({ equipment: newSteps });
  };

  whichpage(page) {
    switch (page) {
      case 1:
        {
          const { Date, customTimeInput } = this.state;
          const CustomTimeInput = ({ value, onChange }) => (
            <input
              value={value}
              onChange={onChange}
              placeholder="HH:mm"
              className="custom-time-input"
            />
          );
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
              <ComponentoptionWapper >
                <Componentindex>Date</Componentindex>
                <DatePickerWrapper>
                  <DatePicker
                    selected={Date}
                    onChange={(date) => this.handleDateChange('Date', date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={30}
                    dateFormat="yyyy/MM/dd HH:mm"
                    timeCaption="time"
                    customTimeInput={<CustomTimeInput value={customTimeInput} onChange={(e) => this.handleTimeInputChange('customTimeInput', e)} />}
                  />
                </DatePickerWrapper>
              </ComponentoptionWapper >
              {this.state.equipment.map((step, index) => (
                <ComponentoptionWapper className='flow' key={index}>
                  {index === 0 ? <Componentindex>Equipment</Componentindex> : <Componentindex className='blank' />}
                  <FlowWapper className='dailyrecord'>
                    {index + 1}:&nbsp;&nbsp;
                    <Select
                      placeholder="Select equipment"
                      options={equipmentOptions}
                      value={step.name}
                      onChange={(selectedOption) => this.handleChangeE(index, 'name', selectedOption)}
                      styles={customStyles}
                    />
                    amount:&nbsp;&nbsp;
                    <Componentinput
                      className='small'
                      value={step.amount}
                      onChange={(e) => this.handleChangeE(index, 'amount', e.target.value)}
                    />
                    runtime:&nbsp;&nbsp;
                    <Componentinput
                      className='small'
                      value={step.runtime}
                      onChange={(e) => this.handleChangeE(index, 'runtime', e.target.value)}
                    />
                  </FlowWapper>
                </ComponentoptionWapper>
              ))}
              <ComponentoptionWapper>
                <Componentbutton className='addstepDailyrecord' onClick={this.addStepE}>Add Step</Componentbutton>
              </ComponentoptionWapper>
              {this.state.material.map((step, index) => (
                <ComponentoptionWapper className='flow' key={index}>
                  {index === 0 ? <Componentindex>Materail</Componentindex> : <Componentindex className='blank' />}
                  <FlowWapper className='dailyrecord'>
                    {index + 1}:&nbsp;&nbsp;
                    <Select
                      placeholder="Select access"
                      options={materialOptions}
                      value={step.name}
                      onChange={(selectedOption) => this.handleChangeM(index, 'name', selectedOption)}
                      styles={customStyles}
                    />
                    amount:&nbsp;&nbsp;
                    <Componentinput
                      className='small'
                      value={step.amount}
                      onChange={(e) => this.handleChangeM(index, 'amount', e.target.value)}
                    />
                    unit:&nbsp;&nbsp;
                    <Componentinput
                      className='small'
                      value={step.unit}
                      onChange={(e) => this.handleChangeM(index, 'unit', e.target.value)}
                    />
                  </FlowWapper>
                </ComponentoptionWapper>
              ))}
              <ComponentoptionWapper>
                <Componentbutton className='addstepDailyrecord' onClick={this.addStepM}>Add Step</Componentbutton>
              </ComponentoptionWapper>
              <ComponentoptionWapper className='flow'>
                <Componentindex>Description</Componentindex>
                <Description
                  className='short'
                  value={this.state.description}
                  onChange={(e) => this.setState({ description: e.target.value })}></Description>
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.dailyrecordpost(this.state.Date, this.state.equipment, this.state.material, this.state.description)}>Post</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 2:
        {
          const { Date, customTimeInput } = this.state;
          const CustomTimeInput = ({ value, onChange }) => (
            <input
              value={value}
              onChange={onChange}
              placeholder="HH:mm"
              className="custom-time-input"
            />
          );

          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>Date</Componentindex>
                <DatePickerWrapper>
                  <DatePicker
                    selected={Date}
                    onChange={(date) => this.handleDateChange('Date', date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={30}
                    dateFormat="yyyy/MM/dd HH:mm"
                    timeCaption="time"
                    customTimeInput={<CustomTimeInput value={customTimeInput} onChange={(e) => this.handleTimeInputChange('customTimeInput', e)} />}
                  />
                </DatePickerWrapper>
              </ComponentoptionWapper >
              {this.state.equipment.map((step, index) => (
                <ComponentoptionWapper className='flow' key={index}>
                  {index === 0 ? <Componentindex>Equipment</Componentindex> : <Componentindex className='blank' />}
                  <FlowWapper className='dailyrecord'>
                    {index + 1}:&nbsp;&nbsp;
                    <Componentinput
                      className='flow'
                      value={step.name}
                      onChange={(e) => this.handleChangeE(index, 'name', e.target.value)}
                    />
                    amount:&nbsp;&nbsp;
                    <Componentinput
                      className='small'
                      value={step.amount}
                      onChange={(e) => this.handleChangeE(index, 'amount', e.target.value)}
                    />
                    runtime:&nbsp;&nbsp;
                    <Componentinput
                      className='small'
                      value={step.runtime}
                      onChange={(e) => this.handleChangeE(index, 'runtime', e.target.value)}
                    />
                  </FlowWapper>
                </ComponentoptionWapper>
              ))}
              <ComponentoptionWapper>
                <Componentbutton className='addstepDailyrecord' onClick={this.addStepE}>Add Step</Componentbutton>
              </ComponentoptionWapper>
              {this.state.material.map((step, index) => (
                <ComponentoptionWapper className='flow' key={index}>
                  {index === 0 ? <Componentindex>Materail</Componentindex> : <Componentindex className='blank' />}
                  <FlowWapper className='dailyrecord'>
                    {index + 1}:&nbsp;&nbsp;
                    <Componentinput
                      className='flow'
                      value={step.name}
                      onChange={(e) => this.handleChangeM(index, 'name', e.target.value)}
                    />
                    amount:&nbsp;&nbsp;
                    <Componentinput
                      className='small'
                      value={step.amount}
                      onChange={(e) => this.handleChangeM(index, 'amount', e.target.value)}
                    />
                    unit:&nbsp;&nbsp;
                    <Componentinput
                      className='small'
                      value={step.unit}
                      onChange={(e) => this.handleChangeM(index, 'unit', e.target.value)}
                    />
                  </FlowWapper>
                </ComponentoptionWapper>
              ))}
              <ComponentoptionWapper>
                <Componentbutton className='addstepDailyrecord' onClick={this.addStepM}>Add Step</Componentbutton>
              </ComponentoptionWapper>
              <ComponentoptionWapper className='flow'>
                <Componentindex>Description</Componentindex>
                <Description
                  className='short'
                  value={this.state.description}
                  onChange={(e) => this.setState({ description: e.target.value })}></Description>
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.dailyrecordrevise(this.state.Date, this.state.equipment, this.state.material, this.state.description)}>Revise</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 3:
        {
          const { Date, customTimeInput } = this.state;
          const CustomTimeInput = ({ value, onChange }) => (
            <input
              value={value}
              onChange={onChange}
              placeholder="HH:mm"
              className="custom-time-input"
            />
          );

          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>Date</Componentindex>
                <DatePickerWrapper>
                  <DatePicker
                    selected={Date}
                    onChange={(date) => this.handleDateChange('Date', date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={30}
                    dateFormat="yyyy/MM/dd HH:mm"
                    timeCaption="time"
                    customTimeInput={<CustomTimeInput value={customTimeInput} onChange={(e) => this.handleTimeInputChange('customTimeInput', e)} />}
                  />
                </DatePickerWrapper>
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentbutton onClick={() => { this.props.dailyrecordretrieve(this.state.Date); this.setState({ display: true }); }}>Retrieve</Componentbutton>
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
            <Projectmanagementinnerpageoption
              key={id}
              onClick={() => setdailyrecordpage(id)}
              onMouseEnter={() => this.handleMouseEnter(id)}
              onMouseLeave={this.handleMouseLeave}
              className={dailyrecordpage === id || hoveredBox === id ? 'mousein' : ''}
            >
              {text}
            </Projectmanagementinnerpageoption>
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
    dailyrecordpost(date, equipment, material, description) {
      const Equipment = equipment.map(item => ({ ...item, name: item.name.value }));
      const Material = material.map(item => ({ ...item, name: item.name.value }));
      dispatch(actionCreators.dailyrecordpost(date, Equipment, Material, description))
    },
    dailyrecordrevise(date, equipment, material, description) {
      dispatch(actionCreators.dailyrecordrevise(date, equipment, material, description));
    },
    dailyrecordretrieve(date) {
      dispatch(actionCreators.dailyrecordretrieve(date));
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