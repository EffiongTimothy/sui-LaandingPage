import Image from "next/image";
import hackerHouse from "../../assets/HackerHouseNew.svg";
import semicolonLogo from "../../assets/semicolon-logo.svg";
import sui from "../../assets/sui-logo.svg";

const HeroSection = () => {
  const eventInfo = [
    {
      icon: (
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
            stroke="#0066FF"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "March 24-29,",
      subText: "2025",
    },
    {
      icon: (
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z"
            stroke="#0066FF"
            strokeWidth="2"
          />
          <path
            d="M3.62 8.49C5.59 -0.169998 18.42 -0.159998 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39 20.54C5.63 17.88 2.47 13.57 3.62 8.49Z"
            stroke="#0066FF"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "312 Herbert Macaulay,",
      subText: "Sabo, Yaba, Lagos, Nigeria",
    },
    {
      icon: (
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
            stroke="#0066FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51001"
            stroke="#0066FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Application Deadline:",
      subText: "March 12, 2025",
    },
  ];

  return (
    <div className="relative min-h-[600px] rounded-bl-[10%] bg-[#001437]">
z
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-8 pb-24">
        <div className="flex justify-center items-center gap-5 mb-16">
          <Image src={semicolonLogo || "/placeholder.svg"} alt="Semicolon Logo" className="h-6 w-auto" />
          <div className="w-px h-8 bg-white"></div>
          <Image src={sui || "/placeholder.svg"} alt="Sui Logo" className="h-6 w-auto" />
        </div>

        <div className="text-center mb-24">
          <div className="animate-fade-in-right">
            <Image
              src={hackerHouse || "/placeholder.svg"}
              alt="Lagos Hacker House"
              className="md:max-w-2xl md:mx-auto"
              priority
            />
          </div>
          <h2 className="text-[#30D5D5] text-2xl mt-4">Road to Sui Overflow</h2>
        </div>

        <div className="font-sans absolute left-1/2 -translate-x-1/2 translate-y-25  md:translate-y-15 bottom-0 w-full max-w-3xl px-4">
          <div className="bg-white rounded-2xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-6 h-6">{item.icon}</div>
                <div>
                  <p className="text-sm text-gray-500">{item.title}</p>
                  <p className="font-semibold text-gray-900">{item.subText}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;