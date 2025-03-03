import Image from 'next/image';
import eligibility from '../../assets/eligibility-image.svg';

const Eligibility = () => {
    return (
        <div className="font-sans  flex flex-col md:flex-row justify-center items-center bg- py-8 md:py-12 px-4 md:px-6 h-[550px]">
            <div className="flex flex-col md:flex-row items-center justify-center bg-[#001437] text-white p-6 md:px-20 rounded-xl md:p-10 md:gap-8 w-full md:w-[65%] relative h-[600px] md:h-[300px]">
                <div className=" flex-1  text-left z-10 mb-8 md:mb-0">
                    <h2 className="text-xl md:text-2xl font-bold text-[#00D1D1] mb-3 md:mb-4">
                        Eligibility Criteria
                    </h2>
                    <div className="text-xl">
                        <p className="text-xl md:text-base">
                            <span className="font-semibold text-[#00D1D1]">Team Size:</span> 
                            Between 2-4 members
                        </p>
                        <p className="text-xl text-base">
                            <span className="font-semibold text-[#00D1D1]">Age:</span> 
                            18+ years old
                        </p>
                        <p className=" w-64 text-xl md:text-base">
                            <span className="font-semibold text-[#00D1D1]">Participants:</span> 
                            Open to developers, designers, entrepreneurs, and blockchain enthusiasts
                        </p>
                    </div>
                </div>

                <div className="md:absolute relative w-full md:w-1/2 h-[200px] md:h-[390px] md:-translate-y-[90px]  -bottom-4 md:bottom-auto md:-right-1 md:top-0 z-0">
                    <Image
                        src={eligibility || "/placeholder.svg"}
                        alt="Eligibility Criteria"
                        className="w-full h-full object-contain md:object-cover rounded-lg"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}

export default Eligibility;