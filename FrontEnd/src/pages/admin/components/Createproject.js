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
} from '../../../components/style';

class Createproject extends PureComponent {
  state = {
    selectedBoundary: null,
  };

  handleSelectChange = (selectedOptions) => {
    this.setState({ selectedBoundary: selectedOptions });
  };

  render() {
    const { boundarylist } = this.props;
    const { selectedBoundary } = this.state;

    const boundaryOptions = boundarylist.map(item => ({
      value: item.bid,
      label: item.name
    }));

    return (
      <ComponentWapper>
        <Componenttitle>Create Project</Componenttitle>
        <ComponentoptionWapper>
          <Componentindex>Project Name</Componentindex>
          <Componentinput ref={(input) => { this.project_name = input }} />
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentindex>PM ID</Componentindex>
          <Componentinput ref={(input) => { this.pm_id = input }} />
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentindex>Boundary</Componentindex>
          <Select
            placeholder="Select boundary"
            options={boundaryOptions}
            value={selectedBoundary}
            onChange={this.handleSelectChange}
            styles={customStyles}
          />
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentbutton onClick={() => this.props.CPsendinfo(this.project_name, this.pm_id, selectedBoundary)}>Create</Componentbutton>
        </ComponentoptionWapper>
      </ComponentWapper>
    )
  }

  componentDidMount() {
    this.props.getboundary();
  }
}

const mapStateToProps = (state) => ({
  boundarylist: state.admin.boundarylist
})

const mapDisptchToProps = (dispatch) => {
  return {
    CPsendinfo(project_name, pm_id, selectedBoundary) {
      if (selectedBoundary === null) {
        alert('choose boundary');
      } else {
        dispatch(actionCreators.CPsendinfo(project_name.value, pm_id.value, selectedBoundary.value));
      }
    },
    getboundary() {
      dispatch(actionCreators.getboundary())
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Createproject);