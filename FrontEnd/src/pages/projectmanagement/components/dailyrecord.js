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
  Innerpageoption,
  DatePickerWrapper,
  FlowWapper,
  Description,
  PMcustomStyles
} from '../../../components/style';
import { VscAdd } from 'react-icons/vsc';
import { getequipment, getmaterial } from '../../admin/store/actionCreators';
import { table } from '../../../components/function/table'

class Dailyrecord extends PureComponent {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Retrieve' },
      { id: 2, text: 'Revise' },
      { id: 3, text: 'Post' },
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

  whichpage(page, retrieve_dailyrecord) {
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
      case 3:
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
              <ComponentoptionWapper>
                <FlowWapper className='dailyrecord'>
                  <Componentindex className='big'>Equipment</Componentindex>
                  <Componentindex className='small'>Amount</Componentindex>
                  <Componentindex className='small'>Unit</Componentindex>
                  <VscAdd fontSize={20} color='green' onClick={() => this.addStep('postFormdata', 'equipment')} />
                </FlowWapper>
              </ComponentoptionWapper>
              {this.state.postFormdata.equipment.map((step, index) => (
                <ComponentoptionWapper className='flow' key={index}>
                  <Select
                    placeholder="Select equipment"
                    options={equipmentOptions}
                    value={step.name}
                    onChange={(selectedOption) => this.handleChange('postFormdata', 'equipment', index, 'name', selectedOption)}
                    styles={PMcustomStyles}
                  />
                  <Componentinput
                    className='small'
                    value={step.amount}
                    onChange={(e) => this.handleChange('postFormdata', 'equipment', index, 'amount', e.target.value)}
                  />
                  <Componentinput
                    className='small'
                    value={step.runtime}
                    onChange={(e) => this.handleChange('postFormdata', 'equipment', index, 'runtime', e.target.value)}
                  />
                </ComponentoptionWapper>
              ))}
              <ComponentoptionWapper>
                <FlowWapper className='dailyrecord'>
                  <Componentindex className='big'>Material</Componentindex>
                  <Componentindex className='small'>Amount</Componentindex>
                  <Componentindex className='small'>Unit</Componentindex>
                  <VscAdd fontSize={20} color='green' onClick={() => this.addStep('postFormdata', 'material')} />
                </FlowWapper>
              </ComponentoptionWapper>
              {this.state.postFormdata.material.map((step, index) => (
                <ComponentoptionWapper className='flow' key={index}>
                  <Select
                    placeholder="Select material"
                    options={materialOptions}
                    value={step.name}
                    onChange={(selectedOption) => this.handleChange('postFormdata', 'material', index, 'name', selectedOption)}
                    styles={PMcustomStyles}
                  />
                  <Componentinput
                    className='small'
                    value={step.amount}
                    onChange={(e) => this.handleChange('postFormdata', 'material', index, 'amount', e.target.value)}
                  />
                  <Componentinput
                    className='small'
                    value={step.unit}
                    onChange={(e) => this.handleChange('postFormdata', 'material', index, 'unit', e.target.value)}
                  />
                </ComponentoptionWapper>
              ))}
              <ComponentoptionWapper className='flow'>
                <Componentindex>Description</Componentindex>
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Description
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
              <ComponentoptionWapper>
                <FlowWapper className='dailyrecord'>
                  <Componentindex className='big'>Equipment</Componentindex>
                  <Componentindex className='small'>Amount</Componentindex>
                  <Componentindex className='small'>Unit</Componentindex>
                  <VscAdd fontSize={20} color='green' onClick={() => this.addStep('reviseFormdata', 'equipment')} />
                </FlowWapper>
              </ComponentoptionWapper>
              {this.state.reviseFormdata.equipment.map((step, index) => (
                <ComponentoptionWapper className='flow' key={index}>
                  <Select
                    placeholder="Select equipment"
                    options={equipmentOptions}
                    value={step.name}
                    onChange={(selectedOption) => this.handleChange('reviseFormdata', 'equipment', index, 'name', selectedOption)}
                    styles={PMcustomStyles}
                  />
                  <Componentinput
                    className='small'
                    value={step.amount}
                    onChange={(e) => this.handleChange('reviseFormdata', 'equipment', index, 'amount', e.target.value)}
                  />
                  <Componentinput
                    className='small'
                    value={step.runtime}
                    onChange={(e) => this.handleChange('reviseFormdata', 'equipment', index, 'runtime', e.target.value)}
                  />
                </ComponentoptionWapper>
              ))}
              <ComponentoptionWapper>
                <FlowWapper className='dailyrecord'>
                  <Componentindex className='big'>Material</Componentindex>
                  <Componentindex className='small'>Amount</Componentindex>
                  <Componentindex className='small'>Unit</Componentindex>
                  <VscAdd fontSize={20} color='green' onClick={() => this.addStep('reviseFormdata', 'material')} />
                </FlowWapper>
              </ComponentoptionWapper>
              {this.state.reviseFormdata.material.map((step, index) => (
                <ComponentoptionWapper className='flow' key={index}>
                  <Select
                    placeholder="Select material"
                    options={materialOptions}
                    value={step.name}
                    onChange={(selectedOption) => this.handleChange('reviseFormdata', 'material', index, 'name', selectedOption)}
                    styles={PMcustomStyles}
                  />
                  <Componentinput
                    className='small'
                    value={step.amount}
                    onChange={(e) => this.handleChange('reviseFormdata', 'material', index, 'amount', e.target.value)}
                  />
                  <Componentinput
                    className='small'
                    value={step.unit}
                    onChange={(e) => this.handleChange('reviseFormdata', 'material', index, 'unit', e.target.value)}
                  />
                </ComponentoptionWapper>
              ))}
              <ComponentoptionWapper className='flow'>
                <Componentindex>Description</Componentindex>
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Description
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
      case 1:
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
                <div>{table(retrieve_dailyrecord, null, null, null)}</div>
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
    const { setdailyrecordpage, dailyrecordpage, retrieve_dailyrecord } = this.props;
    const { hoveredBox, pages } = this.state;
    return (
      <ComponentWapper>
        <Componenttitle>Daily Record</Componenttitle>
        <ComponentoptionWapper>
          {pages.map(({ id, text }) => (
            (localStorage.getItem('pm_rank') === 'pm' || text === 'Retrieve') && (
              <Innerpageoption
                key={id}
                onClick={() => setdailyrecordpage(id)}
                onMouseEnter={() => this.handleMouseEnter(id)}
                onMouseLeave={this.handleMouseLeave}
                className={dailyrecordpage === id || hoveredBox === id ? 'mousein' : ''}
              >
                {text}
              </Innerpageoption>
            )
          ))}
        </ComponentoptionWapper>
        {this.whichpage(dailyrecordpage, retrieve_dailyrecord)}
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
  equipmentlist: state.admin.equipmentlist,
  retrieve_dailyrecord: state.projectmanagement.retrieve_dailyrecord
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