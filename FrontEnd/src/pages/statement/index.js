import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
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
  customStyles,
  customStyles2,
  CheckItem,
  Checkbutton,
  DatePickerWrapper,
  Chartselect,
  Option
} from './style';

class Statement extends PureComponent {
  state = {
    selectedProject: null,
    allProjectSelected: false,
    chart: 0,
    chartlist: [
      { id: 1, name: "bar chart" },
      { id: 2, name: "line chart" },
      { id: 3, name: "pie chart" }
    ],
    option: [
      { value: 1, label: "time" },
      { value: 2, label: "carbon emission" },
      { value: 3, label: "project value" },
      { value: 4, label: "factory number" },
      { value: 5, label: "option5" }
    ],
    startDate: new Date(),
    endDate: new Date(),
    customTimeInput: "",
    selectedOption1: 1,
    selectedOption2: 1
  };

  handleSelectChange = (selectedOptions) => {
    this.setState({ selectedProject: selectedOptions });
  };

  handleSelectAll = () => {
    const { projectlist } = this.props;
    const projectOptions = projectlist.map(item => ({
      value: item.id,
      label: item.name
    }));
    this.setState({
      selectedProject: projectOptions,
      allProjectSelected: true
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

  handleSelectChange1 = (selectedOptions) => {
    this.setState({ selectedOption1: selectedOptions });
  };

  handleSelectChange2 = (selectedOptions) => {
    this.setState({ selectedOption2: selectedOptions });
  };

  render() {
    const { projectlist } = this.props;
    const { selectedProject, startDate, endDate, customTimeInput, chart, chartlist, option, selectedOption1, selectedOption2 } = this.state;

    const projectOptions = projectlist.map(item => ({
      value: item.id,
      label: item.name
    }));

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
          <Select
            placeholder="Select project"
            closeMenuOnSelect={false}
            options={projectOptions}
            isMulti
            value={selectedProject}
            onChange={this.handleSelectChange}
            styles={customStyles}
          />
          <Statementbutton className='selectall' onClick={this.handleSelectAll}>Select All</Statementbutton>
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
                    <Select
                      placeholder="Select x"
                      options={option}
                      value={selectedOption1}
                      onChange={this.handleSelectChange1}
                      styles={customStyles2}
                    />
                  </Chartselect>
                  {item.id === 3 ? '' :
                    <Chartselect>
                      y-axis:&nbsp;&nbsp;
                      <Select
                        placeholder="Select y"
                        options={option}
                        value={selectedOption2}
                        onChange={this.handleSelectChange2}
                        styles={customStyles2}
                      />
                    </Chartselect>
                  }
                </CheckItem>
              ))
            }
          </Statementcheckbox>
        </StatementoptionWapper>
        <StatementoptionWapper>
          <Statementbutton onClick={() => this.props.sendinfo(selectedProject, startDate, endDate, chart)}>Create</Statementbutton>
        </StatementoptionWapper>
      </StatemetnWrapper>
    )
  }

  componentDidMount() {
    this.props.getproject();
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
    sendinfo(selectedProject, startDate, endDate, chart) {
      const projectChecked = selectedProject
        ? selectedProject.map(option => {
          const { value: id, label: name } = option;
          return { id, name };
        })
        : [];
      dispatch(actionCreators.sendinfo(projectChecked, startDate, endDate, chart))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Statement);
