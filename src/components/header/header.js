// @flow

import React, { Component } from 'react';

import { Link } from 'react-router'

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import TheatersIcon from 'material-ui/svg-icons/action/theaters';
import TvIcon from 'material-ui/svg-icons/hardware/tv';

import './header.css';

type Props = {
  title: string,
  isMenuOpen?: boolean,
  onMenuOpen: () => void,
  onMenuClose: () => void,
}

export class Header extends Component {
  props: Props;
  isClosing: boolean = false

  static defaultProps: {
    isMenuOpen: boolean,
  }

  onOpenMenu = (e: Event) => {
    e.preventDefault();

    // It's used to avoid a potential race. See comment in onCloseMenu for
    // more detail
    setTimeout(() => {
      this.props.onMenuOpen();
    }, 0)
  }

  onCloseMenu = (e: Event) => {
    e.preventDefault();
    // The activeClassName prop of Link will cause a race and skip the close
    // animation if we don't wait a bit
    setTimeout(() => {
      this.props.onMenuClose();
    }, 0)
  }

  onRequestChange = (open: boolean, reason: string) => {
    if (open) {
      this.props.onMenuOpen();
    } else {
      this.props.onMenuClose();
    }
  }

  render() {
    return (
      <div>
        <AppBar
          title={this.props.title}
          onLeftIconButtonTouchTap={this.onOpenMenu}
          />

        <Drawer
          docked={false}
          open={this.props.isMenuOpen}
          onRequestChange={this.onRequestChange}
          >
          <AppBar title="Menu"
            onLeftIconButtonTouchTap={this.onCloseMenu}
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            />

          <Menu>
            <MenuItem
              leftIcon={<TvIcon />}
              primaryText="Shows"
              containerElement={<Link to="/shows" activeClassName="header-menu-activeLink" />}
              onTouchTap={this.onCloseMenu}
              />

            <MenuItem
              leftIcon={<TheatersIcon />}
              primaryText="Movies"
              containerElement={<Link to="/movies" activeClassName="header-menu-activeLink" />}
              onTouchTap={this.onCloseMenu}
              />
          </Menu>
        </Drawer>
      </div>
    );
  }
}

Header.defaultProps = {
  isMenuOpen: false,
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
}
