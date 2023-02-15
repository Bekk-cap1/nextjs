import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import { data } from '@/components/foodData'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [count, setCount] = useState(0)
  return (
    <>
      <div className={styles.home}>
        <div className={styles.container}>
          <h1>Internet Magazine</h1>
          <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, ducimus!</h4>
        </div>

      </div>


      <div className={styles.container}>
        <ul>
          {
            data?.map((e) => (
              <li>
                <img src={e.img} alt="" />
                <span>
                  <h4>{e.title}</h4>
                  <p>{e.price}</p>
                </span>
                <b>
                <h5>{e.have}</h5>
                <button onClick={()=>setCount(count+1)}>+</button>
                <h6>{count}</h6>
                <button onClick={()=>setCount(-1)}>-</button>
                </b>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}
