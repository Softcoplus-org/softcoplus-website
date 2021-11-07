
import React from "react";
import Image from 'next/image'
import profilePic from  "/public/computer.png"


export default function Content({item} : any)  {

   {console.log(item)}

  return (
   
    
        <div className="relative my-0 my:16 flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-16 xl:py-32 md:px-8 sm:max-w-xl md:max-w-full">
          <div className="z-0 flex  justify-center h-full -mx-16 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
            <img
              src='/computer.png'
              className="  h-72 "
              alt=""
            />
          </div>
          <div className="relative flex justify-end sm:my-0 my-8 max-w-xl mx-auto xl:pr-16 lg:max-w-screen-xl">
            <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
              <div className="max-w-xl mb-6">
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                
                  </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    {/* {item.name && item.name.toUpperCase()} */}
                    Trusted Web Development Agency in Mississauga 
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                Your website is the effect of your business. A professionally advanced and designed website will take your business to higher levels of achievement and growth. Since customers have become online-savvy, even more, complicated websites have pushed the limits of online business. Simplicity in web improvement and design permits a user to focus on the critical elements of the website, like its functionality, message, usability, and the final result of meeting the business objective in terms of conversion.
                  
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

