import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
  ComponentWapper,
  Componentindex,
  Componentinfo,
  Componentbutton,
  Componenttitle,
  ComponentoptionWapper,
  Sendresult
} from '../style';

class Approve extends PureComponent {
  render() {
    const { Asend, Asendvalue, approve_pid, approve_pmid, approve_time, oldcontent, newcontent } = this.props;
    return (
      <ComponentWapper>
        <Componenttitle>Approve</Componenttitle>
        <ComponentoptionWapper>
          <Componentindex>Project ID</Componentindex>
          <Componentinfo>{approve_pid}</Componentinfo>
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentindex>PM ID</Componentindex>
          <Componentinfo>{approve_pmid}</Componentinfo>
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentindex>Time</Componentindex>
          <Componentinfo>{approve_time}</Componentinfo>
        </ComponentoptionWapper>
        <ComponentoptionWapper className='contentwarpper'>
          <ComponentoptionWapper className='content' >
            <Componentindex>Old Content</Componentindex>
            <Componentinfo className='content 'dangerouslySetInnerHTML={{ __html: oldcontent }}></Componentinfo>
          </ComponentoptionWapper>
          <ComponentoptionWapper className='content'>
            <Componentindex>New Content</Componentindex>
            <Componentinfo className='content' dangerouslySetInnerHTML={{ __html: newcontent }}></Componentinfo>
          </ComponentoptionWapper>
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentbutton onClick={() => this.props.Asendinfo(1)}>Accept</Componentbutton>
          <Componentbutton onClick={() => this.props.Asendinfo(0)} className='reject' >Reject</Componentbutton>
          {Asend ? (Asendvalue ? <Sendresult>success</Sendresult> : <Sendresult className='fail'>fail</Sendresult>) : null}
        </ComponentoptionWapper>
      </ComponentWapper>
    )
  }

  componentDidMount() {
    this.props.getnewcontent();
    this.props.getoldcontent();
  }
}

const mapStateToProps = (state) => ({
  Asend: state.admin.Asend,
  Asendvalue: state.admin.Asendvalue,
  approve_pid: state.admin.approve_pid,
  approve_pmid: state.admin.approve_pmid,
  approve_time: state.admin.approve_time,
  oldcontent: state.admin.oldcontent,
  newcontent: state.admin.newcontent,
})

const mapDisptchToProps = (dispatch) => {
  return {
    Asendinfo(type) {
      dispatch(actionCreators.Asendinfo(type));
    },
    getoldcontent() {
      dispatch(actionCreators.getoldcontent())
    },
    getnewcontent() {
      dispatch(actionCreators.getnewcontent())
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Approve);