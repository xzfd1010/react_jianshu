import React, { Component } from 'react'
import { RecommendItem, RecommendWrapper } from '../style'
import { connect } from 'react-redux'

class Recommend extends Component {
  render () {
    const { list } = this.props
    console.log(list)
    return (
      <RecommendWrapper>
        {
          list.map(item => (
            <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
          ))
        }
      </RecommendWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})
export default connect(mapStateToProps, null)(Recommend)
