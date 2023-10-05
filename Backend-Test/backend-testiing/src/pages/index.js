import Image from 'next/image'
import { Inter } from 'next/font/google'
import LeftMenu from '@/components/Menu'
import TopTracksList from '@/components/TopTrackList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className='w-full'>
        <LeftMenu></LeftMenu>
        <TopTracksList></TopTracksList>
      </div>

    </main>
  )
}
