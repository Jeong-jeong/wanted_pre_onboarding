import { css } from '@emotion/react'
import defaultColor from '@assets/colors'

export const borderBottom = css`
  box-shadow: 0 1px 0 0 rgba(0 0 0 / 10%);
`

export const divider = css`
  flex-shrink: 0;
  -ms-flex-negative: 0;
  height: 1px;
  margin: 0;
  border: none;
  background-color: ${defaultColor.borderLighter};
`

export const borderSelectedNav = css`
  box-shadow: inset 0 -2px ${defaultColor.blueLighter};
`

export const ellipsisLine1 = css`
  width: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const cardRadius = css`
  border-radius: 3px 3px 0 0;
`
export const clearFloat = css`
  display: block;
  clear: both;
  content: '';
`

export const dragNone = css`
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
`
