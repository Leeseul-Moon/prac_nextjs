import NabBar from "../components/NabBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NabBar />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: yellow;
        }
      `}</style>
    </>
  );
}
