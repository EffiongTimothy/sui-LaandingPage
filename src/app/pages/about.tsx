import Image from 'next/image';
import profileImage from '../../assets/about-sui-image.svg';

const About = () => {
    return (
        <div className=" font-sans  flex flex-col md:flex-row items-center justify-center gap-[10%] px-10 py-16 bg-white">
            <div className="font-semibold mt-10 relative">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-[rgb(10,23,57)] relative flex items-center justify-center overflow-hidden">
                    <Image src={profileImage} alt="Sui Lagos Hacker House" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-5 left-[-1px] bg-white shadow-md px-3 py-1 rounded-lg text-gray-600 text-sm flex items-center">
                    <span className="mr-1">🛠️</span> Web 3.0
                </div>
                <div className="absolute bottom-5 right-[-20px] bg-white shadow-md px-3 py-1 rounded-lg text-gray-600 text-sm flex items-center">
                    <span className="mr-1">🔗</span> Blockchain Tech
                </div>
            </div>
            <div className="mt-10 md:w-[35%] text-left mt-5 text-[#2C2C2C] ">
                <div className="mb-6 text-2xl font-bold text-[#187CF4]">About SUI Lagos Hacker House</div>
                <p className="text-gray-700 mt-4">
                    <span className="font-bold text-[#1A60B5]">Sui Lagos Hacker House</span> is a 6-day event designed to bring together developers, engineers, builders, innovators, and blockchain enthusiasts interested in building on the <span className="font-bold text-[#1B1B1B]">Sui blockchain</span>.
                </p>
                <p className="text-gray-700 mt-4">
                    The event will feature workshops, mentorship and coaching sessions, hacking, and networking opportunities to encourage innovation and collaboration. It is aimed at helping Nigerian participants build robust solutions using Sui and prepare for the 
                    <span className="font-bold underline text-[#1A60B5]"> Sui Overflow 2025 Hackathon,</span> a virtual global competition with over $500,000 in combined prizes.
                </p>
                <p className="text-gray-700 mt-4">
                    The Sui Lagos Hacker House is implemented by <span className="font-semibold">Semicolon</span> and sponsored by the <span className="font-semibold text-black">Sui Foundation</span>.
                </p>
            </div>
        </div>
    );
};

export default About;
