import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import firebase from '../firebase';


export default function Home() {
  console.log(firebase)
  return (
    <div>
      <p>test</p>
    </div>
  )
}
