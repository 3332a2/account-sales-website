
import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black p-10">
      <Head>
        <title>账号合租服务中心</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">欢迎来到账号合租服务中心</h1>
      <p>本站支持 GPT、YouTube、Netflix 合租账号。</p>
    </div>
  )
}
