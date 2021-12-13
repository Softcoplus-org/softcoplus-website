import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar  from "../../components/Navbar"
import Header from "../../components/Aboutus/Header"
import Highlights from "../../components/Solutions/Highlights"
import Features from "../../components/Solutions/Features"
import Services from "../../components/Solutions/Services";
import Need from "../../components/Solutions/Need"
import Choose from "../../components/Solutions/Choose"
import Footer from "../../components/Footer"

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden">
         <Navbar />
         <Header />
         <Highlights />
         <Features />
         <Services />
         <Need />
         <Choose />
         <Footer />
      </div>
  )
}

export default Home