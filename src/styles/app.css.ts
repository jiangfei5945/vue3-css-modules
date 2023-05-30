import { style, globalStyle } from '@vanilla-extract/css'

export const container = style({
  padding: 10,
  color: 'red',
  // 伪类选择器
  ':hover': {
    color: 'white'
  }
})

// 全局样式
globalStyle('body', {
  background: 'blue'
})

// 样式复用
export const base = style({ padding: 12 })

export const primary = style([base, { background: 'blue' }])

export const secondary = style([base, { background: 'aqua' }])
