import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar  from "../../components/Navbar"
import Header from "../../components/Expertise/Header"
import Features from "../../components/Expertise/Features"
import CTA from "../../components/Expertise/Cta"
import Footer from "../../components/Footer"

const Home: NextPage = () => {
  return (
      <>
         <Navbar />
         <Header />
         <Features />
         <CTA />
         <Footer />
      </>
  )
}

export default Home
