import Head from 'next/head'
import Carousel from './Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Carousel />
      <div className="aboutmasjid">
        <h1>Masjid Rahman was</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>

    </div>
  )
}
