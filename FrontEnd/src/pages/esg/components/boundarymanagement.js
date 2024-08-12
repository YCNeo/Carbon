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
  ESGinnerpageoption
} from '../style';

class BoundaryEdition extends PureComponent {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Post' },
      { id: 2, text: 'Retrieve' },
      { id: 3, text: 'Revise' }
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
                <Componentindex>Address</Componentindex>
                <Componentinput ref={(input) => { this.address = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Type</Componentindex>
                <Componentinput ref={(input) => { this.type = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.boundary_editionpost(this.name, this.address, this.type)}>Post</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 2:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>BID</Componentindex>
                <Componentinput ref={(input) => { this.bid = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Name</Componentindex>
                <Componentinput ref={(input) => { this.name = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Type</Componentindex>
                <Componentinput ref={(input) => { this.type = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.boundary_editionretrieve(this.bid, this.name, this.type)}>Retrieve</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 3:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>BID</Componentindex>
                <Componentinput ref={(input) => { this.bid = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
              <Componentindex>Address</Componentindex>
                <Componentinput ref={(input) => { this.address = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.boundary_editionrevise(this.bid, this.address)}>Revise</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      default:
        return;
    }
  }

  render() {
    const { setboundary_editionpage, boundary_editionpage } = this.props;
    const { hoveredBox, pages } = this.state;
    return (
      <ComponentWapper>
        <Componenttitle>Boundary Edition</Componenttitle>
        <ComponentoptionWapper>
          {pages.map(({ id, text }) => (
            <ESGinnerpageoption
              key={id}
              onClick={() => setboundary_editionpage(id)}
              onMouseEnter={() => this.handleMouseEnter(id)}
              onMouseLeave={this.handleMouseLeave}
              className={boundary_editionpage === id || hoveredBox === id ? 'mousein' : ''}
            >
              {text}
            </ESGinnerpageoption>
          ))}
        </ComponentoptionWapper>
        {this.whichpage(boundary_editionpage)}
      </ComponentWapper>
    )
  }
}

const mapStateToProps = (state) => ({
  boundary_editionpage: state.esg.boundary_editionpage
});

const mapDisptchToProps = (dispatch) => {
  return {
    setboundary_editionpage(id) {
      dispatch(actionCreators.setboundary_editionpage(id));
    },
    boundary_editionpost(name, address, type) {
      dispatch(actionCreators.boundary_editionpost(name.value, address.value, type.value));
    },
    boundary_editionretrieve(bid, name, type) {
      dispatch(actionCreators.boundary_editionretrieve(bid.value, name.value, type.value));
    },
    boundary_editionrevise(bid, address) {
      dispatch(actionCreators.boundary_editionrevise(bid.value, address.value));
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(BoundaryEdition);