import Layout from "../components/layout/layout";
import "../styles/globals.css";
import "../styles/style.css";
import CartContextProvider from "../components/context/cartContext";
import NextNProgress from "nextjs-progressbar";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <>
          <CartContextProvider>
        <Layout>{page}</Layout>
        </CartContextProvider>
      </>
    ));

  return getLayout(
    <>
          <NextNProgress color="#A2F578" />
      <Component {...pageProps} />
    </>
  );
}
