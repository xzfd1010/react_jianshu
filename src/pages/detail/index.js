import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { Content, DetailWrapper, Header } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Detail extends PureComponent {
  componentDidMount () {
    this.props.getDetailInfo(this.props.match.params.id)
  }

  render () {
    const { title, content } = this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: content }}/>
      </DetailWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatchToProps = (dispatch) => ({
  getDetailInfo (id) {
    dispatch(actionCreators.getDetailInfo(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))
