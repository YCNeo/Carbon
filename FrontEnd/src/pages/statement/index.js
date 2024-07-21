import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  StatemetnWrapper,
  Statementtitle,
  StatementoptionWapper,
  Statementindex,
  Statementcheckbox,
  Statementbutton,
  CheckItem,
  Checkbutton,
  DatePickerWrapper
} from './style';

class Statement extends PureComponent {
  state = {
    projectChecked: [],
    startDate: new Date(),
    endDate: new Date(),
    customTimeInput: ""
  };

  handleCheckButtonClick = (index) => {
    this.setState((prevState) => {
      const newProjectChecked = [...prevState.projectChecked];
      newProjectChecked[index] = !newProjectChecked[index];
      return { projectChecked: newProjectChecked };
    });
  };

  handleDateChange = (field, date) => {
    this.setState({ [field]: date });
  };

  handleTimeInputChange = (field, event) => {
    this.setState({ [field]: event.target.value });
  };

  render() {
    const { projectlist } = this.props;
    const { projectChecked, startDate, endDate, customTimeInput } = this.state;
    
    const CustomTimeInput = ({ value, onChange }) => (
      <input
        value={value}
        onChange={onChange}
        placeholder="HH:mm"
        className="custom-time-input"
      />
    );

    return (
      <StatemetnWrapper>
        <Statementtitle>Retrieve</Statementtitle>
        <Statementtitle className='text'>查詢條件：</Statementtitle>
        <StatementoptionWapper>
          <Statementindex>Project name</Statementindex>
          <Statementcheckbox>
            {
              projectlist.map((item, index) => (
                <CheckItem key={item.id} className='name'>
                  <Checkbutton
                    onClick={() => this.handleCheckButtonClick(index)}
                    className={projectChecked[index] ? 'checked' : ''}
                  ></Checkbutton>
                  {item.name}
                </CheckItem>
              ))
            }
          </Statementcheckbox>
        </StatementoptionWapper>
        <StatementoptionWapper>
          <Statementindex>Start From</Statementindex>
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
          <Statementindex>End At</Statementindex>
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
        </StatementoptionWapper>
        <StatementoptionWapper>
          <Statementindex>生成圖表</Statementindex>
        </StatementoptionWapper>
        <StatementoptionWapper>
          <Statementbutton onClick={() => this.props.sendinfo(startDate,endDate)}>Create</Statementbutton>
        </StatementoptionWapper>
      </StatemetnWrapper>
    )
  }

  componentDidMount() {
    this.props.getproject();
    this.setState({ projectChecked: new Array(this.props.projectlist.length).fill(false) });
  }
}

const mapStateToProps = (state) => ({
  projectlist: state.statement.projectlist
})

const mapDispatchToProps = (dispatch) => {
  return {
    getproject() {
      dispatch(actionCreators.getproject())
    },
    sendinfo(a,b) {
      console.log(a,b);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Statement);
