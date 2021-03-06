import { useSession } from "next-auth/react"
import Head from 'next/head'
import Feed from "../components/Feed"
import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from "../components/Sidebar"

export default function Home() {
  const {data: session} = useSession()
    console.log('session =>',session)
  if(!session) return <Login />
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex m-auto max-w-screen-2xl">
        <Sidebar />
        <Feed />
      </main>
    </div>
  )
}


