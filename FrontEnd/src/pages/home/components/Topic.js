import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  TopicWrapper,
  TopicItem
} from '../style';

class Topic extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {
          list.map((item) => (
            <TopicItem key={item.id}>
              <img
                className='topic-pic'
                src={item.imgurl}
                alt='idk_img' />
              {item.title}
            </TopicItem>
          ))
        }
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.home.topiclist
  }
}

export default connect(mapStateToProps, null)(Topic);