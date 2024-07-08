import React, { PureComponent } from 'react';
import Topic from './components/Topic'
import Writer from './components/Writer'
import List from './components/List';
import Recommand from './components/Recommand';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
  HomeWrapper,
  HomeRight,
  HomeLeft,
  Backtop
} from './style';

class Home extends PureComponent {

  handlescrolltop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src="	https://i.ytimg.com/vi/Hl4h-U3OEO0/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDjdJz5X3mdRsg8t5f1iI3FIFuOUQ
" alt='banner img' />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommand />
          <Writer />
        </HomeRight>
        {this.props.showscroll ? <Backtop onClick={this.handlescrolltop}>backtop</Backtop> : null}
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changehomedata();
    this.bindEvent();
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.props.changescrolltopshow)
  }

  bindEvent() {
    window.addEventListener('scroll', this.props.changescrolltopshow)
  }
}

const mapStateToProps = (state) => ({
  showscroll: state.home.showscroll
})

const mapDispatchToProps = (dispatch) => ({
  changehomedata() {
    dispatch(actionCreators.gethomeinfo());
  },
  changescrolltopshow() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggletopshow(true))
    } else {
      dispatch(actionCreators.toggletopshow(false))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);