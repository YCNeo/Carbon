import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { actionCreators } from './store';
import DatePicker from 'react-datepicker';
import { Navigate } from "react-router-dom";
import 'react-datepicker/dist/react-datepicker.css';
import {
  PageWrapper,
  PagePage,
  Componenttitle,
  ComponentoptionWapper,
  Componentindex,
  Componentcheckbox,
  Componentbutton,
  customStyles,
  PMcustomStyles,
  CheckItem,
  Checkbutton,
  DatePickerWrapper,
  Chartselect,
  Option
} from '../../components/style';
import { barchart, linechart, piechart } from '../../components/function/chart';

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
    yoption: [
      { value: 1, label: "time" },
      { value: 2, label: "carbon emission" }
    ],
    xoption: [
      { value: 3, label: "project" },
      { value: 4, label: "PN" }
    ],
    startDate: new Date(),
    endDate: new Date(),
    customTimeInput: "",
    xyaxis: [
      { xaxis: 1, yaxis: 1 },
      { xaxis: 1, yaxis: 1 },
      { xaxis: 1, yaxis: 1 }
    ]
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

  handleSelectChangexy = (selectedOptions, type, index) => {
    this.setState(prevState => {
      const newArray = [...prevState.xyaxis];
      newArray[index][`${type}axis`] = selectedOptions;
      return { xyaxis: newArray };
    });
  }

  renderChart = (projectdata) => {
    const { chart, xyaxis } = this.state;
    
    return (
      <Componentcheckbox>
        {barchart(projectdata,xyaxis[0].xaxis, xyaxis[0].yaxis)}
        {linechart(projectdata,xyaxis[1].xaxis, xyaxis[1].yaxis)}
        {piechart(projectdata,xyaxis[2].xaxis, xyaxis[2].yaxis)}
      </Componentcheckbox>
    )
  }

  render() {
    const { projectlist, projectdata } = this.props;
    const { selectedProject, startDate, endDate, customTimeInput, chart, chartlist, xoption, yoption, xyaxis } = this.state;

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

    if (localStorage.getItem('jwtToken') != null) {
      return (
        <PageWrapper>
          <PagePage>
            <Componenttitle>Retrieve</Componenttitle>
            <Componenttitle className='componentindex'>查詢條件：</Componenttitle>
            <ComponentoptionWapper>
              <Componentindex>Project name</Componentindex>
              <Select
                placeholder="Select project"
                closeMenuOnSelect={false}
                options={projectOptions}
                isMulti
                value={selectedProject}
                onChange={this.handleSelectChange}
                styles={customStyles}
              />
              <Componentbutton className='selectall' onClick={this.handleSelectAll}>Select All</Componentbutton>
            </ComponentoptionWapper>
            <ComponentoptionWapper>
              <Componentindex>Start From</Componentindex>
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
              <Componentindex>End At</Componentindex>
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
              <Componentindex>生成圖表</Componentindex>
              <Componentcheckbox>
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
                          options={xoption}
                          value={xyaxis[item.id - 1].xaxis}
                          onChange={(value) => this.handleSelectChangexy(value, "x", item.id - 1)}
                          styles={PMcustomStyles}
                        />
                      </Chartselect>
                      {item.id === 3 ? '' :
                        <Chartselect>
                          y-axis:&nbsp;&nbsp;
                          <Select
                            placeholder="Select x"
                            options={yoption}
                            value={xyaxis[item.id - 1].yaxis}
                            onChange={(value) => this.handleSelectChangexy(value, "y", item.id - 1)}
                            styles={PMcustomStyles}
                          />
                        </Chartselect>
                      }
                    </CheckItem>
                  ))
                }
              </Componentcheckbox>
            </ComponentoptionWapper>
            <ComponentoptionWapper>
              <Componentbutton onClick={() => this.props.sendinfo(selectedProject, startDate, endDate, chart)}>Create</Componentbutton>
            </ComponentoptionWapper>
            <ComponentoptionWapper>
              <Componentcheckbox>
                {this.renderChart(projectdata)}
              </Componentcheckbox>
            </ComponentoptionWapper>
          </PagePage>
        </PageWrapper>
      )
    } else {
      return <Navigate to='/login' />
    }
  }

  componentDidMount() {
    this.props.getproject();
  }
}

const mapStateToProps = (state) => ({
  projectlist: state.statement.projectlist,
  projectdata: state.statement.projectdata
})

const mapDispatchToProps = (dispatch) => {
  return {
    getproject() {
      dispatch(actionCreators.getproject())
    },
    sendinfo(selectedProject) {
      const projectChecked = selectedProject
        ? selectedProject.map(option => option.value)
        : [];
      dispatch(actionCreators.sendinfo(projectChecked));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Statement);