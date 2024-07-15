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
  Componentcheckbox,
  Sendresult,
  Checkbutton,
  CheckItem
} from '../style';

class Accessassignment extends PureComponent {
  state = {
    accessChecked: []
  };

  handleCheckButtonClick = (index) => {
    this.setState((prevState) => {
      const newAccessChecked = [...prevState.accessChecked];
      newAccessChecked[index] = !newAccessChecked[index];
      return { accessChecked: newAccessChecked };
    });
  };

  render() {
    const { AAsend, AAsendvalue, accesslist } = this.props;
    const { accessChecked } = this.state;

    return (
      <ComponentWapper>
        <Componenttitle>Access Assignment</Componenttitle>
        <ComponentoptionWapper>
          <Componentindex>User ID</Componentindex>
          <Componentinput ref={(input) => { this.user_id = input }} />
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentindex>Access</Componentindex>
          <Componentcheckbox>
            {
              accesslist.map((item, index) => (
                <CheckItem key={item.id} className='name'>
                  <Checkbutton
                    onClick={() => this.handleCheckButtonClick(index)}
                    className={accessChecked[index] ? 'checked' : ''}
                  ></Checkbutton>
                  {item.name}
                </CheckItem>
              ))
            }
          </Componentcheckbox>        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentbutton onClick={() => this.props.AAsendinfo(this.user_id, accessChecked)}>Assign</Componentbutton>
          {AAsend ? (AAsendvalue ? <Sendresult>success</Sendresult> : <Sendresult className='fail'>fail</Sendresult>) : null}
        </ComponentoptionWapper>
      </ComponentWapper>
    )
  }
  
  componentDidMount() {
    this.props.getaccess();
    if (this.props.accesslist) {
      this.setState({ accessChecked: new Array(this.props.accesslist.length).fill(false) });
    }
  }
}

const mapStateToProps = (state) => ({
  AAsend: state.admin.AAsend,
  AAsendvalue: state.admin.AAsendvalue,
  accesslist: state.admin.accesslist
})

const mapDisptchToProps = (dispatch) => {
  return {
    AAsendinfo(user_id, accessChecked) {
      dispatch(actionCreators.AAsendinfo(user_id.value, accessChecked));
    },
    getaccess() {
      dispatch(actionCreators.getaccess())
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Accessassignment);