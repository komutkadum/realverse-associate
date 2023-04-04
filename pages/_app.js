import '@/styles/globals.css';
import '@/styles/scrollbar.css';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="/static/header.js"></Script>
    </>
  );
}
