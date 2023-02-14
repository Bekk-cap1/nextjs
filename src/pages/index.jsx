import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import { data } from '@/components/foodData'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.container}>
          <h1>Internet Magazine</h1>
          <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, ducimus!</h4>
        </div>

        <div className={styles.container}>
          <ul>
            {data?.map((e)=>{
              {console.log(e.title)}
              <li>{e.title}</li>
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
