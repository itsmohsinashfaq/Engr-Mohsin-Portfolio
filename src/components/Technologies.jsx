import { RiReactjsLine } from "react-icons/ri";
import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandTailwind,
  TbBrandBootstrap,
  TbBrandNodejs,
  TbBrandNextjs,
} from "react-icons/tb";
import { SiMongodb, SiWordpress, SiMysql, SiExpress } from "react-icons/si";

const Technologies = () => {
  return (
    <>
      <div className="pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex flex-wrap gap-4">
            {/* HTML */}
            <div>
              <TbBrandHtml5 className="text-7xl text-[#E44D26]" />
            </div>

            {/* CSS */}
            <div>
              <TbBrandCss3 className="text-7xl text-[#0033ff]" />
            </div>

            {/* JavaScript */}
            <div>
              <TbBrandJavascript className="text-7xl text-[#F0DB4F]" />
            </div>

            {/* Tailwind CSS */}
            <div>
              <TbBrandTailwind className="text-7xl text-[#0051ff]" />
            </div>

            {/* Bootstrap */}
            <div>
              <TbBrandBootstrap className="text-7xl text-[#6600ff]" />
            </div>
            {/* React */}
            <div>
              <RiReactjsLine className="text-7xl text-[#00aeff]" />
            </div>

            {/* Node.js */}
            <div>
              <TbBrandNodejs className="text-7xl text-[#16cf05]" />
            </div>

            {/* Express.js */}
            <div>
              <SiExpress className="text-7xl text-[#00ff4c]" />
            </div>

            {/* MongoDB */}
            <div>
              <SiMongodb className="text-7xl text-[#4DB33D]" />
            </div>

            {/* MySQL */}
            <div>
              <SiMysql className="text-7xl text-[#04b0d6]" />
            </div>

            {/* WordPress */}
            <div>
              <SiWordpress className="text-7xl text-[#0486c2]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
