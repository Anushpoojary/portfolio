import { useState, useEffect } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    console.log("Form submitted:", formState);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (window.location.hash === "#contact") {
      scrollToSection("contact");
    }
  }, []);

  return (
    <section
      id="contact"
      className="py-20 bg-black text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex align-middle justify-center">
            <h2 className="text-4xl font-bold mb-8">
              Let's <span className="text-orange-500">Connect</span>
              <span className="block w-24 h-1 bg-orange-500 mt-1 rounded"></span>
            </h2>
          </div>

          <div>
            <div className="bg-gradient-to-bl from-black/10 via-black to-white/30 bg-opacity-10 backdrop-blur-md rounded-lg p-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Let's Connect
                  </h3>
                  <p className="text-cyan-100 mb-6">
                    I'm always excited to work on new projects and collaborate
                    with fellow developers. Whether you have a question or just
                    want to say hi, I'll try my best to get back to you!
                  </p>
                  <div className="flex items-center mb-4">
                    <FaEnvelope className="text-cyan-300 mr-2" />
                    <a
                      href="mailto:anushajarkateel@gmail.com"
                      className="text-white hover:text-cyan-300 transition-colors duration-300"
                    >
                      anushajarkateel@gmail.com
                    </a>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/Anushpoojary"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyan-300 transition-colors duration-300 glow-effect"
                    >
                      <FaGithub size={24} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/anush-587a062a2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyan-300 transition-colors duration-300 glow-effect"
                    >
                      <FaLinkedin size={24} />
                    </a>
                    {/* <a
                      href="https://www.instagram.com/rai_harsu_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyan-300 transition-colors duration-300 glow-effect"
                    >
                      <FaInstagram size={24} />
                    </a> */}
                  </div>
                  <div className="mt-4">
                    <a
                      href="/portfolio/resume___.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-3 py-1 bg-[#1E90FF] text-white text-sm rounded-md shadow-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#1C86EE] hover:shadow-lg flex items-center">
                        <FaDownload className="mr-1" size={12} /> Get my Resume
                      </button>
                    </a>
                  </div>
                </div>

                <div>
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-cyan-100 mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 bg-neutral-500 bg-opacity-20 rounded-md text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-cyan-300 text-red"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-cyan-100 mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 bg-neutral-500 bg-opacity-20 rounded-md text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-cyan-300"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-cyan-100 mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-3 py-2 bg-neutral-500 bg-opacity-20 rounded-md text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-cyan-300"
                          placeholder="Your message here..."
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600 transition-colors duration-300"
                      >
                        Send Message
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <h3 className="text-2xl font-semibold text-white mb-4">
                        Thank You!
                      </h3>
                      <p className="text-cyan-100">
                        Your message has been submitted successfully.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
