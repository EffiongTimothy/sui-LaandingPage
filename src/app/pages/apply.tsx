"use client"

import Link from "next/link"

const Apply = () => {
  return (
    <div className=" font-sans py-16 px-4 relative">
      {/* Light blue background strip */}
      <div className="absolute left-0 right-0 h-40 bg-[#EEF5FF] top-1/2 -translate-y-1/2 z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center  gap-15 mb-12">
          {/* Individual Card */}
          <div className="bg-white rounded-3xl p-8 text-center flex flex-col items-center space-y-6 w-80 h-80 border-gey-100 shadow-md">
            <div className="w-16 h-16 flex items-center justify-center">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M28 28C31.866 28 35 24.866 35 21C35 17.134 31.866 14 28 14C24.134 14 21 17.134 21 21C21 24.866 24.134 28 28 28Z"
                  fill="#30D5D5"
                />
                <path d="M28 31.5C21 31.5 14 35 14 42V45.5H42V42C42 35 35 31.5 28 31.5Z" fill="#30D5D5" />
                <path
                  d="M38.5 24.5H45.5V31.5"
                  stroke="#30D5D5"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M45.5 24.5L35 35"
                  stroke="#30D5D5"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-xl">
                To apply as an <br /> <span className="font-bold">Individual</span>, click here
              </p>
            </div>
            <Link href="#" className="inline-block">
              <button className="bg-[#001437] hover:bg-[#001437]/90 text-white px-8 py-3 rounded-full flex items-center">
                Individual
                <span className="ml-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="#001437"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </Link>
          </div>

          {/* Team Card */}
          <div className="bg-white rounded-3xl p-8 text-center flex flex-col items-center space-y-6  w-80 h-80   border-gey-100 shadow-md">
            <div className="w-16 h-16 flex items-center justify-center">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M35 21C37.7614 21 40 18.7614 40 16C40 13.2386 37.7614 11 35 11C32.2386 11 30 13.2386 30 16C30 18.7614 32.2386 21 35 21Z"
                  fill="#30D5D5"
                />
                <path
                  d="M21 21C23.7614 21 26 18.7614 26 16C26 13.2386 23.7614 11 21 11C18.2386 11 16 13.2386 16 16C16 18.7614 18.2386 21 21 21Z"
                  fill="#30D5D5"
                />
                <path
                  d="M35 24.5C31.13 24.5 23.5 26.43 23.5 30.25V35H46.5V30.25C46.5 26.43 38.87 24.5 35 24.5Z"
                  fill="#30D5D5"
                />
                <path
                  d="M21 24.5C17.13 24.5 9.5 26.43 9.5 30.25V35H21V30.25C21 28.87 21.33 27.02 23.35 25.57C22.45 24.89 21.73 24.5 21 24.5Z"
                  fill="#30D5D5"
                />
                <path
                  d="M28 35C30.7614 35 33 32.7614 33 30C33 27.2386 30.7614 25 28 25C25.2386 25 23 27.2386 23 30C23 32.7614 25.2386 35 28 35Z"
                  fill="#30D5D5"
                />
                <path
                  d="M28 38.5C24.13 38.5 16.5 40.43 16.5 44.25V49H39.5V44.25C39.5 40.43 31.87 38.5 28 38.5Z"
                  fill="#30D5D5"
                />
              </svg>
            </div>
            <div>
              <p className="text-xl">
                To apply as a <span className="font-bold">Team</span>,<br /> click here
              </p>
            </div>
            <Link href="#" className="inline-block">
              <button className="bg-[#001437] hover:bg-[#001437]/90 text-white px-8 py-3 rounded-full flex items-center">
                Team
                <span className="ml-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="#001437"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Notification Text */}
        <p className="text-center text-lg">
          We will inform applicants if they were selected by <span className="font-bold">Monday, March 17, 2025</span>.
        </p>
      </div>
    </div>
  )
}

export default Apply

