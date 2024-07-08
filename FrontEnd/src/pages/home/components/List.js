import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom'
import {
  Listitem,
  Listinfo,
  Loadmore
} from '../style';

class List extends PureComponent {
  render() {
    const { list, getmorelist, page } = this.props;
    return (
      <div>
        {
          list.map((item, index) => (
            <Link key={index} to={'/detail/' + item.id}>
              <Listitem key={item.id}>
                <img className='pic' src={item.imgurl} alt={item.alt} />
                <Listinfo>
                  <h3 className='title'>{item.title}</h3>
                  <p className='desc'>{item.desc}</p>
                </Listinfo>
              </Listitem>
            </Link>
          ))
        }
        <Loadmore onClick={() => getmorelist(page)}>more content</Loadmore>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.home.articlelist,
  page: state.home.articlepage
})

const mapDispatchToProps = (dispatch) => ({
  getmorelist(page) {
    dispatch(actionCreators.getmorelist(page))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);