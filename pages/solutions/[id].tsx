import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar  from "../../components/Navbar"
import Header from "../../components/Services/Header"
import Content from "../../components/Services/Content"
import Footer from "../../components/Footer"
import {solution} from "../../public/solutions"

const Home: NextPage = ({serv} :  any) => {

  return (
      <>
         <Navbar />
         <Header />
         <Content item={serv} />
         <Footer />
      </>
  )
}

export const getStaticProps = async({params} : any) =>{
  
  const solutionData =  solution.filter(s => s.id.toString() === params.id )

  return{
    props : {
      serv : solutionData[0]
    }
  }

}


export const getStaticPaths = async () =>{
  const paths = solution.map(s =>({
     params : {
       id : s.id.toString()
     }
  }))

  return{
    paths , fallback :  true
  }
}


export default Home