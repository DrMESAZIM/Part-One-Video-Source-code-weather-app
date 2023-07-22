import Banner from '@/components/Banner'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout >
      <div className='isolate bg-white'>
     <Banner 
       message=" learn how to build weather app with NEXTJS."
       link="#"
     />
      <Header />
      </div>
      </Layout>
  )
}
