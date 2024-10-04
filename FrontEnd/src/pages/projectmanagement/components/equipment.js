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

class Equipment extends PureComponent {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Post' },
      { id: 2, text: 'Revise' },
      { id: 3, text: 'Retieve' },
    ],
    postFormData: {
      name: '',
      eqid: '',
      amount: '',
      unit: ''
    },
    reviseFormData: {
      name: '',
      eqid: '',
      amount: '',
      unit: ''
    },
    retrieveFormData: {
      name: '',
      eqid: '',
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
    const { postFormData, reviseFormData, retrieveFormData } = this.state;
    switch (page) {
      case 1:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>Name</Componentindex>
                <Componentinput value={postFormData.name} onChange={(e) => this.handleInputChange(e, 'postFormData', 'name')} />
              </ComponentoptionWapper >
              <ComponentoptionWapper >
                <Componentindex>EQID</Componentindex>
                <Componentinput value={postFormData.eqid} onChange={(e) => this.handleInputChange(e, 'postFormData', 'eqid')} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Amount</Componentindex>
                <Componentinput value={postFormData.amount} onChange={(e) => this.handleInputChange(e, 'postFormData', 'amount')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Unit</Componentindex>
                <Componentinput value={postFormData.unit} onChange={(e) => this.handleInputChange(e, 'postFormData', 'unit')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.equipmentpost(postFormData)}>Post</Componentbutton>
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
                <Componentinput value={reviseFormData.name} onChange={(e) => this.handleInputChange(e, 'reviseFormData', 'name')} />
              </ComponentoptionWapper >
              <ComponentoptionWapper >
                <Componentindex>EQID</Componentindex>
                <Componentinput value={reviseFormData.eqid} onChange={(e) => this.handleInputChange(e, 'reviseFormData', 'eqid')} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Amount</Componentindex>
                <Componentinput value={reviseFormData.amount} onChange={(e) => this.handleInputChange(e, 'reviseFormData', 'amount')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Unit</Componentindex>
                <Componentinput value={reviseFormData.unit} onChange={(e) => this.handleInputChange(e, 'reviseFormData', 'unit')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.equipmentrevise(reviseFormData)}>Revise</Componentbutton>
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
                <Componentinput value={retrieveFormData.name} onChange={(e) => this.handleInputChange(e, 'retrieveFormData', 'name')} />
              </ComponentoptionWapper >
              <ComponentoptionWapper >
                <Componentindex>EQID</Componentindex>
                <Componentinput value={retrieveFormData.eqid} onChange={(e) => this.handleInputChange(e, 'retrieveFormData', 'eqid')} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentbutton onClick={() => { this.props.equipmentretrieve(retrieveFormData); this.setState({ display: true }); }}>Retrieve</Componentbutton>
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
            <Innerpageoption
              key={id}
              onClick={() => setequipmentpage(id)}
              onMouseEnter={() => this.handleMouseEnter(id)}
              onMouseLeave={this.handleMouseLeave}
              className={equipmentpage === id || hoveredBox === id ? 'mousein' : ''}
            >
              {text}
            </Innerpageoption>
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
    equipmentpost(postFormData) {
      const { name, eqid, amount, unit } = postFormData
      dispatch(actionCreators.equipmentpost(name, eqid, amount, unit));
    },
    equipmentrevise(reviseFormData) {
      const { name, eqid, amount, unit } = reviseFormData
      dispatch(actionCreators.equipmentrevise(name, eqid, amount, unit));
    },
    equipmentretrieve(retrieveFormData) {
      const { name, eqid } = retrieveFormData
      dispatch(actionCreators.equipmentretrieve(name, eqid));
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Equipment);