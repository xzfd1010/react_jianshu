import React, { Component } from 'react'
import { ListInfo, ListItem } from '../style'
import { connect } from 'react-redux'

class List extends Component {
  render () {
    const { list } = this.props
    return (
      list.map(item => (
        <ListItem key={item.get('id')}>
          <img className='pic' src={item.get('imgUrl')} alt="图片"/>
          <ListInfo>
            <h3 className='title'>{item.get('title')}</h3>
            <p className="desc">{item.get('desc')}</p>
          </ListInfo>
        </ListItem>
      ))
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'articleList'])
})
export default connect(mapStateToProps, null)(List)
