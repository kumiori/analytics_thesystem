import Head from 'next/head'
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import Loading from '../components/loading'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import '../styles/appearence.css'
import '../styles/additional.css'

import { useState, useEffect } from "react";
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  //const loading = false;

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
      console.log(router.pathname)
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    setLoading(router.isFallback)
  }, [router]);

  if (loading) {
    return <Loading />
  } else return (
    <><div>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i&amp;display=swap" as="style" onload="this.onLoad=null;this.rel='stylesheet'" />
        <title>The System Analytics</title>
        <meta name="This website exposes the system." />
      </Head>
      {/* <Header /> */}
      <Component {...pageProps} />
      <Footer />
    </div>
    </>
  );
}

export default MyApp;

