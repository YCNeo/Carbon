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

class Source extends PureComponent {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Post' },
      { id: 2, text: 'Revise' },
      { id: 3, text: 'Delete' },
      { id: 4, text: 'Retrieve' },
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
                <Componentindex>EName</Componentindex>
                <Componentinput ref={(input) => { this.ename = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Form</Componentindex>
                <Componentinput ref={(input) => { this.form = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Ingredient</Componentindex>
                <Componentinput ref={(input) => { this.ingredient = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Category</Componentindex>
                <Componentinput ref={(input) => { this.category = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.sourcepost(this.ename, this.form, this.ingredient, this, this.category)}>Post</Componentbutton>
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
                <Componentinput ref={(input) => { this.ename = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Form</Componentindex>
                <Componentinput ref={(input) => { this.form = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Ingredient</Componentindex>
                <Componentinput ref={(input) => { this.ingredient = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Category</Componentindex>
                <Componentinput ref={(input) => { this.category = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.sourcerevise(this.ename, this.form, this.ingredient, this, this.category)}>Revise</Componentbutton>
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
                <Componentinput ref={(input) => { this.sid = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentbutton className='reject' onClick={() => this.props.sourcedelete(this.sid)}>Delete</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      case 4:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>EName</Componentindex>
                <Componentinput ref={(input) => { this.ename = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Form</Componentindex>
                <Componentinput ref={(input) => { this.form = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Ingredient</Componentindex>
                <Componentinput ref={(input) => { this.ingredient = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Category</Componentindex>
                <Componentinput ref={(input) => { this.category = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => this.props.sourceretrieve(this.ename, this.form, this.ingredient, this, this.category)}>Retrieve</Componentbutton>
              </ComponentoptionWapper>
            </ComponentWapper>
          );
        }
      default:
        return;
    }
  }

  render() {
    const { setsourcepage, sourcepage } = this.props;
    const { hoveredBox, pages } = this.state;
    return (
      <ComponentWapper>
        <Componenttitle>Source</Componenttitle>
        <ComponentoptionWapper>
          {pages.map(({ id, text }) => (
            <ESGinnerpageoption
              key={id}
              onClick={() => setsourcepage(id)}
              onMouseEnter={() => this.handleMouseEnter(id)}
              onMouseLeave={this.handleMouseLeave}
              className={sourcepage === id || hoveredBox === id ? 'mousein' : ''}
            >
              {text}
            </ESGinnerpageoption>
          ))}
        </ComponentoptionWapper>
        {this.whichpage(sourcepage)}
      </ComponentWapper>
    )
  }
}

const mapStateToProps = (state) => ({
  sourcepage: state.esg.sourcepage
});

const mapDisptchToProps = (dispatch) => {
  return {
    setsourcepage(id) {
      dispatch(actionCreators.setsourcepage(id));
    },
    sourcepost(ename, form, ingredient, category) {
      dispatch(actionCreators.sourcepost(ename.value, form.value, ingredient.value, category.value));
    },
    sourceretrieve(ename, form, ingredient, category) {
      dispatch(actionCreators.sourceretrieve(ename.value, form.value, ingredient.value, category.value));
    },
    sourcedelete(sid) {
      dispatch(actionCreators.sourcedelete(sid.value))
    },
    sourcerevise(ename, form, ingredient, category) {
      dispatch(actionCreators.sourcerevise(ename.value, form.value, ingredient.value, category.value));
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Source);