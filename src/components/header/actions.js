// @flow

export interface MenuAction {
  type: string;
};

export const SHOW_MENU = 'HEADER_SHOW_MENU';
export function showMenu(): MenuAction {
  return {
    type: SHOW_MENU,
  }
}

export const HIDE_MENU = 'HEADER_HIDE_MENU';
export function hideMenu(): MenuAction {
  return {
    type: HIDE_MENU,
  }
}