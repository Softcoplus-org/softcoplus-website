/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ChartBarIcon,
  CursorClickIcon,
  DocumentReportIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {service} from "../public/services"
import {solution} from "../public/solutions"

import Image from 'next/image'
import logo from  "../public/logo.jpeg"


const solutions = [
  {
    name: 'AR/VR Development',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'IOT Applications',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'UI pattern libraries',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Enterprise Application Development',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RefreshIcon,
  },
  {
    name: 'Custome CRM application development',
    description: 'Get detailed reports that will help you make more informed decisions ',
    href: '#',
    icon: DocumentReportIcon,
  },
]



const services = [
  {
    name: 'CMS Software',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Data Science services',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  { name: 'Mobile App Development', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Data Analysis',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'AI/ML Services',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RefreshIcon,
  },
  {
    name: 'DevOps services',
    description: 'Get detailed reports that will help you make more informed decisions ',
    href: '#',
    icon: DocumentReportIcon,
  },
]


function classNames(...classes :
     any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {




  return (
    <Popover className="relative bg-white  z-50">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <a href="/" className="flex">
            <span className="sr-only">Workflow</span>
            <Image
              className="h-10 w-auto sm:h-11"
              height={50}
              width={150}
              src={logo}
              alt="softcoplus"
            />
          </a>
        </div>
        <div className="-mr-2 -my-2 lg:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-700">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex-1 lg:flex md:items-center md:justify-between">
            
          <Popover.Group as="nav" className="flex space-x-10">
             <a href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
               Home
             </a>
             <a href="/solutions" className="text-base font-medium text-gray-500 hover:text-gray-900">
               Solutions
             </a>
             <a href="/services" className="text-base font-medium text-gray-500 hover:text-gray-900">
               Services
             </a>
            {/* <Popover className="relative">
              {({ open } : any) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700'
                    )}
                  >
                    <span>Solutions</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          {solution.map((item) => (
                            <a
                              key={item.name}
                              href={`/solutions/${item.id}`}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-red-600 text-white sm:h-12 sm:w-12">
                              <ViewGridIcon className="h-6 w-6" aria-hidden="true" />
                              </div>
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>


            <Popover className="relative">
              {({ open } : any) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700'
                    )}
                  >
                    <span>Services</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          {service.map((item) => (
                            <a
                              key={item.name}
                              href={`/services/${item.id}`}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-red-600 text-white sm:h-12 sm:w-12">
                                <ViewGridIcon className="h-6 w-6" aria-hidden="true" />
                              </div>
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
             */}
            <a href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
              AboutUs
            </a>
            <a href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
              ContactUs
            </a>
            <a href="https://softcoplus.webhr.co/hr/login/" target="_blank" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Employee 
            </a>

          
          </Popover.Group>
          <div className="flex items-center md:ml-12">
          
            

          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <a href="/">
                   <Image
                      className="h-10 w-auto  sm:h-11"
                      height={50}
                      width={150}
                      src={logo}
                      alt="softcoplus"
                    />
                  </a>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-700">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-6">
                  Solutions
                  {solution.map((item) => (
                    <a
                      key={item.name}
                      href={`/solutions/${item.id}`}
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-red-600 text-white">
                        <ViewGridIcon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                    </a>
                  ))}

                  Services

     { service.map((item) => (
                    <a
                      key={item.name}
                      href={`/services/${item.id}`}
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-red-600 text-white">
                        <ViewGridIcon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <a href="/about" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  AboutUs
                </a>

                <a href="/contact" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Contactus
                </a>

                <a href="https://softcoplus.webhr.co/hr/login/" target="_blank" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Employee Login
                </a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Expertise
                </a>
                
              </div>
           
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}


