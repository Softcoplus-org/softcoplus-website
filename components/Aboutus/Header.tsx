


export default function Header(){
    return(
        <main className="mt-0 mx-auto w-full px-4 sm:mt-0 py-8 sm:px-6 lg:mt-0 bg-red-100">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-gray-900">CRM</span>
                <span className="block text-red-600"> Software Development Company</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Our CRM solutions help you to automate your business operations. We offer you CRM development Services that ensure long-time relationships with your customers.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <svg
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
              width={640}
              height={784}
              fill="none"
              viewBox="0 0 640 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                  x={118}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect y={72} width={640} height={640} className="text-gray-50" fill="currentColor" />
              <rect x={118} width={404} height={784} fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
            </svg>
            <div className="relative mx-auto w-full  rounded-lg shadow-lg lg:max-w-md">
              {/* <button
                type="button"
                className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              > */}
                <span className="sr-only">Watch our video to learn more</span>
                <img
                  className="w-full rounded-lg"
                  src="https://media.istockphoto.com/photos/innovation-and-new-ideas-lightbulb-concept-with-question-mark-picture-id1279690557?b=1&k=20&m=1279690557&s=170667a&w=0&h=BnH7EPIgwwpPyKMfeBJr87Ql900NFKjLYknrzvfi3Dw="
                  alt=""
                />
                {/* <div className="absolute inset-0 w-full h-full flex items-center justify-center" aria-hidden="true">
                  <svg className="h-20 w-20 text-red-500" fill="currentColor" viewBox="0 0 84 84">
                    <circle opacity="0.9" cx={42} cy={42} r={42} fill="white" />
                    <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                  </svg>
                </div> */}
              {/* </button> */}
            </div>
          </div>
        </div>
      </main>
    )
}