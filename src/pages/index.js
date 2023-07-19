import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { T1 } from '@/components/T1/T1'

export default function Home() {
  return (
    <>
      <T1 />
    </>
  )
}
