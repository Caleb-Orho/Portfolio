import { useState, useEffect, useRef } from "react";
import { useAnimate, stagger } from "framer-motion";
import { Link } from 'react-router-dom';
import Menu from './Menu'
import MenuToggle from './MenuToggle'
import Resume from "../utils/Resume.pdf"
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = Resume;
    a.download = 'CalebResume.pdf';
    a.click();
  };

  return (
    <div className="h-screen bg-cover bg-no-repeat bg-[url('https://s3-eu-west-1.amazonaws.com/blog-ecotree/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg')]">
      <div className="flex grow justify-center justify-between flex-row sm:gap-0 gap-3 ml-4 mr-4 sm:ml-20 sm:mr-20 font-semibold">
        <ScrollLink
          to="header"
          className="mt-14"
        >
          <Link className="text-white">HOME</Link>
        </ScrollLink>

        <ScrollLink
          to="project"
          className="mt-14"
        >
          <Link className="text-white">PROJECTS</Link>
        </ScrollLink>

        <ScrollLink
          to="about"
          className="mt-14"
        >
          <Link className="text-white">ABOUT</Link>
        </ScrollLink>
        <Link className="text-white mt-14 underline" onClick={handleDownload}>RESUME</Link>
      </div>


      <div className="flex justify-center items-center flex-col h-full">
        <p className="text-white text-3xl sm:text-7xl">
          Hello, I'm
        </p>

        <p className="text-white text-5xl sm:text-9xl font-mediumtracking-wide">
          Caleb Orhomre
        </p>

        <p className="font-bold text-white text-xl sm:text-lg font-medium mt-2">
          AND THIS IS MY <Link className="text-white mt-14 underline" onClick={handleDownload}>PORTFOLIO</Link>
        </p>
      </div>


      <div ref={scope} className={`absolute w-full sm:hidden ${isOpen ? "opacity-100 " : "opacity-0 pointer-events-none"
        } transition-opacity duration-700 ease-in-out`} >
        <Menu />
      </div>

    </div>
  );
};

export default Header;


function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
        [
          "nav",
          { transform: "translateX(0%)" },
          { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.0 }
        ],
        [
          "li",
          { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
          { delay: stagger(0.05), at: "-0.1" }
        ]
      ]
      : [
        [
          "li",
          { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
          { delay: stagger(0.05, { from: "last" }), at: "<" }
        ],
        ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]
      ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" }
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" }
      ],
      ...menuAnimations
    ]);
  }, [isOpen]);

  return scope;
}