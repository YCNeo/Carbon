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
    selectedAccess: null,
    allAccessSelected: false,
  };

  handleSelectChange = (selectedOptions) => {
    this.setState({ selectedAccess: selectedOptions });
  };

  handleSelectAll = () => {
    const { accesslist } = this.props;
    const accessOptions = accesslist.map(item => ({
      value: item.id,
      label: item.name
    }));
    this.setState({
      selectedAccess: accessOptions,
      allAccessSelected: true
    });
  };

  render() {
    const { accesslist } = this.props;
    const { selectedAccess } = this.state;

    const accessOptions = accesslist.map(item => ({
      value: item.id,
      label: item.name
    }));

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
            closeMenuOnSelect={false}
            options={accessOptions}
            isMulti
            value={selectedAccess}
            onChange={this.handleSelectChange}
            styles={customStyles}
          />
          <Componentbutton className='selectall' onClick={this.handleSelectAll}>
            Select All
          </Componentbutton>
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentbutton onClick={() => this.props.CUsendinfo(this.user_name, selectedAccess)}>Create</Componentbutton>
        </ComponentoptionWapper>
      </ComponentWapper>
    )
  }

  componentDidMount() {
    this.props.getaccess();
  }
}

const mapStateToProps = (state) => ({
  accesslist: state.admin.accesslist
});

const mapDisptchToProps = (dispatch) => {
  return {
    CUsendinfo(user_name, selectedAccess) {
      const accessChecked = selectedAccess
        ? selectedAccess.map(option => {
          const { value: id, label: name } = option;
          return { id, name };
        })
        : [];
      dispatch(actionCreators.CUsendinfo(user_name.value, accessChecked))
    },
    getaccess() {
      dispatch(actionCreators.getaccess())
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Createuser);