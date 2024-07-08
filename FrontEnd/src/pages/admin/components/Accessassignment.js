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

class Accessassignment extends PureComponent {
  render() {
    const { AAsend, AAsendvalue } = this.props;
    return (
      <ComponentWapper>
        <Componenttitle>Access Assignment</Componenttitle>
        <ComponentoptionWapper>
          <Componentindex>User ID</Componentindex>
          <Componentinput ref={(input) => { this.user_id = input }} />
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentindex>Access</Componentindex>
          <Componentinput className='bigbox' ref={(input) => { this.access = input }} />
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentbutton onClick={() => this.props.AAsendinfo(this.user_id, this.access)}>Assign</Componentbutton>
          {AAsend ? (AAsendvalue ? <Sendresult>success</Sendresult> : <Sendresult className='fail'>fail</Sendresult>) : null}
        </ComponentoptionWapper>
      </ComponentWapper>
    )
  }
}

const mapStateToProps = (state) => ({
  AAsend: state.admin.AAsend,
  AAsendvalue: state.admin.AAsendvalue
})

const mapDisptchToProps = (dispatch) => {
  return {
    AAsendinfo(user_id, access) {
      dispatch(actionCreators.AAsendinfo(user_id.value, access.value));
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Accessassignment);