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
                <Componentbutton onClick={() => this.props.equipmentpost(this.name, this.gender, this.phone, this.mail, this.region)}>Post</Componentbutton>
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
                <Componentbutton onClick={() => this.props.equipmentpost(this.name, this.gender, this.phone, this.mail, this.region)}>Revise</Componentbutton>
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
                <Componentbutton onClick={() => this.props.equipmentpost(this.name, this.gender, this.phone, this.mail, this.region)}>Retrieve</Componentbutton>
              </ComponentoptionWapper>
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
}

const mapStateToProps = (state) => ({
  dailyrecordpage: state.projectmanagement.dailyrecordpage
})

const mapDisptchToProps = (dispatch) => {
  return {
    setdailyrecordpage(id) {
      dispatch(actionCreators.setdailyrecordpage(id));
    },
    equipmentpost(name, amount, unit) {
      dispatch(actionCreators.equipmentpost(name.value, amount.value, unit.value));
    },
    equipmentrevise(name, amount, unit) {
      dispatch(actionCreators.equipmentrevise(name.value, amount.value, unit.value));
    },
    equipmentretrieve(name) {
      dispatch(actionCreators.equipmentretrieve(name.value));
    }
  }
}


export default connect(mapStateToProps, mapDisptchToProps)(Dailyrecord);