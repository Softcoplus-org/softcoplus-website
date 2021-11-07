import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar  from "../components/Navbar"
import Header from "../components/Home/Header"
import Features from "../components/Home/Features"
import Highlights from "../components/Home/Highlights"
import Services from "../components/Home/Services"
import More from "../components/Home/More"
import Footer from "../components/Footer"

const Home: NextPage = () => {
  return (
      <>
         <Navbar />
         <Header />
         <Highlights />
         <Features />
         <More />
         <Footer />
      </>
  )
}

export default Home
