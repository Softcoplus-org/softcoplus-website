import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar  from "../../components/Navbar"
import Header from "../../components/Contact/Header"
import Message from "../../components/Contact/Message"
import Footer from "../../components/Footer"

const Home: NextPage = () => {
  return (
      <>
         <Navbar />
         
         <Footer />
      </>
  )
}

export default Home;