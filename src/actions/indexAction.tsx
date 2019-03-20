/*
 * action 类型
 */

export const CHANGE_TITLE = 'CHANGE_TITLE'

/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action 创建函数
 */

export function changeTitle(text:any) {
  return { type: CHANGE_TITLE, text }
}

