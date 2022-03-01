 /* This is tailwind code by shubham singh*/

import Image from 'next/image'
import logo from  "../public/logo.jpeg"

const navigation = {
  navlinks: [
    { name:'Solutions', href: 'solutions' },
    { name: 'Services', href: '/services' },
    { name: 'Home', href: '/' },
    { name: 'AboutUs', href: '/about' },
    { name: 'Contact', href: '/contact' },

  ],
  services: [
    { name: 'Services', href: '/services' },
  ],
  Home: [
    { name: 'Home', href: '/' },
  ],
  contactus: [
    { name: 'Contact', href: '/contact' },
  ],
  AboutUs: [
    { name: 'AboutUs', href: '/about' },
  ],





}

export default function Example() {
    return (
    <footer className="bg-black" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
    <div className="w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
    <div className="space-y-8 xl:col-span-1">
      <Image
       className="h-10 w-auto sm:h-11 m-0"
              height={50}
              width={150}
              src={logo}
              alt=""
            />
            </div>
            </div>
            </div>
            <p className="text-white-500 text-right bg-red-600">
                Making the world a better place through constructing elegant hierarchies.
              </p>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase text-center mt-10">Quick Links</h3>
              <div className="mt-12 grid grid-flow-row gap-8 xl:mt-0 xl:rows-span-2 pt-20">
              <div className="md:grid md:grid-flow-row md:gap-8">
                <div>
                  
                  <ul role="list" className="ml-10 space-x-4 m-8 grid grid-flow-col gap-1 ">
                    {navigation.navlinks.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-500 hover:text-red-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

    </div>
              </div>
          


              
          
          <div className="mt-12 border-t border-gray-200 pt-8 mb-8">
            <p className="text-base text-gray-400 xl:text-center">&copy; 2020 Softcoplus,  Inc. All rights reserved.</p>
          </div>
          </footer>
            )}




  
    

 


          
             
                
     
