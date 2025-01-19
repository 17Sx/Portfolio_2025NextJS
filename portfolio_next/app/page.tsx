import dynamic from 'next/dynamic';
import styles from './page.module.css';
import Header from '@/components/Header';
import Scene from '@/components/Scene';



export default function Home() {
  return (
    <body>

    <div className="custom-cursor"></div>
    <div className="custom-cursor-before"></div>
      <main className={styles.main}>
      <Header />
      <Scene />
      <section className='presentation'>
        <div className='presentationText'>
        <h2>Creating solutions, <br /> one idea at a time.</h2>
        </div>
      </section>
      </main>
    <div className="grain"></div>


    <script src="js/cursor.js"></script>
    </body>
  );
}
