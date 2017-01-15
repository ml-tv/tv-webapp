// @flow

import { MenuAction, HIDE_MENU, SHOW_MENU } from './actions'

const headerMenuStatus = (state: boolean = false, actions: MenuAction) => {
  switch (actions.type) {
    case HIDE_MENU:
      return false;
    case SHOW_MENU:
      return true;
    default:
      return state;
  }
}

export type headerReducersType = {
  headerMenuStatus: boolean,
}

export const headerReducers = {
  headerMenuStatus
};