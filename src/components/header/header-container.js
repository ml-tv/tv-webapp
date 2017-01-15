// @flow

import React from 'react';
import { connect } from 'react-redux'

import { showMenu, hideMenu } from './actions';
import { Header } from './header';

// typings
import type { headerReducersType } from './reducers';
type Props = {
  title: string,
}

const mapStateToProps = (state: headerReducersType, ownProps: Props) => {
  return {
    isMenuOpen: state.headerMenuStatus,
    title: ownProps.title,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuOpen: () => {
      dispatch(showMenu());
    },
    onMenuClose: () => {
      dispatch(hideMenu());
    }
  }
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

HeaderContainer.propTypes = {
  title: React.PropTypes.string.isRequired,
}