import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import Select from 'react-select';
import {
  ComponentWapper,
  Componentindex,
  Componentinput,
  Componentbutton,
  Componenttitle,
  ComponentoptionWapper,
  Componentcheckbox,
  Innerpageoption
} from '../../../components/style';

class Member extends PureComponent {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Post' },
      { id: 2, text: 'Revise' },
      { id: 3, text: 'Delete' },
      { id: 4, text: 'Retrieve' },
    ],
    postFormData: {
      eid: '',
      position: null
    },
    reviseFormData: {
      eid: '',
      position: null
    },
    deleteFormData: {
      eid: ''
    },
    retrieveFormData: {
      eid: '',
      name: '',
      position: null
    },
    display: false,
  };

  handleMouseEnter = (id) => {
    this.setState({ hoveredBox: id });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredBox: null });
  };

  handleInputChange = (page, field, value) => {
    this.setState((prevState) => ({
      [`${page}FormData`]: {
        ...prevState[`${page}FormData`],
        [field]: value
      }
    }));
  };

  handleSelectChange = (page, selectedOptions) => {
    this.setState((prevState) => ({
      [`${page}FormData`]: {
        ...prevState[`${page}FormData`],
        position: selectedOptions
      }
    }));
  };

  revsiedata = (member) => {
    this.setState({
      reviseFormData: { eid: member.eid }
    });
  }

  deletedata = (member) => {
    this.setState({
      deleteFormData: { eid: member.eid }
    });
  }

  whichpage(page, retrieve_member) {
    const { postFormData, reviseFormData, deleteFormData, retrieveFormData } = this.state;
    switch (page) {
      case 1:
        {
          const positionOptions = this.props.positionlist.map(item => ({
            value: item.id,
            label: item.name
          }));

          return (
            <ComponentWapper>
              <ComponentoptionWapper>
                <Componentindex>EID</Componentindex>
                <Componentinput value={postFormData.eid} onChange={(e) => this.handleInputChange('post', 'eid', e.target.value)} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Position</Componentindex>
                <Select
                  placeholder="Select position"
                  options={positionOptions}
                  value={postFormData.position}
                  onChange={(option) => this.handleSelectChange('post', option)}
                  readOnly={localStorage.getItem('PM_rank') === 'member'}
                />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.memberpost(postFormData)}>Post</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 2: {
        const positionOptions = this.props.positionlist.map(item => ({
          value: item.id,
          label: item.name
        }));

        return (
          <ComponentWapper>
            <ComponentoptionWapper>
              <Componentindex>EID</Componentindex>
              <Componentinput value={reviseFormData.eid} onChange={(e) => this.handleInputChange('revise', 'eid', e.target.value)} />
            </ComponentoptionWapper>
            <ComponentoptionWapper>
              <Componentindex>Position</Componentindex>
              <Select
                placeholder="Select position"
                options={positionOptions}
                value={reviseFormData.position}
                onChange={(option) => this.handleSelectChange('revise', option)}
                readOnly={localStorage.getItem('PM_rank') === 'member'}
              />
            </ComponentoptionWapper>
            <ComponentoptionWapper>
              <Componentbutton onClick={() => this.props.memberrevise(reviseFormData)}>Revise</Componentbutton>
            </ComponentoptionWapper>
          </ComponentWapper>
        );
      }
      case 3: {
        return (
          <ComponentWapper>
            <ComponentoptionWapper>
              <Componentindex>EID</Componentindex>
              <Componentinput value={deleteFormData.eid} onChange={(e) => this.handleInputChange('delete', 'eid', e.target.value)} />
            </ComponentoptionWapper>
            <ComponentoptionWapper>
              <Componentbutton className='reject' onClick={() => this.props.memberremove(deleteFormData)}>Remove</Componentbutton>
            </ComponentoptionWapper>
          </ComponentWapper>
        );
      }
      case 4: {
        const positionOptions = this.props.positionlist.map(item => ({
          value: item.id,
          label: item.name
        }));

        return (
          <ComponentWapper>
            <ComponentoptionWapper>
              <Componentindex>EID</Componentindex>
              <Componentinput value={retrieveFormData.eid} onChange={(e) => this.handleInputChange('retrieve', 'eid', e.target.value)} />
            </ComponentoptionWapper>
            <ComponentoptionWapper>
              <Componentindex>Name</Componentindex>
              <Componentinput value={retrieveFormData.name} onChange={(e) => this.handleInputChange('retrieve', 'name', e.target.value)} />
            </ComponentoptionWapper>
            <ComponentoptionWapper>
              <Componentindex>Position</Componentindex>
              <Select
                placeholder="Select position"
                options={positionOptions}
                value={retrieveFormData.position}
                onChange={(option) => this.handleSelectChange('retrieve', option)}
              />
            </ComponentoptionWapper>
            <ComponentoptionWapper>
              <Componentbutton onClick={() => { this.props.memberretrieve(retrieveFormData); this.setState({ display: true }); }}>Retrieve</Componentbutton>
            </ComponentoptionWapper>
            {this.state.display ?
              <Componentcheckbox>
                {retrieve_member.map((member) => (
                  <ComponentoptionWapper key={member.eid}>
                    <Componentindex>{member.eid}</Componentindex>
                    <Componentindex>{member.name}</Componentindex>
                    <Componentbutton onClick={() => { this.props.setmemberpage(2); this.revsiedata(member) }}>revise</Componentbutton>
                    <Componentbutton onClick={() => { this.props.setmemberpage(3); this.deletedata(member) }} className='reject'>Delete</Componentbutton>
                  </ComponentoptionWapper>
                ))}
              </Componentcheckbox>
              :
              ''}
          </ComponentWapper>
        );
      }
      default:
        return;
    }
  }

  render() {
    const { setmemberpage, memberpage, retrieve_member } = this.props;
    const { hoveredBox, pages } = this.state;
    return (
      <ComponentWapper>
        <Componenttitle>Member</Componenttitle>
        <ComponentoptionWapper>
          {pages.map(({ id, text }) => (
            (localStorage.getItem('pm_rank') === 'pm' || text === 'Retrieve') && (
              <Innerpageoption
                key={id}
                onClick={() => setmemberpage(id)}
                onMouseEnter={() => this.handleMouseEnter(id)}
                onMouseLeave={this.handleMouseLeave}
                className={memberpage === id || hoveredBox === id ? 'mousein' : ''}
              >
                {text}
              </Innerpageoption>
            )
          ))}
        </ComponentoptionWapper>
        {this.whichpage(memberpage, retrieve_member)}
      </ComponentWapper>
    )
  }

  componentDidMount() {
    this.props.getposition();
  }
}

const mapStateToProps = (state) => ({
  memberpage: state.projectmanagement.memberpage,
  positionlist: state.projectmanagement.positionlist,
  retrieve_member: state.projectmanagement.retrieve_member
})

const mapDisptchToProps = (dispatch) => {
  return {
    setmemberpage(id) {
      dispatch(actionCreators.setmemberpage(id));
    },
    memberpost(postFormData) {
      const { eid, position } = postFormData;
      dispatch(actionCreators.memberpost(eid, position));
    },
    memberrevise(reviseFormData) {
      const { eid, position } = reviseFormData;
      dispatch(actionCreators.memberrevise(eid, position));
    },
    memberremove(deleteFormData) {
      const { eid } = deleteFormData;
      dispatch(actionCreators.memberremove(eid));
    },
    memberretrieve(retrieveFormData) {
      const { eid, name, position } = retrieveFormData;
      dispatch(actionCreators.memberretrieve(eid, name, position));
    },
    getposition() {
      dispatch(actionCreators.getposition());
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Member);