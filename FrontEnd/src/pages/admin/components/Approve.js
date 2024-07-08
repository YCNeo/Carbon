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

class Approve extends PureComponent {
  render() {
    const { Asend, Asendvalue } = this.props;
    return (
      <ComponentWapper>
        <Componenttitle>Approve</Componenttitle>
        <ComponentoptionWapper>
          <Componentindex>Project ID</Componentindex>
          <Componentinput ref={(input) => { this.project_id = input }} />
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentindex>PM ID</Componentindex>
          <Componentinput ref={(input) => { this.pm_id = input }} />
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentindex>Time</Componentindex>
          <Componentinput className='bigbox' ref={(input) => { this.time = input }} />
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentindex>Old Content</Componentindex>
          <Componentinput className='bigbox' ref={(input) => { this.old_content = input }} />
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentindex>New Content</Componentindex>
          <Componentinput className='bigbox' ref={(input) => { this.new_content = input }} />
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentbutton onClick={() => this.props.Asendinfo(1, this.project_id, this.pm_id, this.time, this.old_content, this.new_content)}>Accept</Componentbutton>
          <Componentbutton onClick={() => this.props.Asendinfo(0, this.project_id, this.pm_id, this.time, this.old_content, this.new_content)} className='reject' >Reject</Componentbutton>
          {Asend ? (Asendvalue ? <Sendresult>success</Sendresult> : <Sendresult className='fail'>fail</Sendresult>) : null}
        </ComponentoptionWapper>
      </ComponentWapper>
    )
  }
}

const mapStateToProps = (state) => ({
  Asend: state.admin.Asend,
  Asendvalue: state.admin.Asendvalue
})

const mapDisptchToProps = (dispatch) => {
  return {
    Asendinfo(type, project_id, pm_id, time, old_content, new_content) {
      dispatch(actionCreators.Asendinfo(type, project_id.value, pm_id.value, time.value, old_content.value, new_content.value));
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Approve);