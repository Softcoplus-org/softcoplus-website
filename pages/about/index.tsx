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
         
        {/* Header */}
          <div className="bg-gray-900">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
              <div className="text-center">
                <p className="mt-1 text-4xl font-extrabold text-gray-200 sm:text-5xl sm:tracking-tight lg:text-6xl">
                   About Us
                </p>
                <p className="max-w-xl mt-5 mx-auto text-xl text-gray-300">
                   Start building for free, then add a site plan to go live. Account plans unlock additional features.
                </p>
              </div>
            </div>
          </div>


        {/* Content */}
          <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-7xl mx-auto ">
            <h2>
              <span className="block text-base text-center text-red-700 font-semibold tracking-wide uppercase">
              The Leading Web Development, CRM & Salesforce Consulting Services Company
              </span>
           
            </h2>
            <p className="mt-8 text-xl text-gray-500 max-w-7xl mx-auto leading-8">
           
Softcoplus is one of the leading web development companies. We provide CRM, web development, and Salesforce consulting services to our clients at affordable rates. Our IT professionals expert team includes developers, Graphic Designers, Business Analysts, and Project Managers. Our core expertise in offering Mobile App Development, Corporate Branding Solutions, and Website Development to a wide variety of business verticals such as Healthcare, Hospitality, Real Estate, eCommerce, Manufacturing, Tourism, Education, Finance, and Banking, and more. We take your plans to another level to achieve high performance, profitable and customized IT solutions in no time. We can build a consultancy-driven approach for giving start to finish enterprise technology solutions. We work with our customers to construct a powerful and rewarding web with innovative social media solutions.

            </p>
          </div>
          <div className="mt-6  text-xl max-w-7xl mx-auto text-gray-500">
            <p> We understand the value of the client's time and money, so we handle each task genuinely and deliver the maximum output within the given time frame. Keeping in mind the needs and business goals of our clients, we maximize our capability and experience to deliver innovative web development services including website designing, CRM, salesforce consulting, and mobile app development services. Our web development experts have tremendous experience, in-depth knowledge, and the ability to guarantee our client's web-based outstanding success and continued growth online. We also excel in creating and developing imaginative programming applications and solutions for the latest technologies. Our Technology Masters, developers, and computer programmers are completely equipped with the technical skills and knowledge to propose to the clients to choose the right technology for their business and industry.

  
            </p>
           <br></br>
           
           <p>
           We have authority and specialization in creating web applications just as programming applications, so we are currently dealing with many activities of web and programming applications to deliver excellent results for the customers. Our point is to offer quality services, 100% consumer loyalty, reliability, and guaranteed & quick results to the customer base. Our principal objective is to focus on setting up market-driven and money-making web development and designing plans for our significant clients.

           </p>
           
          </div>
        </div>
        </div>



        {/* Services */}



         <Info />
         <Service />


         <div className="relative py-16 bg-gray-50 shadow-inner overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-7xl mx-auto ">
            <h2>
              <span className="block text-base text-center text-red-700 font-semibold tracking-wide uppercase">
              Experience Matters
              </span>
           
            </h2>
            <p className="mt-8 text-xl text-gray-500 max-w-7xl mx-auto leading-8">
           
            Consistency is the success of the perception system. Capability over web development technologies with a continuous proven track record with superb and value addition to your dream is our center factor. Converting your thoughts into reality with the combination of ideation, brooding and trustwor

            </p>
          </div>
         
        </div>

        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-7xl mx-auto ">
            <h2>
              <span className="block text-base text-center text-red-700 font-semibold tracking-wide uppercase">
                Work Pattern
              </span>
           
            </h2>
            <p className="mt-8 text-xl text-gray-500 max-w-7xl mx-auto leading-8">
           
              We take interest and cater a complete solution for the clients. We convert complex functionality into useful contributions for our regarded customer base.


            </p>
          </div>
         
        </div>

        </div>


         <Footer />
      </>
  )
}

export default Home
