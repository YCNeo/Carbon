import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { actionCreators } from '../store';
import {
  ComponentWapper,
  Componentindex,
  Componentinput,
  Componentbutton,
  Componenttitle,
  ComponentoptionWapper,
  Innerpageoption,
  DatePickerWrapper,
  Componentcheckbox
} from '../../../components/style';

class Equipment extends PureComponent {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Post' },
      { id: 2, text: 'Delete' },
      { id: 3, text: 'Retrieve' },
      { id: 4, text: 'Post Repair' },
      { id: 5, text: 'Repair Log' },
      { id: 6, text: 'Dispoal List' },
    ],
    postFormdata: {
      name: '',
      supplier_name: '',
      amount: '',
      unit: '',
      factor: '',
      age: '',
      startDate: new Date(),
      disposalDate: new Date(),
      endDate: new Date(),
      customTimeInput: ""
    },
    deleteFormdata: {
      eqid: ''
    },
    retrieveFormdata: {
      name: '',
      supplier_name: '',
      eqid: ''
    },
    postrepairFormdata: {
      repair_date: '',
      eqid: ''
    },
    display: false
  };

  handleMouseEnter = (id) => {
    this.setState({ hoveredBox: id });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredBox: null });
  };

  handleDateChange = (field, date) => {
    this.setState(prevState => ({
      postFormdata: {
        ...prevState.postFormdata,
        [field]: date
      }
    }));
  };

  handleTimeInputChange = (field, event) => {
    this.setState(prevState => ({
      postFormdata: {
        ...prevState.postFormdata,
        [field]: event.target
      }
    }));
  };

  handleInputChange = (event, formType, field) => {
    const { value } = event.target;
    this.setState(prevState => ({
      [formType]: {
        ...prevState[formType],
        [field]: value
      }
    }));
  };

  whichpage(page) {
    const { postFormdata, deleteFormdata, retrieveFormdata, postrepairFormdata } = this.state;
    switch (page) {
      case 1:
        {

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
                <Componentindex>Name</Componentindex>
                <Componentinput value={postFormdata.name} onChange={(e) => this.handleInputChange(e, 'postFormdata', 'name')} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Supplier Name</Componentindex>
                <Componentinput value={postFormdata.supplier_name} onChange={(e) => this.handleInputChange(e, 'postFormdata', 'supplier_name')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper >
                <Componentindex>Amount</Componentindex>
                <Componentinput value={postFormdata.amount} onChange={(e) => this.handleInputChange(e, 'postFormdata', 'amount')} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Unit</Componentindex>
                <Componentinput value={postFormdata.unit} onChange={(e) => this.handleInputChange(e, 'postFormdata', 'unit')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper >
                <Componentindex>Factor</Componentindex>
                <Componentinput value={postFormdata.factor} onChange={(e) => this.handleInputChange(e, 'postFormdata', 'factor')} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Purchase Date</Componentindex>
                <DatePickerWrapper>
                  <DatePicker
                    selected={postFormdata.startDate}
                    onChange={(date) => this.handleDateChange('startDate', date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={30}
                    dateFormat="yyyy/MM/dd HH:mm"
                    timeCaption="time"
                    customTimeInput={<CustomTimeInput value={postFormdata.customTimeInput} onChange={(e) => this.handleTimeInputChange('customTimeInput', e)} />}
                  />
                </DatePickerWrapper>
                <Componentindex>Disposal Date</Componentindex>
                <DatePickerWrapper>
                  <DatePicker
                    selected={postFormdata.disposalDate}
                    onChange={(date) => this.handleDateChange('disposalDate', date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={30}
                    dateFormat="yyyy/MM/dd HH:mm"
                    timeCaption="time"
                    customTimeInput={<CustomTimeInput value={postFormdata.customTimeInput} onChange={(e) => this.handleTimeInputChange('customTimeInput', e)} />}
                  />
                </DatePickerWrapper>
              </ComponentoptionWapper>
              <ComponentoptionWapper >
                <Componentindex>Age</Componentindex>
                <Componentinput value={postFormdata.age} onChange={(e) => this.handleInputChange(e, 'postFormdata', 'age')} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Expire Date</Componentindex>
                <DatePickerWrapper>
                  <DatePicker
                    selected={postFormdata.endDate}
                    onChange={(date) => this.handleDateChange('endDate', date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={30}
                    dateFormat="yyyy/MM/dd HH:mm"
                    timeCaption="time"
                    customTimeInput={<CustomTimeInput value={postFormdata.customTimeInput} onChange={(e) => this.handleTimeInputChange('customTimeInput', e)} />}
                  />
                </DatePickerWrapper>
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.equipmentpost(postFormdata)}>Post</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 2:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper>
                <Componentindex>EquipID</Componentindex>
                <Componentinput value={deleteFormdata.eqid} onChange={(e) => this.handleInputChange(e, 'deleteFormdata', 'eqid')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.equipmentdelete(deleteFormdata)}>Delete</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 3:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>Name</Componentindex>
                <Componentinput value={retrieveFormdata.name} onChange={(e) => this.handleInputChange(e, 'retrieveFormdata', 'name')} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Supplier Name</Componentindex>
                <Componentinput value={retrieveFormdata.supplier_name} onChange={(e) => this.handleInputChange(e, 'retrieveFormdata', 'supplier_name')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>EquipID</Componentindex>
                <Componentinput value={retrieveFormdata.eqid} onChange={(e) => this.handleInputChange(e, 'retrieveFormdata', 'eqid')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => { this.props.equipmentretrieve(retrieveFormdata); this.setState({ display: true }); }}>Retrieve</Componentbutton>
              </ComponentoptionWapper>
              {this.state.display ?
                <div>
                  <ComponentoptionWapper>
                    <Componentcheckbox>list</Componentcheckbox>
                  </ComponentoptionWapper>
                  <ComponentoptionWapper>
                    <Componentbutton onClick={() => { this.props.setpage(3) }} className='reject'>Delete</Componentbutton>
                  </ComponentoptionWapper>
                </div>
                :
                ''}
            </ComponentWapper>
          );
        }
      case 4:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>Repair Date</Componentindex>
                <Componentinput value={postrepairFormdata.repair_date} onChange={(e) => this.handleInputChange(e, 'postrepairFormdata', 'repair_date')} />
              </ComponentoptionWapper >
              <ComponentoptionWapper >
                <Componentindex>EqupiID</Componentindex>
                <Componentinput value={postrepairFormdata.eqid} onChange={(e) => this.handleInputChange(e, 'postrepairFormdata', 'eqid')} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.equipmentpostrepair(postrepairFormdata)}>post</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 5:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentcheckbox>repair list</Componentcheckbox>
              </ComponentoptionWapper >
            </ComponentWapper>
          );
        }
      case 6:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentcheckbox>disposal list</Componentcheckbox>
              </ComponentoptionWapper >
            </ComponentWapper>
          );
        }
      default:
        return;
    }
  }

  render() {
    const { setequipmentpage, equipmentpage } = this.props;
    const { hoveredBox, pages } = this.state;
    return (
      <ComponentWapper>
        <Componenttitle>Equipment</Componenttitle>
        <ComponentoptionWapper>
          {pages.map(({ id, text }) => (
            <Innerpageoption
              key={id}
              onClick={() => setequipmentpage(id)}
              onMouseEnter={() => this.handleMouseEnter(id)}
              onMouseLeave={this.handleMouseLeave}
              className={equipmentpage === id || hoveredBox === id ? 'mousein' : ''}
            >
              {text}
            </Innerpageoption>
          ))}
        </ComponentoptionWapper>
        {this.whichpage(equipmentpage)}
      </ComponentWapper>
    )
  }
}

const mapStateToProps = (state) => ({
  equipmentpage: state.ppe.equipmentpage
})

const mapDisptchToProps = (dispatch) => {
  return {
    setequipmentpage(id) {
      dispatch(actionCreators.setequipmentpage(id));
    },
    equipmentpost(postFormdata) {
      const { name, supplier_name, amount, unit, factor, startDate, disposalDate, age, endDate } = postFormdata
      dispatch(actionCreators.equipmentpost(name, supplier_name, amount, unit, factor, startDate, disposalDate, age, endDate));
    },
    equipmentretrieve(retrieveFormdata) {
      const { name, supplier_name, eqid } = retrieveFormdata
      dispatch(actionCreators.equipmentretrieve(name, supplier_name, eqid));
    },
    equipmentdelete(deleteFormdata) {
      const { eqid } = deleteFormdata
      dispatch(actionCreators.equipmentdelete(eqid));
    },
    equipmentpostrepair(postrepairFormdata) {
      const { repair_date, eqid } = postrepairFormdata
      dispatch(actionCreators.equipmentpostrepair(repair_date, eqid));
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Equipment);