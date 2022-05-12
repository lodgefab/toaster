import { css } from "@emotion/react";

export const color = {
  primary: "#f2c13a",
  secondary: "#0997ba",
  subColor: {
    blue: "#3D98B8",
    orange: "#FF9575",
    yellow: "#DDB882",
  },
  background: {
    base: "#eeeeee",
    gray: "#cccccc",
    white: "#fff",
  },
  utils: {
    error: "#FF8A70",
    link: "#3396FF",
  },
  content: {
    dark: "rgba(0,0,0,.87)",
    middle: "rgba(0,0,0,.64)",
    light: "rgba(0, 0, 0, 0.38)",
    gray1: "#7A7A7A",
    black: "rgba(0, 0, 0, 1.0)",
  },

  active: "linear-gradient(180deg, #FD80A8 0%, #FCCF42 100%);",
} as const;

export const font = {
  h1: "font-weight: 700; font-size: 48px; line-height: 1.3;",
  h2: "font-weight: 700; font-size: 32px; line-height: 1.3;",
  h3: "font-weight: 700; font-size: 20px; line-height: 1.3;",
  h4: "font-weight: 700; font-size: 18px; line-height: 1.3;",
  subtitle1: "font-weight: 700; font-size: 16px; line-height: 1.3;",
  subtitle2: "font-weight: 700; font-size: 14px; line-height: 1.3;",
  body1: "font-weight: 400; font-size: 16px; line-height: 1.3;",
  body2: "font-weight: 400; font-size: 14px; line-height: 1.3;",
  article1: "font-weight: 400; font-size: 16px; line-height: 1.5;",
  article2: "font-weight: 400; font-size: 14px; line-height: 1.5;",
  button: "font-weight: 700; font-size: 14px; line-height: 1.5;",
  caption: "font-weight: 400; font-size: 12px; line-height: 1.5;",
  label: "font-weight: 700; font-size: 12px; line-height: 1.5;",
  overline: "font-weight: 400; font-size: 10px; line-height: 1.5;",
  unit: "font-weight: 700; font-size: 10px; line-height: 1.3;",
} as const;

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
};

export const curve = {
  button: "transition: all .3s 0s ease-out;",
  fade: "transition: all .6s 0s ease-out;",
} as const;

export const zIndex = {
  base: 0,
  effect: -1,
  elevation: {
    ev5: 5,
    ev10: 10, //Headerなど
    ev15: 15, //Dialog, OverLayコンテンツ
  },
} as const;

export const easing = [0.6, -0.05, 0.01, 0.99];
export const spring = {
  type: "spring",
  mass: 5,
  stiffness: 2000,
  damping: 100,
  restDelta: 0.0001,
};
export const motionConfig = {
  fadeInUp: {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  },
};


