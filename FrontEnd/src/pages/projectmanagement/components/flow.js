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
  Projectmanagementinnerpageoption
} from '../style';

class Flow extends PureComponent {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Design' },
      { id: 2, text: 'Revise' }
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
          return (
            <ComponentWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.employeepost(this.name, this.gender, this.phone, this.mail, this.region)}>Post</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 2:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.employeerevise(this.eid, this.name, this.gender, this.phone, this.mail, this.region)}>Revise</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      default:
        return;
    }
  }

  handleCheckButtonClick = (index) => {
    this.setState((prevState) => {
      const newAccessChecked = [...prevState.accessChecked];
      newAccessChecked[index] = !newAccessChecked[index];
      return { accessChecked: newAccessChecked };
    });
  };

  render() {
    const { setpage, employeepage } = this.props;
    const { hoveredBox, pages } = this.state;
    return (
      <ComponentWapper>
        <Componenttitle>Access Assignment</Componenttitle>
        <ComponentoptionWapper>
          {pages.map(({ id, text }) => (
            <Projectmanagementinnerpageoption
              key={id}
              onClick={() => setpage(id)}
              onMouseEnter={() => this.handleMouseEnter(id)}
              onMouseLeave={this.handleMouseLeave}
              className={employeepage === id || hoveredBox === id ? 'mousein' : ''}
            >
              {text}
            </Projectmanagementinnerpageoption>
          ))}
        </ComponentoptionWapper>
        {this.whichpage(employeepage)}
      </ComponentWapper>
    )
  }
}

const mapStateToProps = (state) => ({
  employeepage: state.admin.employeepage
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


export default connect(mapStateToProps, mapDisptchToProps)(Flow);