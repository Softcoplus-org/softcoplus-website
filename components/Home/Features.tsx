/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Trace your Competition Performance',
    description:
      `Softcoplus helps the industry to get an overview of the competitors in the corresponding industry. The company helps to solve efficient management
    
      .  The business leads can decrease the pressure of handling various tasks`,
    icon: GlobeAltIcon,
  },
  {
    name: 'Ease of Managing Orders',
    description:
      `It builds an end-to-end customer relationship management.
      It can be practised to monitor the customer activity, including any product queries and successful orders.
      It can allow the Salespeople to multiple locations and deal with them from various geographical areas. 
      `,
    icon: ScaleIcon,
  },
  {
    name: 'Analyze Growth and Decline of Business',
    description:
      `It plays a crucial role in tracking business performance and explains how the business scenario stands in the market competition.
      Recovering the data from your Salesforce service companies can help you get information regarding the company with no trouble.
      .`,
    icon: LightningBoltIcon,
  },
  {
    name: 'Manage Customers',
    description:
      `Salesforce consulting services helps in evolving aspects of the customer's expectations and necessities.
      Regularly keep the promised customers and encourage them to leave feedbacks associated with products and services.
      The reviews can help to grow the organization to give greater customer comfort.
      `,
    icon: AnnotationIcon,
  },
]

export default function Example() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-red-700 font-semibold tracking-wide uppercase">FEATURES</h2>
         
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
             The aim is to help customers by giving an enhanced experience. 
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 text-justify">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
