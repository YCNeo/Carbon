import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import { actionCreators } from '../store';
import {
  ComponentWapper,
  Componentindex,
  Componentbutton,
  Componenttitle,
  ComponentoptionWapper,
  Innerpageoption,
  DatePickerWrapper,
  customStyles
} from '../../../components/style';
import { table } from '../../../components/function/table';
import { getboundary } from '../../admin/store/actionCreators';

class Statement extends PureComponent {
  state = {
    hoveredBox: null,
    selecedBoundary: null,
    pages: [
      { id: 1, text: 'Retrieve' },
    ],
    startDate: new Date(),
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

  handleTimeInputChange = (field, event) => {
    this.setState({ [field]: event.target.value });
  };

  handleDateChange = (field, date) => {
    this.setState({ [field]: date });
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

  handleSelectChange = (selectedOptions) => {
    this.setState({ selecedBoundary: selectedOptions });
  };

  whichpage(page, retrieve_statement) {
    const { startDate, endDate, customTimeInput, selecedBoundary } = this.state;
    const { boundarylist } = this.props;
    const CustomTimeInput = ({ value, onChange }) => (
      <input
        value={value}
        onChange={onChange}
        placeholder="HH:mm"
        className="custom-time-input"
      />
    );

    const boundaryOptions = boundarylist.map(item => ({
      value: item.bid,
      label: item.name
    }));

    switch (page) {
      case 1:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>Start Date</Componentindex>
                <DatePickerWrapper>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => this.handleDateChange('startDate', date)}
                    dateFormat="yyyy/MM/dd"
                    timeCaption="time"
                    customTimeInput={<CustomTimeInput value={customTimeInput} onChange={(e) => this.handleTimeInputChange('customTimeInput', e)} />}
                  />
                </DatePickerWrapper>
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>End Date</Componentindex>
                <DatePickerWrapper>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => this.handleDateChange('endDate', date)}
                    dateFormat="yyyy/MM/dd"
                    timeCaption="time"
                    customTimeInput={<CustomTimeInput value={customTimeInput} onChange={(e) => this.handleTimeInputChange('customTimeInput', e)} />}
                  />
                </DatePickerWrapper>
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Category</Componentindex>
                <Select
                  placeholder="Select boundary"
                  closeMenuOnSelect={false}
                  options={boundaryOptions}
                  isMulti
                  value={selecedBoundary}
                  onChange={this.handleSelectChange}
                  styles={customStyles}
                />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => { this.props.statementretrieve(startDate, endDate, selecedBoundary); this.setState({ display: true }); }}>Retrieve</Componentbutton>
              </ComponentoptionWapper>
              {this.state.display ?
                <div>{table(retrieve_statement, null, null, null)}</div>
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
    const { setstatementpage, statementpage, retrieve_statement } = this.props;
    const { hoveredBox, pages } = this.state;
    return (
      <ComponentWapper>
        <Componenttitle>Statement</Componenttitle>
        <ComponentoptionWapper>
          {pages.map(({ id, text }) => (
            <Innerpageoption
              key={id}
              onClick={() => setstatementpage(id)}
              onMouseEnter={() => this.handleMouseEnter(id)}
              onMouseLeave={this.handleMouseLeave}
              className={statementpage === id || hoveredBox === id ? 'mousein' : ''}
            >
              {text}
            </Innerpageoption>
          ))}
        </ComponentoptionWapper>
        {this.whichpage(statementpage, retrieve_statement)}
      </ComponentWapper>
    )
  }

  componentDidMount() {
    this.props.getboundary();
  }
}

const mapStateToProps = (state) => ({
  statementpage: state.esg.statementpage,
  retrieve_statement: state.esg.retrieve_statement,
  boundarylist: state.admin.boundarylist
});

const mapDisptchToProps = (dispatch) => {
  return {
    setstatementpage(id) {
      dispatch(actionCreators.setstatementpage(id));
    },
    statementretrieve(startdate, enddate, Boundarylist) {
      const startDate = startdate.toISOString().split('T')[0];
      const endDate = enddate.toISOString().split('T')[0];
      const selecedBoundary = Boundarylist.map(option => {
        const { value: bid } = option;
        return { bid };
      })
      dispatch(actionCreators.statementretrieve(startDate, endDate, selecedBoundary));
    },
    getboundary() {
      dispatch(getboundary());
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Statement);