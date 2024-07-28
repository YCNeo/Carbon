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
  Projectmanagementinnerpageoption
} from '../style';

class Equipment extends PureComponent {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Post' },
      { id: 2, text: 'Revise' },
      { id: 3, text: 'Retieve' },
    ]
  };

  handleMouseEnter = (id) => {
    this.setState({ hoveredBox: id });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredBox: null });
  };

  whichpage(page) {
    switch (page) {
      case 1:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>Name</Componentindex>
                <Componentinput ref={(input) => { this.name = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Amount</Componentindex>
                <Componentinput ref={(input) => { this.amount = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Unit</Componentindex>
                <Componentinput ref={(input) => { this.unit = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.equipmentpost(this.name, this.amount, this.unit)}>Post</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 2:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>Name</Componentindex>
                <Componentinput ref={(input) => { this.name = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Amount</Componentindex>
                <Componentinput ref={(input) => { this.amount = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Unit</Componentindex>
                <Componentinput ref={(input) => { this.unit = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.equipmentrevise(this.name, this.amount, this.unit)}>Revise</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 3:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>Name</Componentindex>
                <Componentinput ref={(input) => { this.name = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.equipmentretrieve(this.name)}>Retrieve</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      default:
        return;
    }
  }

  render() {
    const { setequipmentpage, equipmentpage } = this.props;
    const { hoveredBox, pages } = this.state;
    return (
      <ComponentWapper>
        <Componenttitle>Equipment</Componenttitle>
        <ComponentoptionWapper>
          {pages.map(({ id, text }) => (
            <Projectmanagementinnerpageoption
              key={id}
              onClick={() => setequipmentpage(id)}
              onMouseEnter={() => this.handleMouseEnter(id)}
              onMouseLeave={this.handleMouseLeave}
              className={equipmentpage === id || hoveredBox === id ? 'mousein' : ''}
            >
              {text}
            </Projectmanagementinnerpageoption>
          ))}
        </ComponentoptionWapper>
        {this.whichpage(equipmentpage)}
      </ComponentWapper>
    )
  }
}

const mapStateToProps = (state) => ({
  equipmentpage: state.projectmanagement.equipmentpage
})

const mapDisptchToProps = (dispatch) => {
  return {
    setequipmentpage(id) {
      dispatch(actionCreators.setequipmentpage(id));
    },
    equipmentpost(name, amount, unit) {
      dispatch(actionCreators.equipmentpost(name.value, amount.value, unit.value));
    },
    equipmentrevise(name, amount, unit) {
      dispatch(actionCreators.equipmentrevise(name.value, amount.value, unit.value));
    },
    equipmentretrieve(name) {
      dispatch(actionCreators.equipmentretrieve(name.value));
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Equipment);