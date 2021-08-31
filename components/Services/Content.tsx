
import React from "react";
import Image from 'next/image'
import profilePic from  "../../public/computer.png"


export default function Header()  {
  return (
   
    
        <div className="relative my-16 flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-16 xl:py-32 md:px-8 sm:max-w-xl md:max-w-full">
          <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
            <Image
              src={profilePic}
              className="object-cover object-right w-4/5 h-3/4 lg:w-auto lg:h-2/5"
              alt=""
            />
          </div>
          <div className="relative flex justify-end my-8 max-w-xl mx-auto xl:pr-16 lg:max-w-screen-xl">
            <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
              <div className="max-w-xl mb-6">
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                
                  </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                   ARTIFICIAL INTELLIGENCEC
                  
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae. explicabo.
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae. explicabo.
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae. explicabo.
                  
                </p>
              </div>
              <form>
                <div className="flex flex-col md:flex-row">
                 
                </div>
              
              </form>
            </div>
          </div>
        </div>
     
  );
};

