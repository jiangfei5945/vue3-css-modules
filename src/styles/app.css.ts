import { style, globalStyle, createTheme } from '@vanilla-extract/css'

export const myHeader = style({
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: 1.2,
  color: 'yellow'
})

// 主题和变量
export const [themeClass, vars] = createTheme({
  color: {
    brand: 'blue',
    text: 'red'
  },
  font: {
    body: 'arial'
  }
})

export const container = style({
  padding: 10,
  color: vars.color.text,
  // 伪类选择器
  ':hover': {
    color: 'white'
  }
})

// 全局样式
globalStyle('body', {
  background: 'darkgray'
})

// 样式复用
export const base = style({ padding: 12 })

export const primary = style([base, { background: vars.color.brand }])

export const secondary = style([base, { background: 'aqua' }])
