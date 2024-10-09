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

class Material extends PureComponent {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Post' },
      { id: 2, text: 'Delete' },
      { id: 3, text: 'Retrieve' },
      { id: 4, text: 'Disposal list' }
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
      name: '',
      mid: ''
    },
    retrieveFormdata: {
      name: '',
      supplier_name: '',
      mid: ''
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
    const { postFormdata, deleteFormdata, retrieveFormdata } = this.state;
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
                <Componentbutton onClick={() => this.props.materialpost(postFormdata)}>Post</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 2:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>Name</Componentindex>
                <Componentinput value={deleteFormdata.name} onChange={(e) => this.handleInputChange(e, 'deleteFormdata', 'name')} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>MID</Componentindex>
                <Componentinput value={deleteFormdata.mid} onChange={(e) => this.handleInputChange(e, 'deleteFormdata', 'mid')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.materialdelete(deleteFormdata)}>Delete</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          )
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
                <Componentindex>MID</Componentindex>
                <Componentinput value={retrieveFormdata.mid} onChange={(e) => this.handleInputChange(e, 'retrieveFormdata', 'mid')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => { this.props.materialretrieve(retrieveFormdata); this.setState({ display: true }); }}>Retrieve</Componentbutton>
              </ComponentoptionWapper>
              {this.state.display ?
                <div>
                  <ComponentoptionWapper>
                    <Componentcheckbox>list</Componentcheckbox>
                  </ComponentoptionWapper>
                  <ComponentoptionWapper>
                    <Componentbutton onClick={() => { this.props.setmaterialpage(2) }} className='reject'>Delete</Componentbutton>
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
                <Componentcheckbox>disposal list</Componentcheckbox>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      default:
        return;
    }
  }

  render() {
    const { setmaterialpage, materialpage } = this.props;
    const { hoveredBox, pages } = this.state;
    return (
      <ComponentWapper>
        <Componenttitle>Material</Componenttitle>
        <ComponentoptionWapper>
          {pages.map(({ id, text }) => (
            (localStorage.getItem('authority') === 'admin' || text === 'Retrieve') && (
              <Innerpageoption
                key={id}
                onClick={() => setmaterialpage(id)}
                onMouseEnter={() => this.handleMouseEnter(id)}
                onMouseLeave={this.handleMouseLeave}
                className={materialpage === id || hoveredBox === id ? 'mousein' : ''}
              >
                {text}
              </Innerpageoption>
            )
          ))}
        </ComponentoptionWapper>
        {this.whichpage(materialpage)}
      </ComponentWapper>
    )
  }
}

const mapStateToProps = (state) => ({
  materialpage: state.ppe.materialpage
})

const mapDisptchToProps = (dispatch) => {
  return {
    setmaterialpage(id) {
      dispatch(actionCreators.setmaterialpage(id));
    },
    materialpost(postFormdata) {
      const { name, supplier_name, amount, unit, factor, startDate, disposalDate, age, endDate } = postFormdata
      dispatch(actionCreators.materialpost(name, supplier_name, amount, unit, factor, startDate, disposalDate, age, endDate));
    },
    materialretrieve(retrieveFormdata) {
      const { name, supplier_name, mid } = retrieveFormdata
      dispatch(actionCreators.materialretrieve(name, supplier_name, mid));
    },
    materialdelete(deleteFormdata) {
      const { name, mid } = deleteFormdata
      dispatch(actionCreators.materialdelete(name, mid));
    },
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Material);