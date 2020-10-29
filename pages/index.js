import Head from 'next/head'
import Link from "next/link"

import HeaderContainer from "../containers/Header"
import FooterContainer from "../containers/Footer"
import CollageContainer from "../containers/Corpus"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderContainer />
      <CollageContainer />
      <FooterContainer />
    </div>
  )
}
