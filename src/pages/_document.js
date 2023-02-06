import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="flex justify-center bg-primaryBg">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
