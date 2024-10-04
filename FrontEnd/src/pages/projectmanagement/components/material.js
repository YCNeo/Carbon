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
    postFormData: {
      name: '',
      mid: '',
      amount: '',
      unit: ''
    },
    reviseFormData: {
      name: '',
      mid: '',
      amount: '',
      unit: ''
    },
    retrieveFormData: {
      name: '',
      mid: '',
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
                <Componentindex>MID</Componentindex>
                <Componentinput value={postFormData.mid} onChange={(e) => this.handleInputChange(e, 'postFormData', 'mid')} />
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
                <Componentbutton onClick={() => this.props.materialpost(postFormData)}>Post</Componentbutton>
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
                <Componentindex>MID</Componentindex>
                <Componentinput value={reviseFormData.mid} onChange={(e) => this.handleInputChange(e, 'reviseFormData', 'mid')} />
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
                <Componentbutton onClick={() => this.props.materialrevise(reviseFormData)}>Revise</Componentbutton>
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
                <Componentindex>MID</Componentindex>
                <Componentinput value={retrieveFormData.mid} onChange={(e) => this.handleInputChange(e, 'retrieveFormData', 'mid')} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentbutton onClick={() => { this.props.materialretrieve(retrieveFormData); this.setState({ display: true }); }}>Retrieve</Componentbutton>
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
        return null;
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
    materialpost(postFormData) {
      const { name, mid, amount, unit } = postFormData
      dispatch(actionCreators.materialpost(name, mid, amount, unit));
    },
    materialrevise(reviseFormData) {
      const { name, mid, amount, unit } = reviseFormData
      dispatch(actionCreators.materialrevise(name, mid, amount, unit));
    },
    materialretrieve(retrieveFormData) {
      const { name, mid } = retrieveFormData
      dispatch(actionCreators.materialretrieve(name, mid));
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Material);