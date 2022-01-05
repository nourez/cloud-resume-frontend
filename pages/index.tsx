import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profilePic from '../public/memoji1.jpg'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <body>
      <h1>Nourez Rawji</h1>
      <Image src={profilePic} width={400} height={400} alt='Nourez Rawji' />
      <h2>Under construction!</h2>
      <p>
        Why not check out my <Link href='resume'>
            <a>resume</a>
          </Link>
      </p>
    </body>
  )
}

export default Home
