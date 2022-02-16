/* This example requires Tailwind CSS v2.0+ */
import { NewspaperIcon, PhoneIcon, SupportIcon } from '@heroicons/react/outline'

const supportLinks = [
  {
    name: 'Sales',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: PhoneIcon,
  },
  {
    name: 'Technical Support',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: SupportIcon,
  },
  {
    name: 'Media Inquiries',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: NewspaperIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative pb-20 bg-gray-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-20 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-extrabold tracking-tight text-white md:text-5xl lg:text-5xl font-sans ">How does Softcoplus help companies in Salesforce?</h3>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
          Softcoplus provides remarkable salesforce services to each of its clients "as a service," helping an organization upgrade its promptness and outstanding customer relation and cooperation inside an engaging environment. This service makes the task pretty easy and seamless. Because of the excellent salesforce consulting Companies, businesses and organizations hold a greater chance of arriving at the top in the hyper-com market globally by adopting best practices with state-of-the-art software inside the industry.Undoubtedly, Softcoplus is the best platform many businesses and organizations have adopted, thereby maintaining excellent customer relationships globally. The company provides so many services and tools in its portfolio. Despite the organization's scale, size, services, and area, you can benefit from choosing Softcoplus for small businesses.
          It is now the best time for you to come up with creative solutions with excellent technologies. Softcioplus helps small, medium, and large businesses. The aim is to help customers by giving an enhanced experience. This technology can help in promoting the industry. 

          </p>
          <a href='/contact' >
          <button className='bg-red-800 p-3 text-white rounded-md mt-6' > Get Started </button> </a> 
        </div>

        
      </div>

      

     
    </div>
  )
}
