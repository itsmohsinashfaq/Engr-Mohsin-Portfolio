import { RiReactjsLine } from "react-icons/ri";
import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandTailwind,
  TbBrandBootstrap,
  TbBrandNodejs,
} from "react-icons/tb";
import {
  SiMongodb,
  SiWordpress,
  SiMysql,
  SiExpress,
  SiCanva,
  SiAdobeillustrator,
  SiCoreldraw,
} from "react-icons/si";
import {
  FaGithub,
  FaGit,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaRobot,
} from "react-icons/fa";

const Technologies = () => {
  const tools = [
    { icon: <TbBrandHtml5 className="text-7xl text-[#E44D26]" /> },
    { icon: <TbBrandCss3 className="text-7xl text-[#0033ff]" /> },
    { icon: <TbBrandJavascript className="text-7xl text-[#F0DB4F]" /> },
    { icon: <TbBrandTailwind className="text-7xl text-[#0051ff]" /> },
    { icon: <TbBrandBootstrap className="text-7xl text-[#6600ff]" /> },
    { icon: <RiReactjsLine className="text-7xl text-[#00aeff]" /> },
    { icon: <TbBrandNodejs className="text-7xl text-[#16cf05]" /> },
    { icon: <SiExpress className="text-7xl text-[#00ff4c]" /> },
    { icon: <SiMongodb className="text-7xl text-[#4DB33D]" /> },
    { icon: <SiMysql className="text-7xl text-[#04b0d6]" /> },
    { icon: <SiWordpress className="text-7xl text-[#0486c2]" /> },

    // MS Office Tools
    { icon: <FaFileWord className="text-7xl text-blue-700" /> },
    { icon: <FaFileExcel className="text-7xl text-green-600" /> },
    { icon: <FaFilePowerpoint className="text-7xl text-orange-600" /> },

    // Design Tools
    { icon: <SiAdobeillustrator className="text-7xl text-orange-700" /> },
    { icon: <SiCoreldraw className="text-7xl text-green-500" /> },
    { icon: <SiCanva className="text-7xl text-[#00C4CC]" /> },

    // AI Tools
    { icon: <FaRobot className="text-7xl text-purple-500" />, label: "ChatGPT" },
    { icon: <FaRobot className="text-7xl text-indigo-500" />, label: "Gemini" },
    { icon: <FaRobot className="text-7xl text-gray-400" />, label: "Blackbox" },

    // Dev Tools
    { icon: <FaGithub className="text-7xl text-white" /> },
    { icon: <FaGit className="text-7xl text-orange-500" /> },
  ];

  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {tools.map((tool, i) => (
          <div
            key={i}
            className="p-3 rounded-xl border text-stone-400 border-stone-600 hover:border-stone-400 transition duration-300"
          >
            <div className="transition-transform duration-300 transform hover:scale-110 cursor-pointer flex flex-col items-center">
              {tool.icon}
              {tool.label && (
                <span className="mt-2 text-xs text-stone-300">{tool.label}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
