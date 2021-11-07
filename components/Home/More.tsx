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
      name: 'Easy To Process Sales Process',
      description: `The sales Cloud module addresses your business' unique needs so that you can customize business processes flexibly and match almost all your customers' unique needs.
      `,
      icon: InboxIcon,
    },
    {
      name: 'Increases the Business Opportunities',
      description: 'Salesforce professional services allow you to share data, get permissions, and drive the deals in a few minutes with smartphones. Besides, it maintains to grow & reach consumer needs by practising more provided technologies.',
      icon: UsersIcon,
    },
    {
      name: 'Accurate Predictions & Forecasting',
      description: 'Using Salesforce cloud services will not lose your client as the data regularly experience algorithms for predicting the future business to get better benefits. And then you will get better updates and reports in return..',
      icon: TrashIcon,
    },
    {
      name: 'Increase Your Business Productivity',
      description: 'If you seek extra efficient methods of examining your monthly business progress, then Salesforce can help you by efficiently processing the data. Reporting gets more comfortable to handle with the Salesforce professional services.',
      icon: PencilAltIcon,
    },
    {
      name: 'Drives a Steady Growth',
      description: 'To improve your sales at full range, you have to control customer conversation quickly. Salesforce web services with integrated bots help you to improve communication with clients..',
      icon: DocumentReportIcon,
    },
    {
      name: 'Cross-Selling and Upselling',
      description: `The market competition is continuously meeting customer requirements. Salesforce Services assist you in getting the idea to help develop the industry with the best solution in the business. Use a 360-degree view of the customer requirements. This allows businesses to gain more. 
      .`,
      icon: ReplyIcon,
    },
    {
        name :'Streamline Every Single Business Processes',
        description : `
        These services upscale your means and the business environment by cutting the sales cycle and concentrating on the best opportunities to manifest a better method.
If you want to get more information about the advantages provided by Salesforce services, then visit your nearby Salesforce cloud consultant.
Also, you should ask questions on the most advanced technologies, marketing automation points, etc.
`,
icon: ReplyIcon,
 },
{
    name : 'Better Management    ',
    icon: DocumentReportIcon,
    description : `
    This is a major trait of Salesforce. Customer Relationship Management can trace everything relevant to your company. There are some cases where it comes in convenient are:
Better Automation and Management of the methods
Prompt response and customer announcements
More further customization makes the company sensible and efficient
Less time consumption and more efficiency.

    `
}
    
   
  ]
  
  export default function Example() {
    return (
    <div>
      <div className="bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Benefits of Using Salesforce For Your Business?</h2>
          <p className="mt-4 max-w-7xl text-lg text-indigo-200">
          Customer data is highly important to run a business these days; securing that same data from every cyberworld’s danger is more important!
           
          </p>
          <p className="mt-4 max-w-7xl text-lg text-indigo-200">
          When stored, all your business clients, employee's information, company activities, product-related information, etc., when are stored, you get better chances to increase the opportunities and sales growth by 30%.
          </p>
          <p className="mt-4 max-w-7xl text-lg text-indigo-200">
          However, there are some other benefits of salesforce professional services, which we will trail today in this article. Let's get started;
          </p>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-1 lg:mt-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
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

    <div className="relative px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="text-lg max-w-7xl mx-auto ">
        <h1>
            <span className="block text-base text-center text-red-700 font-semibold tracking-wide uppercase">
               time management
            </span>
        
        </h1>
        <p className="mt-8 text-xl text-gray-500 max-w-7xl mx-auto leading-8">
        The complete customer specifications help in designing the plans to profit the business. Built-in calendar tools support necessary program tasks for the year, month, week, and day. This serves to prioritize the work according to the customers and plan the tasks.

        </p>
        </div>
        <div className="mt-6  text-xl max-w-7xl mx-auto text-gray-500">
        <p>
        It enhances organic communication and serves the business for future difficulties. We have a team of Salesforce Application development services and the best talent, skill, and expertise to enhance the business name. You can reach us according to your requirements. If you have any uncertainties or you want an answer to any questions. We have the best experience and information regarding the Salesforce platform.


        </p>
        <br></br>
        <p>
        You can squeeze Salesforce for your company needs with forms to an amount. If it's not probable with configurations, then there are customizations or custom applications where developers come to the saving.


        </p>
        
        </div>
      </div>
  </div>
    ) 
  }
  