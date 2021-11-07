import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar  from "../../components/Navbar"
import Header from "../../components/Services/Header"
import Content from "../../components/Services/Content"
import Description from "../../components/Services/Description";
import Plan from "../../components/Services/Plan";
import Process from "../../components/Services/Process";
import Industries from "../../components/Services/Industries";
import Footer from "../../components/Footer"

const Home: NextPage = () => {
  return (
      <>
         <Navbar />
         <Header />
         <Content />
        <Description />
        <Plan />
        <Process />
        <Industries />
         <Footer />
      </>
  )
}

export default Home