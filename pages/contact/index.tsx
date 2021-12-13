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
         <Header ></Header>
         <Message ></Message>



    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:py-2 lg:px-8 lg:flex lg:items-center">
       
      </div>
    </div>



         <Footer />
      </>
  )
}

export default Home
