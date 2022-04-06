// import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Zen+Kaku+Gothic+New:wght@400;500&display=swap');
          ${emotionReset}
          *,
          html,
          body {
            padding: 0;
            margin: 0;
            overscroll-behavior: none;
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
          @keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}};
        `}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
    
}

export default MyApp
