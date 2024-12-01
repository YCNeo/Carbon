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

class Source extends PureComponent {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Retrieve' },
      { id: 2, text: 'Revise' },
      { id: 3, text: 'Delete' },
      { id: 4, text: 'Post' },
    ],
    postFormdata: {
      ename: '',
      form: '',
      ingredient: '',
      category: ''
    },
    retrieveFormdata: {
      ename: '',
      form: '',
      ingredient: '',
      category: ''
    },
    reviseFormdata: {
      ename: '',
      form: '',
      ingredient: '',
      category: ''
    },
    deleteFormdata: {
      sid: ''
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

  revsiedata = (employee) => {
    this.setState({
      reviseFormdata: {
        form: employee.form,
        ename: employee.ename,
        ingredient: employee.ingredient,
        category: employee.category
      }
    });
  }

  deletedata = (employee) => {
    this.setState({
      deleteFormdata: { sid: employee.sid }
    });
  }

  whichpage(page, retrieve_source) {
    const { postFormdata, reviseFormdata, deleteFormdata, retrieveFormdata } = this.state;
    switch (page) {
      case 4:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>EName</Componentindex>
                <Componentinput value={postFormdata.ename} onChange={(e) => this.handleInputChange(e, 'postFormdata', 'ename')} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Form</Componentindex>
                <Componentinput value={postFormdata.form} onChange={(e) => this.handleInputChange(e, 'postFormdata', 'form')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Ingredient</Componentindex>
                <Componentinput value={postFormdata.ingredient} onChange={(e) => this.handleInputChange(e, 'postFormdata', 'ingredient')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Category</Componentindex>
                <Componentinput value={postFormdata.category} onChange={(e) => this.handleInputChange(e, 'postFormdata', 'category')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.sourcepost(postFormdata)}>Post</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 2:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>EName</Componentindex>
                <Componentinput value={reviseFormdata.ename} onChange={(e) => this.handleInputChange(e, 'reviseFormdata', 'ename')} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Form</Componentindex>
                <Componentinput value={reviseFormdata.form} onChange={(e) => this.handleInputChange(e, 'reviseFormdata', 'form')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Ingredient</Componentindex>
                <Componentinput value={reviseFormdata.ingredient} onChange={(e) => this.handleInputChange(e, 'reviseFormdata', 'ingredient')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Category</Componentindex>
                <Componentinput value={reviseFormdata.category} onChange={(e) => this.handleInputChange(e, 'reviseFormdata', 'category')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.sourcerevise(reviseFormdata)}>Revise</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 3:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>SID</Componentindex>
                <Componentinput value={deleteFormdata.sid} onChange={(e) => this.handleInputChange(e, 'deleteFormdata', 'sid')} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentbutton className='reject' onClick={() => this.props.sourcedelete(deleteFormdata)}>Delete</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
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
                <Componentindex>Ingredient</Componentindex>
                <Componentinput value={retrieveFormdata.ingredient} onChange={(e) => this.handleInputChange(e, 'retrieveFormdata', 'ingredient')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Category</Componentindex>
                <Componentinput value={retrieveFormdata.category} onChange={(e) => this.handleInputChange(e, 'retrieveFormdata', 'category')} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => { this.props.sourceretrieve(retrieveFormdata); this.setState({ display: true }); }}>Retrieve</Componentbutton>
              </ComponentoptionWapper>
              {this.state.display ?
                <div>{table(retrieve_source, this.props.setsourcepage, this.revsiedata, this.deletedata)}</div>
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
    const { setsourcepage, sourcepage, retrieve_source } = this.props;
    const { hoveredBox, pages } = this.state;
    return (
      <ComponentWapper>
        <Componenttitle>Source</Componenttitle>
        <ComponentoptionWapper>
          {pages.map(({ id, text }) => (
            (localStorage.getItem('authority') === 'admin' || text === 'Retrieve') && (
              <Innerpageoption
                key={id}
                onClick={() => setsourcepage(id)}
                onMouseEnter={() => this.handleMouseEnter(id)}
                onMouseLeave={this.handleMouseLeave}
                className={sourcepage === id || hoveredBox === id ? 'mousein' : ''}
              >
                {text}
              </Innerpageoption>
            )
          ))}
        </ComponentoptionWapper>
        {this.whichpage(sourcepage, retrieve_source)}
      </ComponentWapper>
    )
  }
}

const mapStateToProps = (state) => ({
  sourcepage: state.esg.sourcepage,
  retrieve_source: state.esg.retrieve_source
});

const mapDisptchToProps = (dispatch) => {
  return {
    setsourcepage(id) {
      dispatch(actionCreators.setsourcepage(id));
    },
    sourcepost(postFormdata) {
      const { ename, form, ingredient, category } = postFormdata
      dispatch(actionCreators.sourcepost(ename, form, ingredient, category));
    },
    sourceretrieve(retrieveFormdata) {
      const { ename, form, ingredient, category } = retrieveFormdata
      dispatch(actionCreators.sourceretrieve(ename, form, ingredient, category));
    },
    sourcedelete(deleteFormdata) {
      const { sid } = deleteFormdata
      dispatch(actionCreators.sourcedelete(sid))
    },
    sourcerevise(reviseFormdata) {
      const { ename, form, ingredient, category } = reviseFormdata
      dispatch(actionCreators.sourcerevise(ename, form, ingredient, category));
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Source);