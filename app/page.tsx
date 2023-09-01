import Image from 'next/image'
import Header from './Header'
import Feed from './Feed'
import TextExplique from './TextExplique'
import PasswordGenerator from './FeedMotedePass'


export default function Home() {
  return (
    <div>
      <Header />
      <div className='mb-5'>
      <Feed />
      </div>
      
      <TextExplique />
      <div>
        <PasswordGenerator />
       
      </div>
    </div>
  )
}
