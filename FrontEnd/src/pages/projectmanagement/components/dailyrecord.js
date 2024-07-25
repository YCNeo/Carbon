import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  ComponentWapper,
  Componentindex,
  Componentinput,
  Componentbutton,
  Componenttitle,
  ComponentoptionWapper,
  Projectmanagementinnerpageoption,
  DatePickerWrapper,
} from '../style';

class Dailyrecord extends PureComponent {
  state = {
    hoveredBox: null,
    Date: new Date(),
    customTimeInput: "",
    pages: [
      { id: 1, text: 'Post' },
      { id: 2, text: 'Revise' },
      { id: 3, text: 'Retieve' },
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
                    onChange={(date) => this.handleDateChange('endDate', date)}
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
                <Componentindex>Equipment</Componentindex>
                <Componentinput ref={(input) => { this.gender = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Material</Componentindex>
                <Componentinput ref={(input) => { this.gender = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.employeepost(this.name, this.gender, this.phone, this.mail, this.region)}>Post</Componentbutton>
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
                    onChange={(date) => this.handleDateChange('endDate', date)}
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
                <Componentindex>Equipment</Componentindex>
                <Componentinput ref={(input) => { this.gender = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Material</Componentindex>
                <Componentinput ref={(input) => { this.gender = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.employeepost(this.name, this.gender, this.phone, this.mail, this.region)}>Post</Componentbutton>
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
                    onChange={(date) => this.handleDateChange('endDate', date)}
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
                <Componentbutton onClick={() => this.props.employeepost(this.name, this.gender, this.phone, this.mail, this.region)}>Post</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      default:
        return;
    }
  }

  handleCheckButtonClick = (index) => {
    this.setState((prevState) => {
      const newAccessChecked = [...prevState.accessChecked];
      newAccessChecked[index] = !newAccessChecked[index];
      return { accessChecked: newAccessChecked };
    });
  };

  render() {
    const { setpage, employeepage } = this.props;
    const { hoveredBox, pages } = this.state;
    return (
      <ComponentWapper>
        <Componenttitle>Access Assignment</Componenttitle>
        <ComponentoptionWapper>
          {pages.map(({ id, text }) => (
            <Projectmanagementinnerpageoption
              key={id}
              onClick={() => setpage(id)}
              onMouseEnter={() => this.handleMouseEnter(id)}
              onMouseLeave={this.handleMouseLeave}
              className={employeepage === id || hoveredBox === id ? 'mousein' : ''}
            >
              {text}
            </Projectmanagementinnerpageoption>
          ))}
        </ComponentoptionWapper>
        {this.whichpage(employeepage)}
      </ComponentWapper>
    )
  }
}

const mapStateToProps = (state) => ({
  employeepage: state.admin.employeepage
})

const mapDisptchToProps = (dispatch) => {
  return {
    setpage(id) {
      dispatch(actionCreators.setpage(id));
    },
    employeepost(name, gender, phone, mail, region) {
      dispatch(actionCreators.employeepost(name.value, gender.value, phone.value, mail.value, region.value));
    },
    employeerevise(eid, name, gender, phone, mail, region) {
      dispatch(actionCreators.employeerevise(eid.value, name.value, gender.value, phone.value, mail.value, region.value));
    },
    employeedelete(eid, name) {
      dispatch(actionCreators.employeedelete(eid.value, name.value));
    },
    employeeretrieve(eid, name, pid, region) {
      dispatch(actionCreators.employeeretrieve(eid.value, name.value, pid.value, region.value));
    }
  }
}


export default connect(mapStateToProps, mapDisptchToProps)(Dailyrecord);