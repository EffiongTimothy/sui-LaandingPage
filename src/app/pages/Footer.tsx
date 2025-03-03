import Image from "next/image"
import Link from "next/link"
import semicolonLogo from "../../assets/semicolon-logo.svg"
import sui from "../../assets/sui-logo.svg"

const Footer = () => {
  return (
    <footer className="font-sans bg-[#001437] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap">
        <div className="w-2/3">
      <h2 className="text-[#30D5D5] text-2xl font-semibold mb-6">Logistics</h2>
      <ul className="space-y-4 text-sm">
        <li className="flex items-start">
          <span className="text-[#FFFFFF] mr-3 ">•</span>
          <span>Accommodation will be provided for teams near the hacker house venue in Lagos</span>
        </li>
        <li className="flex items-start">
          <span className="text-[#FFFFFF] mr-3 ">•</span>
          <span>Meals will be provided</span>
        </li>
      </ul>
    </div>

          <div>
            <h2 className="text-[#30D5D5] text-2xl font-semibold mb-6">Resources and Support</h2>
            <div className="space-y-6 text-sm">
              <p>
                Semicolon is providing free training on Sui Move, sponsored by the Sui Foundation. It isn't too late to
                register for the current round of classes. Click on this link to register:{" "}
                <Link href="https://bit.ly/SC-SUI-Training" className=" underline" target="_blank">
                  https://bit.ly/SC-SUI-Training
                </Link>
              </p>
              <p>
                Semicolon is a workforce development company that is solving the problem of youth unemployment by
                training software engineers and techpreneurs. Through our one-year techpreneurship program, we help
                individuals develop required skills to compete as software engineers in the global market. To learn more
                about Semicolon, please visit{" "}
                <Link href="http://www.semicolon.africa" className="  underline" target="_blank">
                  www.semicolon.africa
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="flex ml-10 md:mb-5  items-center gap-8  md:w-26 w-full mt-6 md:mt-0 ">
        <div className="flex justify-center items-center gap-5 ">
          <Image src={semicolonLogo || "/placeholder.svg"} alt="Semicolon Logo" className="h-6 w-auto" />
          <div className="h-6 bg-white">|</div>
          <Image src={sui || "/placeholder.svg"} alt="Sui Logo" className="h-6 w-auto" />
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

