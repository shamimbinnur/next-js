import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title> SBN </title>
        <meta name="keywords" content="shamim" />
      </Head>
      <div>
        <h1 className={styles.title} >Home page!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea soluta sit sapiente accusantium impedit magni voluptas facilis, maiores repellat quae facere, totam, atque tempore rem enim nulla nam at.</p>
        <Link href="/sbn/test" >
          <a className={styles.btn} > See test</a>
        </Link>
      </div>
    </>
  )
}
