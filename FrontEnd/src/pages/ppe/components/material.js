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
      { id: 3, text: 'Retieve' },
      { id: 4, text: 'Disposal list' }
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
                <Componentbutton onClick={() => this.props.materialpost(this.name, this.supplier_name, this.amount, this.unit, this.factor, startDate, disposalDate, this.age, endDate)}>Post</Componentbutton>
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
                <Componentinput ref={(input) => { this.name = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>MID</Componentindex>
                <Componentinput ref={(input) => { this.m_id = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.materialdelete(this.name, this.m_id)}>Delete</Componentbutton>
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
                <Componentinput ref={(input) => { this.name = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Supplier Name</Componentindex>
                <Componentinput ref={(input) => { this.supplier_name = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>MID</Componentindex>
                <Componentinput ref={(input) => { this.m_id = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => {this.props.materialretrieve(this.name, this.supplier_name, this.m_id); this.setState({ display: true });}}>Retrieve</Componentbutton>
              </ComponentoptionWapper>
              {this.state.display ?
                <div>
                  <ComponentoptionWapper>
                    <Componentcheckbox>list</Componentcheckbox>
                  </ComponentoptionWapper>
                  <ComponentoptionWapper>
                    <Componentbutton onClick={()=>{this.props.setmaterialpage(2)}} className='reject'>Delete</Componentbutton>
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
            <Innerpageoption
              key={id}
              onClick={() => setmaterialpage(id)}
              onMouseEnter={() => this.handleMouseEnter(id)}
              onMouseLeave={this.handleMouseLeave}
              className={materialpage === id || hoveredBox === id ? 'mousein' : ''}
            >
              {text}
            </Innerpageoption>
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
    materialpost(name, supplier_name, amount, unit, factor, startDate, disposalDate, age, endDate) {
      dispatch(actionCreators.materialpost(name.value, supplier_name.value, amount.value, unit.value, factor.value, startDate, disposalDate, age.value, endDate));
    },
    materialretrieve(name, supplier_name, m_id) {
      dispatch(actionCreators.materialretrieve(name.value, supplier_name.value, m_id.value));
    },
    materialdelete(name, m_id) {
      dispatch(actionCreators.materialdelete(name.value, m_id.value));
    },
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Material);