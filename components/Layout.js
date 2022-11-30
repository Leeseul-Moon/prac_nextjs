import NabBar from "./NabBar";

export default function Layout({ children }) {
  return (
    <>
      <NabBar />
      <div>{children}</div>
    </>
  );
}
