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
  Sendresult
} from '../style';

class Createproject extends PureComponent {
  render() {
    const { CPsend, CPsendvalue } = this.props;
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
          <Componentindex>Material</Componentindex>
          <Componentinput className='bigbox' ref={(input) => { this.material = input }} />
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentindex>Equipment</Componentindex>
          <Componentinput className='bigbox' ref={(input) => { this.equipment = input }} />
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentbutton onClick={() => this.props.CPsendinfo(this.project_name, this.pm_id, this.material, this.equipment)}>Create</Componentbutton>
          {CPsend ? (CPsendvalue ? <Sendresult>success</Sendresult> : <Sendresult className='fail'>fail</Sendresult>) : null}
        </ComponentoptionWapper>
      </ComponentWapper>
    )
  }
}

const mapStateToProps = (state) => ({
  CPsend: state.admin.CPsend,
  CPsendvalue: state.admin.CPsendvalue
})

const mapDisptchToProps = (dispatch) => {
  return {
    CPsendinfo(project_name, pm_id, material, equipment) {
      dispatch(actionCreators.CPsendinfo(project_name.value, pm_id.value, material.value, equipment.value));
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Createproject);