interface Skill {
  name: string;
  src: string;
}

const skills: Skill[] = [
  { name: "FIGMA", src: "/image 2.png" },
  { name: "REACT", src: "/image 7.png" },
  { name: "WIX STUDIO", src: "/Wix.png" },
  { name: "DORA", src: "/image 6.png" },
  { name: "FRAMER", src: "/image 4.png" },
  { name: "RIVE", src: "/image 5.png" },
  { name: "JAVASCRIPT", src: "/js.png" },
  { name: "HTML5", src: "/html.png" },
  { name: "FIREBASE", src: "/image 9.png" },
  { name: "BOOTSTRAP", src: "/bootstrap.png" },
  { name: "MONGODB", src: "/image 8.png" },
  { name: "EXPRESS", src: "/image 10.png" },
  { name: "GIT", src: "/git.png" },
  { name: "CSS3", src: "/css.png" },
  { name: "SASS", src: "/sass.png" },
  { name: "JAVA", src: "/image 15.png" },
  { name: "C", src: "/c.png" },
];

export default function SkillsGrid() {
  const itemsPerRow = { mobile: 3, desktop: 6 };

  const fullRowsDesktop =
    Math.floor(skills.length / itemsPerRow.desktop) * itemsPerRow.desktop;
  const fullRowsMobile =
    Math.floor(skills.length / itemsPerRow.mobile) * itemsPerRow.mobile;

  const fullRowSkillsDesktop = skills.slice(0, fullRowsDesktop);
  const lastRowSkillsDesktop = skills.slice(fullRowsDesktop);

  const fullRowSkillsMobile = skills.slice(0, fullRowsMobile);
  const lastRowSkillsMobile = skills.slice(fullRowsMobile);

  // 🔹 Reusable Skill Item with hover text above
  const SkillItem = ({ skill, size }: { skill: Skill; size: string }) => (
    <div className="relative flex flex-col items-center group">
      {/* Icon */}
      <div
        className={`${size} mx-auto mb-4 transition-all duration-300 transform group-hover:scale-130 group-hover:opacity-100`}
      >
        <img
          src={skill.src}
          alt={skill.name}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Hover Text Above */}
      <span className="absolute bottom-16 md:bottom-24 opacity-0 group-hover:opacity-100 group-hover:-translate-y-3 transition-all duration-300 text-emerald-400 text-xs md:text-sm font-semibold bg-black/80 px-3 py-1 rounded-md shadow-lg">
        {skill.name}
      </span>
    </div>
  );

  return (
    <section className="bg-black text-white py-20 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Skills</h2>
          <div className="w-20 h-1 bg-orange-500 rounded"></div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="grid grid-cols-3 gap-8 mb-8">
            {fullRowSkillsMobile.map((skill) => (
              <SkillItem key={skill.name} skill={skill} size="w-16 h-16" />
            ))}
          </div>

          {lastRowSkillsMobile.length > 0 && (
            <div className="flex justify-center gap-8 flex-wrap">
              {lastRowSkillsMobile.map((skill) => (
                <SkillItem key={skill.name} skill={skill} size="w-16 h-16" />
              ))}
            </div>
          )}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="grid grid-cols-6 gap-12 mb-12">
            {fullRowSkillsDesktop.map((skill) => (
              <SkillItem key={skill.name} skill={skill} size="w-20 h-20" />
            ))}
          </div>

          {lastRowSkillsDesktop.length > 0 && (
            <div className="flex justify-center gap-32 flex-wrap">
              {lastRowSkillsDesktop.map((skill) => (
                <SkillItem key={skill.name} skill={skill} size="w-20 h-20" />
              ))}
            </div>
          )}
        </div>

        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <StatBox
              value={`${skills.length}+`}
              label="Technologies"
              color="text-cyan-400"
            />
            <StatBox
              value="3+"
              label="Years Experience"
              color="text-purple-400"
            />
            <StatBox value="20+" label="Projects" color="text-orange-400" />
            <StatBox value="10+" label="Clients" color="text-pink-400" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBox({
  value,
  label,
  color,
}: {
  value: string;
  label: string;
  color: string;
}) {
  return (
    <div className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700/30 backdrop-blur-sm">
      <div className={`text-3xl font-bold ${color} mb-2`}>{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  );
}
