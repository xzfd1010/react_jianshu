import React, { Component } from 'react'
import { ListInfo, ListItem, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store/'

class List extends Component {
  render () {
    const { list,getMoreList,page } = this.props
    return (
      <div>
        {
          list.map((item,index) => (
            //item.get('id')
            <ListItem key={index}>
              <img className='pic' src={item.get('imgUrl')} alt="图片"/>
              <ListInfo>
                <h3 className='title'>{item.get('title')}</h3>
                <p className="desc">{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          ))
        }
        <LoadMore onClick={()=>getMoreList(page)}>更多文章</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home','articlePage'])
})
const mapDispatch = (dispatch) => ({
  getMoreList (page) {
    dispatch(actionCreators.getMoreList(page))
  }
})
export default connect(mapStateToProps, mapDispatch)(List)
