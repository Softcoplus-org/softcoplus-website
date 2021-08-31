import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar  from "../../components/Navbar"
import Header from "../../components/Services/Header"
import Content from "../../components/Services/Content"
import Footer from "../../components/Footer"
import {service} from "../../public/services"

const Home: NextPage = ({serv} : any) => {

  console.log(serv)

  return (
      <>
         <Navbar />
         <Header />
         <Content  item={serv} />
         <Footer />
      </>
  )
}

export const getStaticProps = async({params} : any) =>{
  
  const serviceData =  service.filter(s => s.id.toString() === params.id )

  return{
    props : {
      serv : serviceData[0]
    }
  }

}


export const getStaticPaths = async () =>{
  const paths = service.map(s =>({
     params : {
       id : s.id.toString()
     }
  }))

  return{
    paths , fallback :  true
  }
}


export default Home