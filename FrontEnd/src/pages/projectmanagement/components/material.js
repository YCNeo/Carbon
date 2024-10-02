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
  Innerpageoption
} from '../../../components/style';

class Material extends PureComponent {
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
                <Componentindex>MID</Componentindex>
                <Componentinput ref={(input) => { this.mid = input }} />
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
                <Componentbutton onClick={() => this.props.materialpost(this.name, this.mid, this.amount, this.unit)}>Post</Componentbutton>
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
                <Componentindex>MID</Componentindex>
                <Componentinput ref={(input) => { this.mid = input }} />
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
                <Componentbutton onClick={() => this.props.materialrevise(this.name, this.mid, this.amount, this.unit)}>Revise</Componentbutton>
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
                <Componentindex>MID</Componentindex>
                <Componentinput ref={(input) => { this.mid = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentbutton onClick={() => { this.props.materialretrieve(this.name, this.mid); this.setState({ display: true }); }}>Retrieve</Componentbutton>
              </ComponentoptionWapper>
              {this.state.display ?
                <div>
                  <ComponentoptionWapper>
                    <Componentcheckbox>list</Componentcheckbox>
                  </ComponentoptionWapper>
                  <ComponentoptionWapper>
                    <Componentbutton onClick={() => { this.props.setmaterialpage(2) }}>revise</Componentbutton>
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
    const { setmaterialpage, materialpage } = this.props;
    const { hoveredBox, pages } = this.state;
    return (
      <ComponentWapper>
        <Componenttitle>Material</Componenttitle>
        <ComponentoptionWapper>
          {pages.map(({ id, text }) => (
            <Innerpageoption
              key={id}
              onClick={() => setmaterialpage(id)}
              onMouseEnter={() => this.handleMouseEnter(id)}
              onMouseLeave={this.handleMouseLeave}
              className={materialpage === id || hoveredBox === id ? 'mousein' : ''}
            >
              {text}
            </Innerpageoption>
          ))}
        </ComponentoptionWapper>
        {this.whichpage(materialpage)}
      </ComponentWapper>
    )
  }
}

const mapStateToProps = (state) => ({
  materialpage: state.projectmanagement.materialpage
})

const mapDisptchToProps = (dispatch) => {
  return {
    setmaterialpage(id) {
      dispatch(actionCreators.setmaterialpage(id));
    },
    materialpost(name, mid, amount, unit) {
      dispatch(actionCreators.materialpost(name.value, mid.value, amount.value, unit.value));
    },
    materialrevise(name, mid, amount, unit) {
      dispatch(actionCreators.materialrevise(name.value, mid.value, amount.value, unit.value));
    },
    materialretrieve(name, mid) {
      dispatch(actionCreators.materialretrieve(name.value, mid.value));
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Material);