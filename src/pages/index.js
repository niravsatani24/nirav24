import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Machine Learning Front-end Mockup</title>
        <meta name="description" content="Machine Learning Front-end Mockup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Machine Learning Front-end Mockup!
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>Card 1 &rarr;</h3>
            <p>Description of card 1</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Card 2 &rarr;</h3>
            <p>Description of card 2</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Card 3 &rarr;</h3>
            <p>Description of card 3</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Card 4 &rarr;</h3>
            <p>Description of card 4</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
