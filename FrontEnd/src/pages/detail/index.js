import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { actionCreators } from './store';
import { withRouter } from './withRouter'; // 引入 withRouter 高阶组件
import {
  DetailWrapper,
  Header,
  Content
} from './style';

class Detail extends PureComponent {
  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </DetailWrapper>
    )
  }
  componentDidMount() {
    const { id } = this.props.router.params; // 从 router.params 获取 id
    this.props.getDetail(id);
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.detail.title,
    content: state.detail.content
  }
}

const mapDisptchToProps = (dispatch) => {
  return {
    getDetail(id){
      dispatch(actionCreators.getDetail(id));
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(withRouter(Detail));