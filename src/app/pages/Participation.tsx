import Image from "next/image"
import { FaCheckCircle } from "react-icons/fa"
import participation from "../../assets/participation-requirement-image.png"
const Participation = () => {
  return (
    <div className="mt-5 md:mt-1 font-sans flex flex-col md:flex-row items-center gap-15 md:max-w-6xl md:mx-auto p-6">
      <div className="w-96 p-4 md:p-0 md:w-3/5">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={participation}
            alt="Developer working on laptop"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="md:w-1/2 ">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0066FF] mb-8">Participation Requirements</h2>
        <div className="space-y-6">
          {requirements.map((requirement, index) => (
            <div key={index} className="flex items-start gap-4">
              <FaCheckCircle className="w-6 h-6 text-[#00D1D1] flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-800">{requirement}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const requirements = [
  "Teams must be physically present at the venue in Lagos throughout the duration of the hacker house (March 24-29).",
  "Teams should ensure they can be fully engaged and attentive to their projects throughout this period.",
  "All participants will be required to adhere to the event guidelines and code of conduct.",
  "Intellectual property created by teams during the hacker house will be retained by those teams.",
]

export default Participation

