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

class Createuser extends PureComponent {
  render() {
    const { CUsend, CUsendvalue } = this.props;
    return (
      <ComponentWapper>
        <Componenttitle>Create User</Componenttitle>
        <ComponentoptionWapper>
          <Componentindex>User Name</Componentindex>
          <Componentinput ref={(input) => { this.user_name = input }} />
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentindex>Access</Componentindex>
          <Componentinput className='bigbox' ref={(input) => { this.access = input }} />
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentbutton onClick={() => this.props.CUsendinfo(this.user_name, this.access)}>Create</Componentbutton>
          {CUsend ? (CUsendvalue ? <Sendresult>success</Sendresult> : <Sendresult className='fail'>fail</Sendresult>) : null}
        </ComponentoptionWapper>
      </ComponentWapper>
    )
  }
}

const mapStateToProps = (state) => ({
  CUsend: state.admin.CUsend,
  CUsendvalue: state.admin.CUsendvalue
})

const mapDisptchToProps = (dispatch) => {
  return {
    CUsendinfo(user_name, access) {
      dispatch(actionCreators.CUsendinfo(user_name.value, access.value));
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Createuser);