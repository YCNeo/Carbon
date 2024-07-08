import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  RecommendWrapper,
  Recommenditem
} from '../style';

class Recommend extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <RecommendWrapper>
        {
          list.map((item) => {
            return <Recommenditem imgurl={item.imgurl} key={item.id} />
          })
        }
      </RecommendWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.home.recommendlist
  }
}

export default connect(mapStateToProps, null)(Recommend);
