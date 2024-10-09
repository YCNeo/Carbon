import React, { Component } from 'react';
import { connect } from "react-redux";
import { actionCreators } from './store';
import { Navigate } from "react-router-dom";
import Select from 'react-select';

import Member from './components/member';
import Flow from './components/flow';
import Material from './components/material';
import Equipment from './components/equipment';
import Dailyrecord from './components/dailyrecord';

import {
  ComponentWapper,
  ComponentoptionWapper,
  Componenttitle,
  PageWrapper,
  PageIndexlist,
  PagePage,
  Pagepageoption
} from "../../components/style";
import { getproject } from '../statement/store/actionCreators';

class Projectmanagement extends Component {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Member' },
      { id: 2, text: 'Flow' },
      { id: 3, text: 'Material' },
      { id: 4, text: 'Equipment' },
      { id: 5, text: 'Daily Record' },
      { id: 6, text: 'back' }
    ],
    choosepage: true,
    projectid: '',
    userposition: []
  };

  handleMouseEnter = (index) => {
    this.setState({ hoveredBox: index });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredBox: null });
  };

  back = () => {
    this.setState({ choosepage: true })
  }
  handleSelectChange = (selectedOptions) => {
    this.setState({ projectid: selectedOptions, choosepage: false });
    localStorage.setItem('project', selectedOptions.label);//看要回傳id(value)還是name(label)
  };

  whichpage(Projectmanagementpage) {
    switch (Projectmanagementpage) {
      case 2:
        return <Flow />;
      case 3:
        return <Material />;
      case 4:
        return <Equipment />;
      case 5:
        return <Dailyrecord />;
      default:
        return <Member />;
    }
  }

  render() {
    const { setprojectmanagementpage, projectmanagementpage, projectlist } = this.props;
    const { hoveredBox, pages, userposition, projectid } = this.state;

    const isinposition = (name) => {
      return userposition.includes(name);
    };

    const options = projectlist.map(item => ({
      value: item.id,
      label: item.name,
    }));

    const customStyles = {
      container: (provided) => ({
        ...provided,
        width: '350px',
      }),
      option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#0080FF' : (isinposition(state.data.label) ? '#d3d3d3' : 'white'),
        color: state.isSelected ? 'white' : 'black',
        '&:hover': { backgroundColor: '#D2E9FF', }
      })
    };

    if (localStorage.getItem('jwtToken') != null) {
      return (
        <PageWrapper>
          {this.state.choosepage ?
            <PagePage>
              <ComponentWapper>
                <Componenttitle>choose project</Componenttitle>
                <ComponentoptionWapper>
                  <Select
                    options={options}
                    styles={customStyles}
                    placeholder="Search or Select project"
                    value={projectid}
                    onChange={this.handleSelectChange}
                  />
                </ComponentoptionWapper>
              </ComponentWapper>
            </PagePage>
            :
            (
              <PageWrapper>
                <PageIndexlist>
                  {pages.map(({ id, text }) => (
                    <Pagepageoption
                      key={id}
                      onClick={() => (id === 6) ? this.back() : setprojectmanagementpage(id)}
                      onMouseEnter={() => this.handleMouseEnter(id)}
                      onMouseLeave={this.handleMouseLeave}
                      className={projectmanagementpage === id || hoveredBox === id ? 'mousein' : ''}
                    >
                      {text}
                    </Pagepageoption>
                  ))}
                </PageIndexlist>
                <PagePage>
                  {this.whichpage(projectmanagementpage)}
                </PagePage>
              </PageWrapper>
            )
          }
        </PageWrapper>
      )
    } else {
      return <Navigate to='/login' />
    }
  }

  componentDidMount() {
    this.props.getproject();
    const userpositionStr = localStorage.getItem('PM_rank');

    if (userpositionStr) {
      this.setState({
        userposition: userpositionStr.split(',')
      });
    }
  }
}

const mapStateToProps = (state) => ({
  loginstate: state.login.login,
  projectmanagementpage: state.projectmanagement.projectmanagementpage,
  projectlist: state.statement.projectlist
});

const mapDispatchToProps = (dispatch) => ({
  setprojectmanagementpage(page) {
    dispatch(actionCreators.setprojectmanagementpage(page));
  },
  getproject() {
    dispatch(getproject())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Projectmanagement);