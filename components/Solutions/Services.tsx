/* This example requires Tailwind CSS v2.0+ */
import {
    ChatAltIcon,
    DocumentReportIcon,
    HeartIcon,
    InboxIcon,
    PencilAltIcon,
    ReplyIcon,
    TrashIcon,
    UsersIcon,
  } from '@heroicons/react/outline'
  
  const features = [
    {
      name: 'Data Security',
      description: 'You get the maximum possible data security with CRM solutions since everything is stored on the cloud. So, you should not fear losing your valuable data. ',
      icon: InboxIcon,
    },
    {
      name: 'Enhanced management of the leads:',
      description: 'The custom CRM software development offers you the fastest updates about your customers. You are always provided with the necessary information about your clients using CRM solutions. You can easily refer to your customers while preparing valuable approaches..',
      icon: UsersIcon,
    },
    {
      name: 'Simple integration',
      description: 'You can conveniently integrate your system with multiple plugins and extensions. So, all the departments in one company can stay on the same page and easily share the information. So, there will be a single and a central system to manage the whole business.      .',
      icon: HeartIcon,
    },
    {
      name: 'Best support and maintenance services',
      description: 'Our CRM development agency provides you the support and maintenance services even after you get the fully designed software. We are always ready to help and guide you at any stage of your business once you start using our CRM solutions..',
      icon: PencilAltIcon,
    },
  
  ]
  
  export default function Example() {
    return (
      <div className="bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Our CRM development company Offers you: </h2>
          
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name}>
                <div>
                  <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                  <p className="mt-2 text-base text-indigo-200">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  