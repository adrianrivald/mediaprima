// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import React from 'react';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const cache = createCache(); // 🔥 This is what's missing!
    let collectedStyles = '';

    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => (
          <StyleProvider cache={cache}>
            <App {...props} />
          </StyleProvider>
        ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    try {
      collectedStyles = extractStyle(cache);
    } catch (error) {
      console.error('Style extraction failed:', error);
    }

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            dangerouslySetInnerHTML={{ __html: collectedStyles }}
          />
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
