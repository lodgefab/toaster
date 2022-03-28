// import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from "nextjs-progressbar";
import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="#f2c13a"
      />  
      <Global
        styles={css`
          ${emotionReset}
          @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Zen+Kaku+Gothic+New:wght@400;500&display=swap');
          
          *,
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: 'Courier Prime','Zen Kaku Gothic New', monospace, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          * {
            box-sizing: border-box;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  )
    
}

export default MyApp
