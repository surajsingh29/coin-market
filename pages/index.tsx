import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center py-2">
      <Head>
        <title>COiN MarKet</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
    </div>
  )
}

export default Home
