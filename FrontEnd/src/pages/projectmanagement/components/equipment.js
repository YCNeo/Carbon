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
  Projectmanagementinnerpageoption
} from '../style';

class Equipment extends PureComponent {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Post' },
      { id: 2, text: 'Revise' },
      { id: 3, text: 'Retieve' },
    ],
    display: false
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
              <ComponentoptionWapper >
                <Componentindex>EQID</Componentindex>
                <Componentinput ref={(input) => { this.eqid = input }} />
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
                <Componentbutton onClick={() => this.props.equipmentpost(this.name, this.eqid, this.amount, this.unit)}>Post</Componentbutton>
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
              <ComponentoptionWapper >
                <Componentindex>EQID</Componentindex>
                <Componentinput ref={(input) => { this.eqid = input }} />
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
                <Componentbutton onClick={() => this.props.equipmentrevise(this.name, this.eqid, this.amount, this.unit)}>Revise</Componentbutton>
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
              <ComponentoptionWapper >
                <Componentindex>EQID</Componentindex>
                <Componentinput ref={(input) => { this.eqid = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentbutton onClick={() => { this.props.equipmentretrieve(this.name, this.eqid); this.setState({ display: true }); }}>Retrieve</Componentbutton>
              </ComponentoptionWapper>
              {this.state.display ?
                <div>
                  <ComponentoptionWapper>
                    <Componentcheckbox>list</Componentcheckbox>
                  </ComponentoptionWapper>
                  <ComponentoptionWapper>
                    <Componentbutton onClick={() => { this.props.setequipmentpage(2) }}>revise</Componentbutton>
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
    equipmentpost(name, eqid, amount, unit) {
      dispatch(actionCreators.equipmentpost(name.value, eqid.value, amount.value, unit.value));
    },
    equipmentrevise(name, eqid, amount, unit) {
      dispatch(actionCreators.equipmentrevise(name.value, eqid.value, amount.value, unit.value));
    },
    equipmentretrieve(name, eqid) {
      dispatch(actionCreators.equipmentretrieve(name.value, eqid.value));
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Equipment);