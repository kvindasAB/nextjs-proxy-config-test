import {useState} from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Axios from 'axios';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {

  const {t} = useTranslation();
  const [result, setResult] = useState(null);

  const handleClick = async () => {
    const {data} = await Axios.post('/api/login');
    setResult(data);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          NextJS Proxy Config repo test.
        </h1>

        <p className={styles.description}>
          <button type="button" onClick={handleClick}>Click to call WS {t('buttons:send')}</button>
        </p>

        <p className={styles.description}>
          WSResult: {JSON.stringify(result)}
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
