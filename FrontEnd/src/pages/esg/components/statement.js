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

class Statement extends PureComponent {
  state = {
    hoveredBox: null,
    pages: [
      { id: 1, text: 'Retrieve' },
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
                <Componentindex>EName</Componentindex>
                <Componentinput ref={(input) => { this.ename = input }} />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>Form</Componentindex>
                <Componentinput ref={(input) => { this.form = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentindex>Category</Componentindex>
                <Componentinput ref={(input) => { this.category = input }} />
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => {this.props.statementretrieve(this.ename, this.form, this, this.category); this.setState({ display: true });}}>Retrieve</Componentbutton>
              </ComponentoptionWapper>
              {this.state.display ?
                <div>
                  <ComponentoptionWapper>
                    <Componentcheckbox>list</Componentcheckbox>
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
    const { setstatementpage, statementpage } = this.props;
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
        {this.whichpage(statementpage)}
      </ComponentWapper>
    )
  }
}

const mapStateToProps = (state) => ({
  statementpage: state.esg.statementpage
});

const mapDisptchToProps = (dispatch) => {
  return {
    setstatementpage(id) {
      dispatch(actionCreators.setstatementpage(id));
    },
    statementretrieve(ename, form, category) {
      dispatch(actionCreators.statementretrieve(ename.value, form.value, category.value));
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Statement);