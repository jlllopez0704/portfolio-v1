import { useMemo } from "react";
import TerminalBox from "../common/TerminalBox";
import TerminalTyping from "../common/TerminalTyping";
import {
  SiReact,
  SiVuedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiLaravel,
  SiNodedotjs,
  SiCodeigniter,
  SiErlang,
  SiMysql,
  SiRedis,
  SiDocker,
  SiLinux,
  SiGit,
  SiArduino,
  SiRaspberrypi,
  SiAndroid,
  SiPhp,
  SiSqlite,
} from "react-icons/si";
import { Bot, Server } from "lucide-react";

export default function Skills({ onComplete }) {
  const skillCategories = useMemo(() => [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
        { name: "Vue", icon: SiVuedotjs, color: "text-[#4FC08D]" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
        { name: "Bootstrap", icon: SiBootstrap, color: "text-[#7952B3]" },
      ],
    },
    {
      title: "Mobile",
      skills: [
        { name: "React Native", icon: SiReact, color: "text-[#61DAFB]" },
        { name: "Android Build", icon: SiAndroid, color: "text-[#3DDC84]" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "PHP", icon: SiPhp, color: "text-[#4479A1]" },
        { name: "Laravel", icon: SiLaravel, color: "text-[#FF2D20]" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
        { name: "CodeIgniter", icon: SiCodeigniter, color: "text-[#EE4326]" },
        { name: "Erlang", icon: SiErlang, color: "text-[#A90533]" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
        { name: "Redis", icon: SiRedis, color: "text-[#DC382D]" },
        { name: "Sqlite", icon: SiSqlite, color: "text-[#4479A1]" },
      ],
    },
    {
      title: "DevOps",
      skills: [
        { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
        { name: "Linux", icon: SiLinux, color: "text-[#FCC624]" },
        { name: "Git", icon: SiGit, color: "text-[#F05032]" },
        { name: "XAMPP", icon: Server, color: "text-[#FB7A24]" },
      ],
    },
    {
      title: "IoT & Embedded",
      skills: [
        { name: "Arduino", icon: SiArduino, color: "text-[#00979D]" },
        { name: "ESP8266 / ESP32", icon: SiArduino, color: "text-[#E7352C]" },
        { name: "MQTT", icon: SiArduino, color: "text-[#660066]" },
        {
          name: "Sensor Integration",
          icon: SiArduino,
          color: "text-neutral-300",
        },
        { name: "C/C++", icon: SiArduino, color: "text-[#00599C]" },
        { name: "Raspberry Pi", icon: SiRaspberrypi, color: "text-[#C51A4A]" },
      ],
    },
    {
      title: "AI & Automation",
      skills: [
        {
          name: "Prompt Engineering",
          icon: Bot,
          color: "text-neutral-300",
        },
        { name: "Local LLMs", icon: Bot, color: "text-neutral-300" },
        { name: "Ollama", icon: Bot, color: "text-neutral-300" },
      ],
    },
  ]);

  return (
    <TerminalBox title="skills">
      <div className="grid grid-cols-2 gap-6 text-sm">
        <TerminalTyping
          items={skillCategories}
          speed={200}
          onComplete={onComplete}
          renderItem={(category) => (
            <div key={category.title}>
              <h3 className="font-bold mb-3 text-neutral-200">
                {category.title}
              </h3>

              <ul className="space-y-2">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <li
                      key={skill.name}
                      className="flex items-center gap-2 text-neutral-400"
                    >
                      <Icon className={`w-4 h-4 ${skill.color}`} />
                      <span>{skill.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        />
      </div>
    </TerminalBox>
  );
}
