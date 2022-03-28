import css from '@emotion/css'


export const color = {
  primary: '#ffffff',
  secondary: '#DBC0BD',
  subColor: {
    blue: '#3D98B8',
    orange: '#FF9575',
    yellow: '#DDB882',
  },
  background: {
    base: '#121212',
    gray: '#292929',
    white: '#fff',
  },
  utils: {
    error: '#FF8A70',
    link: '#3396FF',
  },
  content: {
    dark: 'rgba(0,0,0,.87)',
    middle: 'rgba(0,0,0,.64)',
    light: 'rgba(0, 0, 0, 0.38)',
    gray1: '#7A7A7A',
    black: 'rgba(0, 0, 0, 1.0)',
  },
  surface: {
    transparent: {
      e1px: 'rgba(255,255,255,.05)',
      e2px: 'rgba(255,255,255,.07)',
      e4px: 'rgba(255,255,255,.09)',
      e8px: 'rgba(255,255,255,.12)',
      e16px: 'rgba(255,255,255,.15)',
      e24px: 'rgba(255,255,255,.16)',
    },
    nonTransparent: {
      e1px: '#191919',
      e2px: '#1e1e1e',
      e4px: '#232323',
      e8px: '#2a2a2a',
      e16px: '#323232',
      e24px: '#353535',
    },
  },
  active: 'linear-gradient(180deg, #FD80A8 0%, #FCCF42 100%);',
} as const

export const font = {
  
    h1: 'font-weight: 700; font-size: 48px; line-height: 1.3;',
    h2: 'font-weight: 700; font-size: 32px; line-height: 1.3;',
    h3: 'font-weight: 700; font-size: 20px; line-height: 1.3;',
    h4: 'font-weight: 700; font-size: 18px; line-height: 1.3;',
    subtitle1:
      'font-weight: 700; font-size: 16px; line-height: 1.3;',
    subtitle2:
      'font-weight: 700; font-size: 14px; line-height: 1.3;',
    body1:
      'font-weight: 400; font-size: 16px; line-height: 1.3;',
    body2:
      'font-weight: 400; font-size: 14px; line-height: 1.3;',
    article1:
      'font-weight: 400; font-size: 16px; line-height: 2.0;',
    article2:
      'font-weight: 400; font-size: 14px; line-height: 2.0;',
    button:
      'font-weight: 700; font-size: 14px; line-height: 1.5;',
    caption:
      'font-weight: 400; font-size: 12px; line-height: 1.5;',
    label:
      'font-weight: 700; font-size: 12px; line-height: 1.5;',
    overline:
      'font-weight: 400; font-size: 10px; line-height: 1.5;',
    unit: 'font-weight: 700; font-size: 10px; line-height: 1.3;',
  
} as const

export const media = {
  lg: (...args: any) => css`
    @media (min-width: 1040px) {
      ${css(...args)}
    }
  `,
  md: (...args: any) => css`
    @media (min-width: 480px) and (max-width: 1039px) {
      ${css(...args)}
    }
  `,
  mdsp: (...args: any) => css`
    @media (max-width: 1039px) {
      ${css(...args)}
    }
  `,
  sp: (...args: any) => css`
    @media (max-width: 479px) {
      ${css(...args)}
    }
  `,
}

export const curve = {
  button: 'transition: all .3s 0s ease-out;',
  fade: 'transition: all .6s 0s ease-out;',
} as const

export const zIndex = {
  base: 0,
  effect: -1,
  elevation: {
    ev5: 5,
    ev10: 10, //Headerなど
    ev15: 15, //Dialog, OverLayコンテンツ
  },
} as const
