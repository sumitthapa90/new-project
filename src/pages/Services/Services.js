import React from "react";
import "./services.css";
import Footer from "../../component/Footer/Footer";
import { AiOutlineLaptop, AiFillMobile } from "react-icons/ai";
import { BsGraphUpArrow, BsDatabaseCheck } from "react-icons/bs";
import { SiHiveBlockchain, SiVirtualbox } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { TbWashMachine } from "react-icons/tb";

function Services() {
  return (
    <>
      <div className="w-full h-40 mx-auto py-2 px-2 text-slate-100 ">
        <div className="about-img w-full ">
          <img
            src="./assets/tech.jpg"
            className=" w-full h-[40vh] md:h-[55vh] xl:h-[65vh]"
            alt="2"
          />
        </div>
        <h2 className="text-white text-center text-4xl font-bold  mt-4 font-mono">
          Our
          <span className="text-amber-700 text-4xl font-bold font-mono ">
            Services
          </span>
        </h2>
        <hr className="h-[1px] text-[#dddddd] mx-auto w-52 border-none bg-[#dddd]" />

        <div className="max-w-full mx-auto grid lg:grid-cols-4 sm:grid-cols-2 gap-4 bg-black  pt-2 pb-2 mt-5 p-10">
          <div className="group gallery  p-5 mt-5  mb-5 rounded hover:bg-orange-500 text-white">
            <AiOutlineLaptop className="animate-bounce text-5xl mx-auto group-hover:text-white text-orange-600 mt-5 duration-1000 " />
            <h5 className="text-white text-xl text-center py-2 font-mono">
              Web Dezine
            </h5>
            <p className="font-mono">
              Like with the utilities Tailwind includes by default, utilities
              added by a plugin will only be included in the generated CSS if
              they are actually being used in the project.
            </p>
          </div>

          <div className="group gallery  p-5 mt-5  mb-5 rounded hover:bg-orange-500 text-white">
            <BsGraphUpArrow className="animate-bounce text-5xl mx-auto group-hover:text-white text-orange-600 mt-5 duration-1000" />
            <h5 className="text-white text-xl text-center py-2 font-mono">
              Marketing
            </h5>
            <p className="font-mono">
              Like with the utilities Tailwind includes by default, utilities
              added by a plugin will only be included in the generated CSS if
              they are actually being used in the project.
            </p>
          </div>

          <div className="group gallery  p-5 mt-5  mb-5 rounded hover:bg-orange-500 text-white">
            <BsDatabaseCheck className=" animate-bounce text-5xl mx-auto group-hover:text-white text-orange-600 mt-5 duration-1000" />
            <h5 className="text-white text-xl text-center py-2 font-mono">
              Graphics
            </h5>
            <p className="font-mono">
              Like with the utilities Tailwind includes by default, utilities
              added by a plugin will only be included in the generated CSS if
              they are actually being used in the project.
            </p>
          </div>

          <div className="group gallery  p-5 mt-5  mb-5 rounded hover:bg-orange-500 text-white">
            <AiFillMobile className="animate-bounce text-5xl mx-auto group-hover:text-white text-orange-600 mt-5 duration-1000" />
            <h5 className="text-white text-xl text-center py-2 font-mono">
              Mobile Development
            </h5>
            <p className="font-mono">
              Like with the utilities Tailwind includes by default, utilities
              added by a plugin will only be included in the generated CSS if
              they are actually being used in the project.
            </p>
          </div>

          <div className="group gallery  p-5 mt-5  mb-5 rounded hover:bg-orange-500 text-white">
            <SiHiveBlockchain className=" animate-bounce text-5xl mx-auto group-hover:text-white text-orange-600 mt-5 duration-1000" />
            <h5 className="text-white text-xl text-center py-2 font-mono">
              Block Chain
            </h5>
            <p className="font-mono">
              Like with the utilities Tailwind includes by default, utilities
              added by a plugin will only be included in the generated CSS if
              they are actually being used in the project.
            </p>
          </div>

          <div className="group gallery  p-5 mt-5  mb-5 rounded hover:bg-orange-500 text-white">
            <SiVirtualbox className="animate-bounce text-5xl mx-auto group-hover:text-white text-orange-600 mt-5 duration-1000" />
            <h5 className="text-white text-xl text-center py-2 font-mono">
              Virtual Reality
            </h5>
            <p className="font-mono">
              Like with the utilities Tailwind includes by default, utilities
              added by a plugin will only be included in the generated CSS if
              they are actually being used in the project.
            </p>
          </div>

          <div className="group gallery  p-5 mt-5  mb-5 rounded hover:bg-orange-500 text-white">
            <GiArtificialIntelligence className="animate-bounce text-5xl mx-auto group-hover:text-white text-orange-600 mt-5 duration-1000" />
            <h5 className="text-white text-xl text-center py-2 font-mono">
              Artificial Intelligence
            </h5>
            <p className="font-mono">
              Like with the utilities Tailwind includes by default, utilities
              added by a plugin will only be included in the generated CSS if
              they are actually being used in the project.
            </p>
          </div>

          <div className="group gallery  p-5 mt-5  mb-5 rounded hover:bg-orange-500 text-white">
            <TbWashMachine className="animate-bounce text-5xl mx-auto group-hover:text-white text-orange-600 mt-5 duration-1000" />
            <h5 className="text-white text-xl text-center py-2 font-mono">
              Machine learning
            </h5>
            <p className="font-mono">
              Like with the utilities Tailwind includes by default, utilities
              added by a plugin will only be included in the generated CSS if
              they are actually being used in the project.
            </p>
          </div>
        </div>

      
        <Footer />
      </div>
    </>
  );
}

export default Services;
