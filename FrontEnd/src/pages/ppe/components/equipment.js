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
  PPEinnerpageoption,
  DatePickerWrapper,
  Componentcheckbox
} from '../style';

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
    startDate: new Date(),
    disposalDate: new Date(),
    endDate: new Date(),
    customTimeInput: "",
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

  whichpage(page) {
    switch (page) {
      case 1:
        {
          const { startDate, disposalDate, endDate, customTimeInput } = this.state;
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
                <Componentinput ref={(input) => { this.name = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Supplier Name</Componentindex>
                <Componentinput ref={(input) => { this.supplier_name = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper >
                <Componentindex>Amount</Componentindex>
                <Componentinput ref={(input) => { this.amount = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Unit</Componentindex>
                <Componentinput ref={(input) => { this.unit = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper >
                <Componentindex>Factor</Componentindex>
                <Componentinput ref={(input) => { this.factor = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Purchase Date</Componentindex>
                <DatePickerWrapper>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => this.handleDateChange('startDate', date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={30}
                    dateFormat="yyyy/MM/dd HH:mm"
                    timeCaption="time"
                    customTimeInput={<CustomTimeInput value={customTimeInput} onChange={(e) => this.handleTimeInputChange('customTimeInput', e)} />}
                  />
                </DatePickerWrapper>
                <Componentindex>Disposal Date</Componentindex>
                <DatePickerWrapper>
                  <DatePicker
                    selected={disposalDate}
                    onChange={(date) => this.handleDateChange('disposalDate', date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={30}
                    dateFormat="yyyy/MM/dd HH:mm"
                    timeCaption="time"
                    customTimeInput={<CustomTimeInput value={customTimeInput} onChange={(e) => this.handleTimeInputChange('customTimeInput', e)} />}
                  />
                </DatePickerWrapper>
              </ComponentoptionWapper>
              <ComponentoptionWapper >
                <Componentindex>Age</Componentindex>
                <Componentinput ref={(input) => { this.age = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Expire Date</Componentindex>
                <DatePickerWrapper>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => this.handleDateChange('endDate', date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={30}
                    dateFormat="yyyy/MM/dd HH:mm"
                    timeCaption="time"
                    customTimeInput={<CustomTimeInput value={customTimeInput} onChange={(e) => this.handleTimeInputChange('customTimeInput', e)} />}
                  />
                </DatePickerWrapper>
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.equipmentpost(this.name, this.supplier_name, this.amount, this.unit, this.factor, startDate, disposalDate, this.age, endDate)}>Post</Componentbutton>
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
                <Componentinput ref={(input) => { this.equip_id = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.equipmentdelete(this.equip_id)}>Delete</Componentbutton>
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
                <Componentinput ref={(input) => { this.name = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Supplier Name</Componentindex>
                <Componentinput ref={(input) => { this.supplier_name = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>EquipID</Componentindex>
                <Componentinput ref={(input) => { this.equip_id = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => { this.props.equipmentretrieve(this.name, this.supplier_name, this.equip_id); this.setState({ display: true }); }}>Retrieve</Componentbutton>
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
                <Componentinput ref={(input) => { this.repair_date = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper >
                <Componentindex>EqupiID</Componentindex>
                <Componentinput ref={(input) => { this.equip_id = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.equipmentpostrepair(this.repair_date, this.equip_id)}>post</Componentbutton>
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
            <PPEinnerpageoption
              key={id}
              onClick={() => setequipmentpage(id)}
              onMouseEnter={() => this.handleMouseEnter(id)}
              onMouseLeave={this.handleMouseLeave}
              className={equipmentpage === id || hoveredBox === id ? 'mousein' : ''}
            >
              {text}
            </PPEinnerpageoption>
          ))}
        </ComponentoptionWapper>
        {this.whichpage(equipmentpage)}
      </ComponentWapper>
    )
  }
}

const mapStateToProps = (state) => ({
  equipmentpage: state.projectmanagement.equipmentpage
})

const mapDisptchToProps = (dispatch) => {
  return {
    setequipmentpage(id) {
      dispatch(actionCreators.setequipmentpage(id));
    },
    equipmentpost(name, supplier_name, amount, unit, factor, startDate, disposalDate, age, endDate) {
      dispatch(actionCreators.equipmentpost(name.value, supplier_name.value, amount.value, unit.value, factor.value, startDate, disposalDate, age.value, endDate));
    },
    equipmentretrieve(name, supplier_name, equip_id) {
      dispatch(actionCreators.equipmentretrieve(name.value, supplier_name.value, equip_id.value));
    },
    equipmentdelete(equip_id) {
      dispatch(actionCreators.equipmentdelete( equip_id.value));
    },
    equipmentpostrepair(repair_date, equip_id) {
      dispatch(actionCreators.equipmentpostrepair(repair_date.value, equip_id.value));
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Equipment);