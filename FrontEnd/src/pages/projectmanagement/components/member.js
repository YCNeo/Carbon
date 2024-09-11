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
  Projectmanagementinnerpageoption
} from '../style';

class Member extends PureComponent {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Post' },
      { id: 2, text: 'Revise' },
      { id: 3, text: 'Delete' },
      { id: 4, text: 'Retieve' },
    ],
    display: false,
    selectedposition: '',
    retrieveposition: ''
  };

  handleMouseEnter = (id) => {
    this.setState({ hoveredBox: id });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredBox: null });
  };

  handleSelectChange = (selectedOptions) => {
    this.setState({ selectedposition: selectedOptions });
  };

  handleSelectChangeR = (selectedOptions) => {
    this.setState({ retrieveposition: selectedOptions });
  };

  whichpage(page) {
    switch (page) {
      case 1:
        {
          const positionOptions = this.props.positionlist.map(item => ({
            value: item.id,
            label: item.name
          }));

          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>EID</Componentindex>
                <Componentinput ref={(input) => { this.eid = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Position</Componentindex>
                <Select
                  placeholder="Select position"
                  options={positionOptions}
                  value={this.state.selectedposition}
                  onChange={this.handleSelectChange}
                  readOnly={localStorage.getItem('PM_rank') === 'member'}
                />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.memberpost(this.eid, this.state.selectedposition)}>Post</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 2:
        {
          const positionOptions = this.props.positionlist.map(item => ({
            value: item.id,
            label: item.name
          }));

          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>EID</Componentindex>
                <Componentinput ref={(input) => { this.eid = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Position</Componentindex>
                <Select
                  placeholder="Select position"
                  options={positionOptions}
                  value={this.state.selectedposition}
                  onChange={this.handleSelectChange}
                  readOnly={localStorage.getItem('PM_rank') === 'member'}
                />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.memberrevise(this.eid, this.state.selectedposition)}>Revise</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 3:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>EID</Componentindex>
                <Componentinput ref={(input) => { this.eid = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentbutton className='reject' onClick={() => this.props.memberremove(this.eid)}>Remove</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 4:
        {
          const positionOptions = this.props.positionlist.map(item => ({
            value: item.id,
            label: item.name
          }));

          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>EID</Componentindex>
                <Componentinput ref={(input) => { this.eid = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Name</Componentindex>
                <Componentinput ref={(input) => { this.name = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Position</Componentindex>
                <Select
                  placeholder="Select position"
                  options={positionOptions}
                  value={this.state.retrieveposition}
                  onChange={this.handleSelectChangeR}
                />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => { this.props.memberretrieve(this.eid, this.name, this.state.retrieveposition); this.setState({ display: true }); }}>Retrieve</Componentbutton>
              </ComponentoptionWapper>
              {this.state.display ?
                <div>
                  <ComponentoptionWapper>
                    <Componentcheckbox>list</Componentcheckbox>
                  </ComponentoptionWapper>
                  <ComponentoptionWapper>
                    <Componentbutton onClick={() => { this.props.setmemberpage(2) }}>revise</Componentbutton>
                    <Componentbutton onClick={() => { this.props.setmemberpage(3) }} className='reject'>Delete</Componentbutton>
                  </ComponentoptionWapper>
                </div>
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
    const { setmemberpage, memberpage } = this.props;
    const { hoveredBox, pages } = this.state;
    return (
      <ComponentWapper>
        <Componenttitle>Member</Componenttitle>
        <ComponentoptionWapper>
          {pages.map(({ id, text }) => (
            <Projectmanagementinnerpageoption
              key={id}
              onClick={() => setmemberpage(id)}
              onMouseEnter={() => this.handleMouseEnter(id)}
              onMouseLeave={this.handleMouseLeave}
              className={memberpage === id || hoveredBox === id ? 'mousein' : ''}
            >
              {text}
            </Projectmanagementinnerpageoption>
          ))}
        </ComponentoptionWapper>
        {this.whichpage(memberpage)}
      </ComponentWapper>
    )
  }

  componentDidMount() {
    this.props.getposition();
  }
}

const mapStateToProps = (state) => ({
  memberpage: state.projectmanagement.memberpage,
  positionlist: state.projectmanagement.positionlist
})

const mapDisptchToProps = (dispatch) => {
  return {
    setmemberpage(id) {
      dispatch(actionCreators.setmemberpage(id));
    },
    memberpost(eid, position) {
      dispatch(actionCreators.memberpost(eid.value, position.label));
    },
    memberrevise(eid, position) {
      dispatch(actionCreators.memberrevise(eid.value, position.value));
    },
    memberremove(eid) {
      dispatch(actionCreators.memberremove(eid.value));
    },
    memberretrieve(eid, name, position) {
      dispatch(actionCreators.memberretrieve(eid.value, name.value, position.value));
    },
    getposition() {
      dispatch(actionCreators.getposition());
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Member);