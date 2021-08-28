import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar  from "../../components/Navbar"
import Header from "../../components/Aboutus/Header"
import Info from "../../components/Aboutus/Info"
import Service from "../../components/Aboutus/Service";
import Footer from "../../components/Footer"

const Home: NextPage = () => {
  return (
      <>
         <Navbar />
         <Header />
         <Info />
         <Service />
         <Footer />
      </>
  )
}

export default Home
