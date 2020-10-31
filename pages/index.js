import Head from 'next/head'
import Link from "next/link"

import { Header, Footer } from "../containers"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Footer />
    </div>
  )
}
