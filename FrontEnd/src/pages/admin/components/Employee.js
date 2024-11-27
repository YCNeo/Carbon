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
  Innerpageoption
} from '../../../components/style';
import { table } from '../../../components/function/table';

class Employee extends PureComponent {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Post' },
      { id: 2, text: 'Revise' },
      { id: 3, text: 'Delete' },
      { id: 4, text: 'Retrieve' },
    ],
    postFormData: {
      name: '',
      gender: '',
      phone: '',
      mail: '',
      region: ''
    },
    reviseFormData: {
      eid: '',
      name: '',
      gender: '',
      phone: '',
      mail: '',
      region: ''
    },
    deleteFormData: {
      eid: '',
      name: ''
    },
    retrieveFormData: {
      eid: '',
      name: '',
      pid: '',
      region: ''
    },
    display: false
  };

  handleMouseEnter = (id) => {
    this.setState({ hoveredBox: id });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredBox: null });
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

  revsiedata = (employee) => {
    this.setState({
      reviseFormData: {
        eid: employee.eid,
        name: employee.name,
        gender: employee.gender,
        phone: employee.phone,
        mail: employee.email,
        region: employee.nation
      }
    });
  }

  deletedata = (employee) => {
    this.setState({
      deleteFormData: {
        eid: employee.eid,
        name: employee.name
      }
    });
  }

  whichpage(page, retrieve_employee) {
    const { postFormData, reviseFormData, deleteFormData, retrieveFormData } = this.state;
    switch (page) {
      case 1:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper>
                <Componentindex>Name</Componentindex>
                <Componentinput value={postFormData.name} onChange={(e) => this.handleInputChange(e, 'postFormData', 'name')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Gender</Componentindex>
                <Componentinput value={postFormData.gender} onChange={(e) => this.handleInputChange(e, 'postFormData', 'gender')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Phone</Componentindex>
                <Componentinput value={postFormData.phone} onChange={(e) => this.handleInputChange(e, 'postFormData', 'phone')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Mail</Componentindex>
                <Componentinput value={postFormData.mail} onChange={(e) => this.handleInputChange(e, 'postFormData', 'mail')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Region</Componentindex>
                <Componentinput value={postFormData.region} onChange={(e) => this.handleInputChange(e, 'postFormData', 'region')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.employeepost(postFormData)}>Post</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 2:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper>
                <Componentindex>EID</Componentindex>
                <Componentinput value={reviseFormData.eid} onChange={(e) => this.handleInputChange(e, 'reviseFormData', 'eid')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Name</Componentindex>
                <Componentinput value={reviseFormData.name} onChange={(e) => this.handleInputChange(e, 'reviseFormData', 'name')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Gender</Componentindex>
                <Componentinput value={reviseFormData.gender} onChange={(e) => this.handleInputChange(e, 'reviseFormData', 'gender')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Phone</Componentindex>
                <Componentinput value={reviseFormData.phone} onChange={(e) => this.handleInputChange(e, 'reviseFormData', 'phone')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Mail</Componentindex>
                <Componentinput value={reviseFormData.mail} onChange={(e) => this.handleInputChange(e, 'reviseFormData', 'mail')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Region</Componentindex>
                <Componentinput value={reviseFormData.region} onChange={(e) => this.handleInputChange(e, 'reviseFormData', 'region')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.employeerevise(reviseFormData)}>Revise</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 3:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper>
                <Componentindex>EID</Componentindex>
                <Componentinput value={deleteFormData.eid} onChange={(e) => this.handleInputChange(e, 'deleteFormData', 'eid')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Name</Componentindex>
                <Componentinput value={deleteFormData.name} onChange={(e) => this.handleInputChange(e, 'deleteFormData', 'name')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.employeedelete(deleteFormData)}>Delete</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 4:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper>
                <Componentindex>EID</Componentindex>
                <Componentinput value={retrieveFormData.eid} onChange={(e) => this.handleInputChange(e, 'retrieveFormData', 'eid')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Name</Componentindex>
                <Componentinput value={retrieveFormData.name} onChange={(e) => this.handleInputChange(e, 'retrieveFormData', 'name')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>PID</Componentindex>
                <Componentinput value={retrieveFormData.pid} onChange={(e) => this.handleInputChange(e, 'retrieveFormData', 'pid')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Region</Componentindex>
                <Componentinput value={retrieveFormData.region} onChange={(e) => this.handleInputChange(e, 'retrieveFormData', 'region')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => { this.props.employeeretrieve(retrieveFormData); this.setState({ display: true }) }}>Retrieve</Componentbutton>
              </ComponentoptionWapper>
              {this.state.display ?
                <div>{table(retrieve_employee, this.props.setpage, this.revsiedata, this.deletedata)}</div>
                :
                ''}
            </ComponentWapper>
          );
        }
      default:
        return null;
    }
  }

  render() {
    const { setpage, employeepage, retrieve_employee } = this.props;
    const { hoveredBox, pages } = this.state;
    return (
      <ComponentWapper>
        <Componenttitle>Access Assignment</Componenttitle>
        <ComponentoptionWapper>
          {pages.map(({ id, text }) => (
            <Innerpageoption
              key={id}
              onClick={() => setpage(id)}
              onMouseEnter={() => this.handleMouseEnter(id)}
              onMouseLeave={this.handleMouseLeave}
              className={employeepage === id || hoveredBox === id ? 'mousein' : ''}
            >
              {text}
            </Innerpageoption>
          ))}
        </ComponentoptionWapper>
        {this.whichpage(employeepage, retrieve_employee)}
      </ComponentWapper>
    );
  }
}

const mapStateToProps = (state) => ({
  employeepage: state.admin.employeepage,
  retrieve_employee: state.admin.retrieve_employee
})

const mapDisptchToProps = (dispatch) => {
  return {
    setpage(id) {
      dispatch(actionCreators.setpage(id));
    },
    employeepost(postFormData) {
      const { name, gender, phone, mail, region } = postFormData;
      dispatch(actionCreators.employeepost(name, gender, phone, mail, region));
    },
    employeerevise(reviseFormData) {
      const { eid, name, gender, phone, mail, region } = reviseFormData;
      dispatch(actionCreators.employeerevise(eid, name, gender, phone, mail, region));
    },
    employeedelete(deleteFormData) {
      const { eid, name } = deleteFormData;
      dispatch(actionCreators.employeedelete(eid, name));
    },
    employeeretrieve(retrieveFormData) {
      const { eid, name, pid, region } = retrieveFormData;
      dispatch(actionCreators.employeeretrieve(eid || null, name || null, pid || null, region || null));
    }
  };
};


export default connect(mapStateToProps, mapDisptchToProps)(Employee);