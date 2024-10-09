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

class BoundaryEdition extends PureComponent {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Post' },
      { id: 2, text: 'Retrieve' },
      { id: 3, text: 'Revise' },
      { id: 4, text: 'Delete' }
    ],
    postFormdata: {
      name: '',
      address: '',
      type: ''
    },
    retrieveFormdata: {
      bid: '',
      name: '',
      type: '',
    },
    reviseFormdata: {
      bid: '',
      address: ''
    },
    deleteFormdata: {
      bid: ''
    },
    display: false
  };

  handleMouseEnter = (id) => {
    this.setState({ hoveredBox: id });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredBox: null });
  };

  handleInputChange = (event, formType, field) => {
    const { value } = event.target;
    this.setState(prevState => ({
      [formType]: {
        ...prevState[formType],
        [field]: value
      }
    }));
  };

  whichpage(page) {
    const { postFormdata, reviseFormdata, deleteFormdata, retrieveFormdata } = this.state;
    switch (page) {
      case 1:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>Name</Componentindex>
                <Componentinput value={postFormdata.name} onChange={(e) => this.handleInputChange(e, 'postFormdata', 'name')} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Address</Componentindex>
                <Componentinput value={postFormdata.address} onChange={(e) => this.handleInputChange(e, 'postFormdata', 'address')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Type</Componentindex>
                <Componentinput value={postFormdata.type} onChange={(e) => this.handleInputChange(e, 'postFormdata', 'type')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.boundary_editionpost(postFormdata)}>Post</Componentbutton>
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
                <Componentinput value={retrieveFormdata.bid} onChange={(e) => this.handleInputChange(e, 'retrieveFormdata', 'bid')} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Name</Componentindex>
                <Componentinput value={retrieveFormdata.name} onChange={(e) => this.handleInputChange(e, 'retrieveFormdata', 'name')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Type</Componentindex>
                <Componentinput value={retrieveFormdata.type} onChange={(e) => this.handleInputChange(e, 'retrieveFormdata', 'type')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => { this.props.boundary_editionretrieve(retrieveFormdata); this.setState({ display: true }); }}>Retrieve</Componentbutton>
              </ComponentoptionWapper>
              {this.state.display ?
                <div>
                  <ComponentoptionWapper>
                    <Componentcheckbox>list</Componentcheckbox>
                  </ComponentoptionWapper>
                  <ComponentoptionWapper>
                    <Componentbutton onClick={() => { this.props.setboundary_editionpage(3) }}>revise</Componentbutton>
                    <Componentbutton onClick={() => { this.props.setboundary_editionpage(4) }} className='reject'>Delete</Componentbutton>
                  </ComponentoptionWapper>
                </div>
                :
                ''}
            </ComponentWapper>
          );
        }
      case 3:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>BID</Componentindex>
                <Componentinput value={reviseFormdata.bid} onChange={(e) => this.handleInputChange(e, 'reviseFormdata', 'bid')} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Address</Componentindex>
                <Componentinput value={reviseFormdata.address} onChange={(e) => this.handleInputChange(e, 'reviseFormdata', 'address')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.boundary_editionrevise(reviseFormdata)}>Revise</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 4:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>BID</Componentindex>
                <Componentinput value={deleteFormdata.bid} onChange={(e) => this.handleInputChange(e, 'deleteFormdata', 'bid')} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.boundary_editiondelete(deleteFormdata)}>Delete</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          )
        }
      default:
        return null;
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
            (localStorage.getItem('authority') === 'admin' || text === 'Retrieve') && (
              <Innerpageoption
                key={id}
                onClick={() => setboundary_editionpage(id)}
                onMouseEnter={() => this.handleMouseEnter(id)}
                onMouseLeave={this.handleMouseLeave}
                className={boundary_editionpage === id || hoveredBox === id ? 'mousein' : ''}
              >
                {text}
              </Innerpageoption>
            )
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
    boundary_editionpost(postFormdata) {
      const { name, address, type } = postFormdata
      dispatch(actionCreators.boundary_editionpost(name, address, type));
    },
    boundary_editionretrieve(retrieveFormdata) {
      const { bid, name, type } = retrieveFormdata
      dispatch(actionCreators.boundary_editionretrieve(bid, name, type));
    },
    boundary_editionrevise(reviseFormdata) {
      const { bid, address } = reviseFormdata
      dispatch(actionCreators.boundary_editionrevise(bid, address));
    },
    boundary_editiondelete(deleteFormdata) {
      const { bid } = deleteFormdata
      dispatch(actionCreators.boundary_editiondelete(bid));
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(BoundaryEdition);