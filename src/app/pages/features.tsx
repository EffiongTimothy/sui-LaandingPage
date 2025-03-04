const Features = () => {
  return (
    <div className="font-sans grid md:grid-cols-2 md:mb-16">
      <div className="bg-[rgb(235,242,255)] py-16 px-8">
        <div className="max-w-xl mx-auto mr-9">
          <h2 className="text-2xl font-bold text-[#187CF4] mb-6">
            Features of the Hacker House
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-blue-500  ">•</span>
              <span>Brainstorming and Ideation Sessions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 ">•</span>
              <span>Workshops and Tutorials</span>
            </li>
            <li className="flex text-wrap items-start gap-2">
              <span className="text-blue-500 ">•</span>
              <span>
                Coaching and Mentorship from Move Experts, including the Sui
                Foundation's Head of Developer Relations
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 ">•</span>
              <span>Access to Resources</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 ">•</span>
              <span>Networking Opportunities</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 ">•</span>
              <span>Solution Demonstrations</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#F6FAFF] py-16 px-8">
        <div className="max-w-xl mx-auto ml-9 w-3/4 ">
          <h2 className="text-2xl font-bold text-[#187CF4] mb-6">
            Benefits for Participating Teams
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 ">•</span>
              <span>Access Mentorship &amp; Coaching</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 ">•</span>
              <span>Engage with the Sui Foundation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 ">•</span>
              <span>Hands-On Learning</span>
            </li>
            <li className="flex text-wrap items-start gap-2 ">
              <span className="text-blue-500 ">•</span>
              <span>
                Strengthen solutions that can be used to compete in global
                hackathons, enter accelerator programs, and become viable
                businesses
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 ">•</span>
              <span>Showcase your skills</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 ">•</span>
              <span>
                Connect with other developers &amp; potential mentors and
                partners
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 ">•</span>
              <span>
                All participants who successfully complete the Hacker House are
                eligible for a reward worth the equivalent of $100
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className=" text-blue-500">•</span>
              <span>
                Participants would build robust solutions using Sui and prepare
                for the Sui Overflow 2025 Hackathon, a virtual global
                competition with over $500,00 in combined prizes.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
