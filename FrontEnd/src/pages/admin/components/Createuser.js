import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { actionCreators } from '../store';
import {
  ComponentWapper,
  Componentindex,
  Componentinput,
  Componentbutton,
  Componenttitle,
  ComponentoptionWapper,
  customStyles
} from '../style';

class Createuser extends PureComponent {
  state = {
    selectedAccess: '',
    accessOptions: [
      { value: "1", label: "admin" },
      { value: "2", label: "member" },
      { value: "3", label: "read only" }
    ]
  };

  handleSelectChange = (selectedOptions) => {
    this.setState({ selectedAccess: selectedOptions });
  };

  render() {
    const { selectedAccess } = this.state;

    return (
      <ComponentWapper>
        <Componenttitle>Create User</Componenttitle>
        <ComponentoptionWapper>
          <Componentindex>User Name</Componentindex>
          <Componentinput ref={(input) => { this.user_name = input }} />
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentindex>Access</Componentindex>
          <Select
            placeholder="Select access"
            options={this.state.accessOptions}
            value={selectedAccess}
            onChange={this.handleSelectChange}
            styles={customStyles}
            isDisabled={localStorage.getItem('authority') === 'read_only'}
          />
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentbutton onClick={() => this.props.CUsendinfo(this.user_name, this.state.selectedAccess)}>Create</Componentbutton>
        </ComponentoptionWapper>
      </ComponentWapper>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDisptchToProps = (dispatch) => {
  return {
    CUsendinfo(user_name, selectedAccess) {
      dispatch(actionCreators.CUsendinfo(user_name.value, selectedAccess.label))
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Createuser);