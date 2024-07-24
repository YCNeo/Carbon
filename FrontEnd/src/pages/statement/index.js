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
  DatePickerWrapper,
  Chartselect,
  Option
} from './style';

class Statement extends PureComponent {
  state = {
    projectChecked: [],
    chart: 0,
    chartlist: [
      { id: 1, name: "bar chart" },
      { id: 2, name: "line chart" },
      { id: 3, name: "pie chart" }
    ],
    option: [
      { id: 0, name: "select an option" },
      { id: 1, name: "time" },
      { id: 2, name: "carbon emission" },
      { id: 3, name: "project id" },
      { id: 4, name: "factory number" },
      { id: 5, name: "option5" }
    ],
    startDate: new Date(),
    endDate: new Date(),
    customTimeInput: "",
    selectedOption1: "",
    selectedOption2: ""
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

  setchart = (id) => {
    this.setState({ chart: id });
  }

  handleSelectChange1 = (event) => {
    this.setState({ selectedOption1: event.target.value });
  };

  handleSelectChange2 = (event) => {
    this.setState({ selectedOption2: event.target.value });
  };

  render() {
    const { projectlist } = this.props;
    const { projectChecked, startDate, endDate, customTimeInput, chart, chartlist, option, selectedOption1, selectedOption2 } = this.state;

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
          <Statementcheckbox>
            {
              chartlist.map((item) => (
                <CheckItem key={item.id} >
                  <Checkbutton
                    onClick={() => this.setchart(item.id)}
                    className={chart === item.id ? 'checked' : ''}
                  ></Checkbutton>
                  <Option>{item.name}</Option>
                  <Chartselect>
                    {item.id === 3 ? "classification basis" : "x-axis:"}
                    &nbsp;&nbsp;
                    <select value={selectedOption1} onChange={this.handleSelectChange1}>
                      {option.map(opt => (
                        <option key={opt.id} value={opt.id}>{opt.name}</option>
                      ))}
                    </select>
                  </Chartselect>
                  {item.id === 3 ? '' :
                    <Chartselect>
                      y-axis:&nbsp;&nbsp;
                      <select value={selectedOption2} onChange={this.handleSelectChange2}>
                        {option.map(opt => (
                          <option key={opt.id} value={opt.id}>{opt.name}</option>
                        ))}
                      </select>
                    </Chartselect>
                  }
                </CheckItem>
              ))
            }
          </Statementcheckbox>
        </StatementoptionWapper>
        <StatementoptionWapper>
          <Statementbutton onClick={() => this.props.sendinfo(chart, selectedOption1, selectedOption2)}>Create</Statementbutton>
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
    sendinfo(a, b, c) {
      console.log(a, b, c);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Statement);
