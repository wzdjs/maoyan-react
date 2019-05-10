import React from 'react';
import './style.js'
import {
Head,Title
} from './style'

class Header extends React.Component {
  render() {
    const { title, fixed } = this.props
    return (
      <Head className={ fixed ? 'isfixed' : '' }>
        <Title>{ title }</Title>
      </Head>
    )
  }
}

Header.defaultProps = {
  title: '猫眼电影',
  fixed: true
}
export default Header;
