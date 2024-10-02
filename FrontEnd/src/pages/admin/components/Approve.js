import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { actionCreators } from '../store';
import {
  ComponentWapper,
  Componentindex,
  Componentinfo,
  Componentbutton,
  Componenttitle,
  ComponentoptionWapper,
  customStyles
} from '../../../components/style';

class Approve extends PureComponent {
  state = {
    selectedApprove: null,
    PID: '',
    PMID: '',
    time: '',
    oldContent: '',
    newContent: ''
  };

  handleSelectChange = (selectedOptions) => {
    const selectedApprove = this.props.approvelist.find(item => item.PID === selectedOptions.value);
    if (selectedApprove) {
      this.setState({
        selectedApprove: selectedOptions,
        PID: selectedApprove.PID,
        PMID: selectedApprove.PMID,
        time: selectedApprove.time,
        oldContent: selectedApprove.oldContent,
        newContent: selectedApprove.newContent
      });
    }
  };

  render() {
    const { approvelist } = this.props;
    const { selectedApprove, PID, PMID, time, oldContent, newContent } = this.state;

    const approveOptions = approvelist.map(item => ({
      value: item.PID,
      label: item.PMID
    }));

    return (
      <ComponentWapper>
        <Componenttitle>Approve</Componenttitle>
        <ComponentoptionWapper>
          <Select
            placeholder="Select record"
            options={approveOptions}
            value={selectedApprove}
            onChange={this.handleSelectChange}
            styles={customStyles}
          />
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentindex>Project ID</Componentindex>
          <Componentinfo>{PID}</Componentinfo>
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentindex>PM ID</Componentindex>
          <Componentinfo>{PMID}</Componentinfo>
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentindex>Time</Componentindex>
          <Componentinfo>{time}</Componentinfo>
        </ComponentoptionWapper>
        <ComponentoptionWapper className='contentwarpper'>
          <ComponentoptionWapper className='content' >
            <Componentindex>Old Content</Componentindex>
            <Componentinfo className='content ' dangerouslySetInnerHTML={{ __html: oldContent }}></Componentinfo>
          </ComponentoptionWapper>
          <ComponentoptionWapper className='content'>
            <Componentindex>New Content</Componentindex>
            <Componentinfo className='content' dangerouslySetInnerHTML={{ __html: newContent }}></Componentinfo>
          </ComponentoptionWapper>
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentbutton onClick={() => this.props.Asendinfo(1)}>Accept</Componentbutton>
          <Componentbutton onClick={() => this.props.Asendinfo(0)} className='reject' >Reject</Componentbutton>
        </ComponentoptionWapper>
      </ComponentWapper>
    )
  }

  componentDidMount() {
    this.props.getapprove();
  }
}

const mapStateToProps = (state) => ({
  approvelist: state.admin.approvelist,
})

const mapDisptchToProps = (dispatch) => {
  return {
    Asendinfo(type) {
      dispatch(actionCreators.Asendinfo(type));
    },
    getapprove() {
      dispatch(actionCreators.getapprove())
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Approve);