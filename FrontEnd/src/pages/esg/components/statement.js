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
  Innerpageoption
} from '../../../components/style';
import { table } from '../../../components/function/table';

class Statement extends PureComponent {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Retrieve' },
    ],
    retrieveFormdata: {
      ename: '',
      form: '',
      category: '',
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

  whichpage(page, retrieve_statement) {
    const { retrieveFormdata } = this.state;
    switch (page) {
      case 1:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>EName</Componentindex>
                <Componentinput value={retrieveFormdata.ename} onChange={(e) => this.handleInputChange(e, 'retrieveFormdata', 'ename')} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Form</Componentindex>
                <Componentinput value={retrieveFormdata.form} onChange={(e) => this.handleInputChange(e, 'retrieveFormdata', 'form')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Category</Componentindex>
                <Componentinput value={retrieveFormdata.category} onChange={(e) => this.handleInputChange(e, 'retrieveFormdata', 'category')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => { this.props.statementretrieve(retrieveFormdata); this.setState({ display: true }); }}>Retrieve</Componentbutton>
              </ComponentoptionWapper>
              {this.state.display ?
                <div>{table(retrieve_statement, null, null, null)}</div>
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
    const { setstatementpage, statementpage, retrieve_statement } = this.props;
    const { hoveredBox, pages } = this.state;
    return (
      <ComponentWapper>
        <Componenttitle>Statement</Componenttitle>
        <ComponentoptionWapper>
          {pages.map(({ id, text }) => (
            <Innerpageoption
              key={id}
              onClick={() => setstatementpage(id)}
              onMouseEnter={() => this.handleMouseEnter(id)}
              onMouseLeave={this.handleMouseLeave}
              className={statementpage === id || hoveredBox === id ? 'mousein' : ''}
            >
              {text}
            </Innerpageoption>
          ))}
        </ComponentoptionWapper>
        {this.whichpage(statementpage, retrieve_statement)}
      </ComponentWapper>
    )
  }
}

const mapStateToProps = (state) => ({
  statementpage: state.esg.statementpage,
  retrieve_statement: state.esg.retrieve_statement
});

const mapDisptchToProps = (dispatch) => {
  return {
    setstatementpage(id) {
      dispatch(actionCreators.setstatementpage(id));
    },
    statementretrieve(retrieveFormdata) {
      const { ename, form, category } = retrieveFormdata
      dispatch(actionCreators.statementretrieve(ename, form, category));
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Statement);