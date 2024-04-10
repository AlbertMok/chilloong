import {
  CPlusPlusIcon,
  DockerIcon,
  GitIcon,
  LinuxIcon,
  NodeJSIcon,
  PythonIcon,
  RustIcon,
} from "@/components/Icons";

const skills = [
  {
    name: "NodeJS",
    icon: <NodeJSIcon />,
  },
  {
    name: "C++",
    icon: <CPlusPlusIcon />,
  },
  {
    name: "Python",
    icon: <PythonIcon />,
  },
  {
    name: "Rust",
    icon: <RustIcon />,
  },
];

const tools = [
  {
    name: "Git",
    icon: <GitIcon />,
  },
  {
    name: "Docker",
    icon: <DockerIcon />,
  },
  {
    name: "Linux",
    icon: <LinuxIcon />,
  },
];

export default function SkillSection() {
  return (
    <section className="flex justify-center pt-[72px]">
      <div className="">
        <h1 className="text-4xl font-bold font-serif">My Skills</h1>
        <h2 className="text-2xl font-bold font-serif mt-5">Programing</h2>
        <div className="flex gap-3 mt-3">
          {skills.map((skill) => (
            <a key={skill.name} href="">
              {skill.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
