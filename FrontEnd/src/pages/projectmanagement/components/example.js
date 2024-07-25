import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
  ComponentWapper,
  Componentindex,
  Componentinput,
  Componentbutton,
  Componenttitle,
  ComponentoptionWapper,
  Sendresult,
  Adminemployeepageoption
} from '../style';

class Employee extends PureComponent {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Post' },
      { id: 2, text: 'Revise' },
      { id: 3, text: 'Delete' },
      { id: 4, text: 'Retieve' },
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
          const { EPsend, EPsendvalue } = this.props;
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>Name</Componentindex>
                <Componentinput ref={(input) => { this.name = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Gender</Componentindex>
                <Componentinput ref={(input) => { this.gender = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Phone</Componentindex>
                <Componentinput ref={(input) => { this.phone = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Mail</Componentindex>
                <Componentinput ref={(input) => { this.mail = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Region</Componentindex>
                <Componentinput ref={(input) => { this.region = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.employeepost(this.name, this.gender, this.phone, this.mail, this.region)}>Post</Componentbutton>
                {EPsend ? (EPsendvalue ? <Sendresult>success</Sendresult> : <Sendresult className='fail'>fail</Sendresult>) : null}
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 2:
        {
          const { ERsend, ERsendvalue } = this.props;
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>EID</Componentindex>
                <Componentinput ref={(input) => { this.eid = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper >
                <Componentindex>Name</Componentindex>
                <Componentinput ref={(input) => { this.name = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Gender</Componentindex>
                <Componentinput ref={(input) => { this.gender = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Phone</Componentindex>
                <Componentinput ref={(input) => { this.phone = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Mail</Componentindex>
                <Componentinput ref={(input) => { this.mail = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Region</Componentindex>
                <Componentinput ref={(input) => { this.region = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.employeerevise(this.eid, this.name, this.gender, this.phone, this.mail, this.region)}>Revise</Componentbutton>
                {ERsend ? (ERsendvalue ? <Sendresult>success</Sendresult> : <Sendresult className='fail'>fail</Sendresult>) : null}
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 3:
        {
          const { EDsend, EDsendvalue } = this.props;
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>EID</Componentindex>
                <Componentinput ref={(input) => { this.eid = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Name</Componentindex>
                <Componentinput ref={(input) => { this.name = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.employeedelete(this.eid, this.name)}>Delete</Componentbutton>
                {EDsend ? (EDsendvalue ? <Sendresult>success</Sendresult> : <Sendresult className='fail'>fail</Sendresult>) : null}
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 4:
        {
          const { ESsend, ESsendvalue } = this.props;
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>EID</Componentindex>
                <Componentinput ref={(input) => { this.eid = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Name</Componentindex>
                <Componentinput ref={(input) => { this.name = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>PID</Componentindex>
                <Componentinput ref={(input) => { this.pid = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Region</Componentindex>
                <Componentinput ref={(input) => { this.region = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.employeeretrieve(this.eid, this.name, this.pid, this.region)}>Post</Componentbutton>
                {ESsend ? (ESsendvalue ? <Sendresult>success</Sendresult> : <Sendresult className='fail'>fail</Sendresult>) : null}
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      default:
        return;
    }
  }


  render() {
    const { setpage, employeepage } = this.props;
    const { hoveredBox, pages } = this.state;
    return (
      <ComponentWapper>
        <Componenttitle>Access Assignment</Componenttitle>
        <ComponentoptionWapper>
          {pages.map(({ id, text }) => (
            <Adminemployeepageoption
              key={id}
              onClick={() => setpage(id)}
              onMouseEnter={() => this.handleMouseEnter(id)}
              onMouseLeave={this.handleMouseLeave}
              className={employeepage === id || hoveredBox === id ? 'mousein' : ''}
            >
              {text}
            </Adminemployeepageoption>
          ))}
        </ComponentoptionWapper>
        {this.whichpage(employeepage)}
      </ComponentWapper>
    )
  }
}

const mapStateToProps = (state) => ({
  employeepage: state.admin.employeepage,
  EPsend: state.admin.EPsend,
  EPsendvalue: state.admin.EPsendvalue,
  ERsend: state.admin.ERsend,
  ERsendvalue: state.admin.ERsendvalue,
  EDsend: state.admin.EDsend,
  EDsendvalue: state.admin.EDsendvalue,
  ESsend: state.admin.ESsend,
  ESsendvalue: state.admin.ESsendvalue
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

export default connect(mapStateToProps, mapDisptchToProps)(Employee);