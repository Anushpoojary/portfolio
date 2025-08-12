import { FaGlobe } from "react-icons/fa";

import figma from "/image 2 (1).png";
import github from "/GitHub.png";

const projects = [
  {
    title: "Quantum Computing Simulator",
    description:
      "A Figma design visually engaging simulator that helps users learn and experiment with quantum computing concepts through an interactive interface. Includes user authentication, quantum circuit design, and real-time simulation.",
    figmaLink:
      "https://www.figma.com/design/Yn3x8Te3mhuMa9cN4zfSnc/Quantum?node-id=0-1&t=T0C89rQSO9fjmloj-1",
  },
  {
    title: "Health Bot",
    description:
      "A healthcare assistant Figma design where users can get instant medical advice, book consultations, and access multiple specialties. Features include secure login/signup, AI chatbot, transparent pricing, and health tips.",
    figmaLink:
      "https://www.figma.com/design/DfFSC2gmEuyByo7m6zQdP3/Health-bot?node-id=0-1&t=687nGLYS1kBzsZO9-1",
  },
  {
    title: "VR Store",
    description:
      "An e-commerce website design for selling VR headsets. Includes product listings, responsive layouts, newsletter signup, and a modern, clean interface for both desktop and mobile devices.",
    figmaLink:
      "https://www.figma.com/design/Lk7BCL0tFrkVKxomzAmfWi/VR-store?node-id=0-1&t=0mmMxawq23NkR9ef-1",
  },
  {
    title: "Jersey Store",
    description:
      "A sports merchandise e-commerce website built using React Vite and Vanilla CSS. Features product browsing, shopping cart, responsive UI, and smooth navigation for a seamless shopping experience.",
    githubLink: "https://github.com/Anushpoojary/jersey-store",
  },
  {
    title: "Employee Management System",
    description:
      "A desktop application for managing employee records using Python, Tkinter, and SQLite. Features include adding, updating, deleting, and searching employees, along with a simple and intuitive interface.",
    githubLink: "https://github.com/Anushpoojary/tkinter",
  },
  {
    title: "Rank Rival (Android & iOS)",
    description:
      "A cross-platform leaderboard app with light/dark themes, player management, and ranking system. Designed in Figma for Android and iOS, featuring profile cards, editable stats, and navigation for competitive tracking.",
    figmaLink:
      "https://www.figma.com/design/pyt6IrYbmhdTLipECpeE8P/Rank-rival?node-id=0-1&t=G8EUESPPQKYo0J1n-1",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-black text-white py-16 px-4" id="projects">
      <div className="w-[90%] mx-auto">
        <h2 className="text-4xl font-bold mb-8">
          Featured <span className="text-orange-500">Projects</span>
          <span className="block w-24 h-1 bg-orange-500 mt-1 rounded"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative p-6 pt-8 pb-12 rounded-2xl bg-black flex justify-between"
              style={{
                borderWidth: "2px",
                borderImage: "linear-gradient(to right, #0ea5e9, #f97316) 1",
              }}
            >
              {/* Floating Globe Icon (unchanged) */}
              <div className="absolute -top-4 -left-4 bg-black rounded-full p-1">
                <FaGlobe size={28} className="text-blue-500" />
              </div>

              {/* Text Section */}
              <div className="pr-4">
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
              </div>

              {/* Right-aligned Figma & GitHub Icons */}
              <div className="pl-4 flex items-center gap-2">
                {project.figmaLink && (
                  <a
                    href={project.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Figma Design"
                  >
                    <img
                      src={figma}
                      alt="Figma"
                      className="md:w-20 md:h-10 w-32 h-10"
                    />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View GitHub Repo"
                  >
                    <img
                      src={github}
                      alt="GitHub"
                      className="md:w-20 md:h-10 w-32 h-10"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
