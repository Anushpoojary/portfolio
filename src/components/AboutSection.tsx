import { useRef, useEffect, useState } from "react";
import { GraduationCap, Briefcase, BookOpen, FileText } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
}

const education: TimelineItem[] = [
  {
    year: "2022 - Present",
    title: "Bachelor of Engineering in Computer Science",
    organization: "St. Joseph Engineering College, Mangaluru",
    description:
      "Studying software engineering, data structures, algorithms, full stack development, and machine learning.",
  },
  {
    year: "2020 - 2022",
    title: "Pre-University Course in Science",
    organization: "SDPT PU College, Kateel",
    description: "PCMC (Physics, Chemistry, Mathematics, Computer Science)",
  },
  {
    year: "2017 - 2020",
    title: "Higher Secondary Education",
    organization: "Maryvale High School, Kinnigoli",
    description: "Completed High School with emphasis on core academics.",
  },
];

const experience: TimelineItem[] = [
  {
    year: "2023",
    title: "Graphic Designer",
    organization: "SNG PU College, Kantipala",
    description:
      "Working as a graphic designer with 3 years of experience creating posters, logos, and promotional materials for college events.",
  },
  {
    year: "2024",
    title: "UI/UX Designer",
    organization: "Freelance / Multiple Clients",
    description:
      "Worked with clients to design and develop engaging websites and mobile applications, creating intuitive user interfaces and seamless user experiences.",
  },
  {
    year: "2024",
    title: "Graphic Designer",
    organization: "Gamath Events, Picturesque, and other clients",
    description:
      "Two years of experience in graphic design, creating 6–7 unique logos and numerous posters for college events, community programs, and client branding projects.",
  },
];

const Timeline = ({ items }: { items: TimelineItem[] }) => (
  <div className="space-y-6">
    {items.map((item, index) => (
      <div key={index} className="relative pl-8">
        <span className="absolute -left-4 top-1">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            {/* Outer circle - border only */}
            <circle
              cx="12"
              cy="12"
              r="10"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
            />
            {/* Inner circle - filled */}
            <circle cx="12" cy="12" r="6" fill="#3b82f6" />
          </svg>
        </span>
        <h4 className="font-bold text-white">{item.year}</h4>
        <h5 className="text-white font-semibold">{item.title}</h5>
        <p className="italic text-sm text-gray-300">{item.organization}</p>
        <p className="text-gray-300 text-sm">{item.description}</p>
      </div>
    ))}
  </div>
);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [tab, setTab] = useState<"education" | "experience">("education");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionRef.current
              ?.querySelectorAll(".reveal")
              ?.forEach((el, i) => {
                setTimeout(() => {
                  el.classList.add("opacity-100", "translate-y-0");
                }, i * 100);
              });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="bg-black text-white py-2">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 reveal">
          About <span className="text-orange-500">Me</span>
          <div className="h-1 w-20 bg-orange-400 mt-1" />
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-0">
          {/* Left Side - Tabs and Timeline */}
          <div className="reveal pb-0 bg-[#002628]">
            <div className="flex">
              <button
                onClick={() => setTab("education")}
                className={`flex-1 px-4 py-2 flex items-center justify-center gap-2 text-sm font-semibold ${
                  tab === "education"
                    ? "bg-gray-700 text-white"
                    : "bg-gray-800 text-gray-400"
                }`}
              >
                <GraduationCap className="w-4 h-4" /> Education
              </button>
              <button
                onClick={() => setTab("experience")}
                className={`flex-1 px-4 py-2 flex items-center justify-center gap-2 text-sm font-semibold ${
                  tab === "experience"
                    ? "bg-gray-700 text-white"
                    : "bg-gray-800 text-gray-400"
                }`}
              >
                <Briefcase className="w-4 h-4" /> Experience
              </button>
            </div>

            <div className="p-6 mt-2 rounded-md">
              {tab === "education" ? (
                <Timeline items={education} />
              ) : (
                <Timeline items={experience} />
              )}
              <div className="flex justify-center md:justify-start md:ml-40 md:mt-12 mt-8">
                <a
                  href="/resume___.pdf"
                  download="Anush_Resume.pdf"
                  className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-md flex items-center gap-2 w-fit"
                >
                  <FileText className="w-4 h-4" /> Get my Resume
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Intro and Highlights */}
          <div className="bg-[#1e1e1e] p-4 rounded-r-md reveal border-l border-gray-700">
            <h3 className="text-2xl font-bold mb-4">
              Computer Science Engineer <span className="text-blue-400">&</span>{" "}
              Developer
            </h3>
            <p className="text-gray-300 mb-4">
              I'm a third-year Computer Science Engineering student at St.
              Joseph Engineering College, Mangaluru. I’m passionate about
              blending creativity with technology, specializing in UI/UX design,
              graphic design, and web development to craft functional, engaging,
              and visually appealing digital solutions.
            </p>
            <p className="text-gray-300 mb-6">
              I have experience designing logos, posters, and promotional
              materials, along with developing modern websites and applications.
              My focus is on delivering intuitive, user-centered solutions that
              are efficient, scalable, and impactful, ensuring every project
              meets both functional needs and aesthetic expectations.
            </p>

            <div>
              <h4 className="font-semibold text-white">Interests:</h4>
              <p className="text-gray-300">
                Open Source Software, Competitive Programming, AI Ethics, Tech
                Meetups, Hiking
              </p>
            </div>

            <div className="p-4 rounded-md mb-4">
              <BookOpen className="text-blue-400 w-6 h-6 mb-2" />
              <h4 className="font-semibold text-white mb-1">
                Continuous Learner
              </h4>
              <p className="text-sm text-gray-300">
                Always exploring new technologies & methodologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
