import ExperienceCard from "./components/ExperienceCard.jsx";
import {
  InstagramIcon,
  BlocksIcon,
  WaypointsIcon,
  LinkedinIcon,
  GithubIcon,
  TwitterIcon,
  DownloadIcon,
  UserIcon,
  SmoothCursor,
  WorldMap,
  AirplaneIcon,
} from "./components/Icons.jsx";
import AboutCard from "./components/AboutCard.jsx";
import SkillsCard from "./components/SkillsCard.jsx";
import ContactCard from "./components/ContactCard.jsx";
import { useState, useCallback, useMemo } from "react";
import hero from "../public/hero.jpg";
import starLines from "../public/star-lines.svg";
import resume from "../public/Harshil Resume.pdf";

function App() {
  const [isHidden, setIsHidden] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const openAboutMeModal = useCallback(() => {
    setIsHidden(true);
  }, []);

  const openSkillsModal = useCallback(() => {
    setShowSkills(true);
  }, []);

  const openContactModal = useCallback(() => {
    setShowContact(true);
  }, []);

  const closeProjectModal = useCallback(() => {
    setIsHidden(false);
  }, []);

  const closeSkillsModal = useCallback(() => {
    setShowSkills(false);
  }, []);

  const closeContactModal = useCallback(() => {
    setShowContact(false);
  }, []);

  const downloadResume = useCallback(() => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Harshil_Kachhadiya_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const openLinkedIn = useCallback(() => {
    window.open("https://www.linkedin.com/in/harshil-kachhadiya-424795344/", "_blank", "noopener,noreferrer");
  }, []);

  const openGithub = useCallback(() => {
    window.open("https://github.com/Harshil230205/", "_blank", "noopener,noreferrer");
  }, []);

  const openTwitter = useCallback(() => {
    window.open("https://x.com/", "_blank", "noopener,noreferrer");
  }, []);

  const openInstagram = useCallback(() => {
    window.open("https://www.instagram.com/harshil_kachhadiya_23/", "_blank", "noopener,noreferrer");
  }, []);

  const openProfile = useCallback(() => {
    window.open("https://profile.kachhadiya.shop/", "_blank");
  }, []);

  const worldMapDots = useMemo(() => [
    {
      start: { lat: 64.2008, lng: -149.4937 },
      end: { lat: 34.0522, lng: -118.2437 },
    },
    {
      start: { lat: 64.2008, lng: -149.4937 },
      end: { lat: -15.7975, lng: -47.8919 },
    },
    {
      start: { lat: -15.7975, lng: -47.8919 },
      end: { lat: 38.7223, lng: -9.1393 },
    },
    {
      start: { lat: 51.5074, lng: -0.1278 },
      end: { lat: 28.6139, lng: 77.209 },
    },
    {
      start: { lat: 28.6139, lng: 77.209 },
      end: { lat: 43.1332, lng: 131.9113 },
    },
    {
      start: { lat: 28.6139, lng: 77.209 },
      end: { lat: -1.2921, lng: 36.8219 },
    },
  ], []);

  return (
    <>
      <SmoothCursor />
      <div className="mx-auto max-w-7xl my-auto page-padding">
        <section className="text-heading section-spacing" id="about">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[4.5rem]">
            {/* -------------------------------  grid-1  ---------------------------------------------------------image  */}
            <div className="grid-1 grid-default-color p-4 md:p-6 flex flex-row">
              <img
                src={starLines}
                alt="background image"
                className="md:w-[9%] sm:w-[10%] absolute bottom-10 right-10 hidden lg:block md:block sm:opacity-0 md:opacity-100 lg:opacity-100 opacity-0"
                loading="lazy"
              />
              <div className="w-[40%] md:w-[50%] p-3 md:p-5 h-full">
                <img
                  src={hero}
                  className="rounded-tl-[20%] rounded-br-[20%] rounded-tr-[20%] rounded-bl-[20%] h-full center object-cover"
                  alt="my Image"
                  loading="eager"
                />
              </div>
              <div className="w-[60%] md:w-[50%] flex flex-col gap-2 md:gap-3 m-auto p-3 md:p-5">
                <p className="text-neutral-500 text-shadow-sm text-xs md:text-sm text-prett">
                  WEB DEVELOPER
                </p>
                <h2 className="text-heading bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold leading-tight">
                  Harshil
                </h2>
                <h2 className="text-heading bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold leading-tight">
                  Kachhadiya
                </h2>
                <p className="text-neutral-500 text-shadow-sm text-xs md:text-[1rem] text-prett">
                  I'm a Web Developer passionate about creating amazing digital experiences.
                </p>
              </div>
            </div>

            {/* -------------------------------  grid-2  ----------------------------------------------------------------thought */}
            <div className="grid-2 grid-default-color p-4 md:p-6 col-span-2">
              <p className="text-neutral-600 text-shadow-sm text-xs md:text-sm text-pretty">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
                  CREATIVE
                </span>{" "}
                WORK AND PORTFOLIO
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
                  {" "}
                  • CREATIVE
                </span>{" "}
                PROJECTS AND SHOWCASE{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
                  {" "}
                  •
                </span>{" "}
              </p>
            </div>

            {/* -------------------------------  grid-3  ----------------------------------------------------------------about me */}
            <div
              data-cursor="Click me"
              data-cursor-bg="#aaaaaa"
              data-cursor-fg="#000000"
              data-cursor-tail="#aaaaaa"
              data-cursor-tail-border="#000000"
              className="grid-3 grid-default-color p-4 md:p-6 hover:shadow-md border border-transparent hover:border-gray-400 hover:bg-gray-800/50 transition-all duration-200 cursor-pointer md:order-1"
              onClick={openAboutMeModal}
            >
              <img
                src={starLines}
                alt="background image"
                className="md:w-[16%] sm:w-[10%] absolute bottom-10 right-10 hidden lg:block md:block sm:opacity-0 md:opacity-100 lg:opacity-100 opacity-0"
                loading="lazy"
              />
              <WaypointsIcon
                size={32}
                className="p-full text-[#dfdfdf] w-[100%] h-[60%] flex items-center justify-center md:scale-100 scale-75"
              />
              <div className="flex flex-col gap-1 md:gap-2 mt-2 md:mt-3">
                <p className="text-neutral-600 text-shadow-sm text-xs md:text-sm text-pretty">
                  MORE ABOUT ME
                </p>
                <h2 className="text-[#dfdfdf] font-bold text-xl md:text-2xl">
                  About Me
                </h2>
              </div>
            </div>

            {/* ------------------------------  grid-4  -----------------------------------------------------------------skills  */}
            <div 
              data-cursor="Click me"
              data-cursor-bg="#aaaaaa"
              data-cursor-fg="#000000"
              className="grid-4 grid-default-color p-4 md:p-6 flex flex-col border border-transparent hover:border-gray-400 hover:shadow-md hover:bg-gray-800/50 transition-all duration-200 cursor-pointer md:order-2"
              onClick={openSkillsModal}
            >
              <img
                src={starLines}
                alt="background image"
                className="md:w-[16%] sm:w-[10%] absolute bottom-10 right-10 hidden lg:block md:block sm:opacity-0 md:opacity-100 lg:opacity-100 opacity-0"
                loading="lazy"
              />
              <BlocksIcon
                size={32}
                className="p-full text-[#dfdfdf] w-[100%] h-[60%] flex items-center justify-center md:scale-100 scale-75"
              />
              <div className="flex flex-col gap-1 md:gap-2 mt-2 md:mt-3">
                <p className="text-neutral-600 text-shadow-sm text-xs md:text-sm text-pretty">
                  EXPERTISE
                </p>
                <h2 className="text-[#dfdfdf] font-bold text-xl md:text-2xl">
                  My Skills
                </h2>
              </div>
            </div>

            {/* ------------------------------  grid-5  -----------------------------------------------------------------resume */}
            <div
              data-cursor="Download"
              data-cursor-bg="#aaaaaa"
              data-cursor-fg="#000000"
              className="grid-5 grid-default-color p-4 md:p-6 border border-transparent hover:border-gray-400 hover:shadow-md hover:bg-gray-800/50 transition-all duration-200 cursor-pointer md:order-3"
              onClick={downloadResume}
              role="button"
              aria-label="Download resume"
            >
              <img
                src={starLines}
                alt="background image"
                className="md:w-[16%] sm:w-[10%] absolute bottom-10 right-10 hidden lg:block md:block sm:opacity-0 md:opacity-100 lg:opacity-100 opacity-0"
                loading="lazy"
              />
              <DownloadIcon
                size={32}
                className="p-full text-[#dfdfdf] w-[100%] h-[60%] flex items-center justify-center md:scale-100 scale-75"
              />
              <div className="flex flex-col gap-1 md:gap-2 mt-2 md:mt-3">
                <p className="text-neutral-600 text-shadow-sm text-xs md:text-sm text-pretty">
                WORK PROFILE
                </p>
                <h2 className="text-[#dfdfdf] font-bold text-xl md:text-2xl">
                  Resume
                </h2>
              </div>
            </div>

            {/* -------------------------------  grid-7  ----------------------------------------------------------------portfolio */}
            <div
              data-cursor="Click me"
              data-cursor-bg="#aaaaaa"
              data-cursor-fg="#000000"
              className="grid-7 grid-default-color p-4 md:p-6 border border-transparent hover:border-gray-400 hover:shadow-md hover:bg-gray-800/50 transition-all duration-200 cursor-pointer md:order-5"
              onClick={openProfile}
            >
              <img
                src={starLines}
                alt="background image"
                className="md:w-[16%] sm:w-[10%] absolute bottom-10 right-10 hidden lg:block md:block sm:opacity-0 md:opacity-100 lg:opacity-100 opacity-0"
                loading="lazy"
              />
              <UserIcon
                size={32}
                className="p-full text-[#dfdfdf] w-[100%] h-[60%] flex items-center justify-center md:scale-100 scale-75"
              />
              <div className="flex flex-col gap-1 md:gap-2 mt-2 md:mt-3">
                <p className="text-neutral-600 text-shadow-sm text-xs md:text-sm text-pretty">
                  PORTFOLIO
                </p>
                <h2 className="text-[#dfdfdf] font-bold text-xl md:text-2xl">
                  Profile
                </h2>
              </div>
            </div>

            {/* -------------------------------  grid-6  ----------------------------------------------------------------social-media */}
            <div className="grid-6 grid-default-color border border-transparent hover:border-gray-400 hover:shadow-md p-4 md:p-6 col-span-2 md:col-span-1 md:order-4">
              <img
                src={starLines}
                alt="background image"
                className="md:w-[9%] sm:w-[10%] absolute bottom-10 right-10 hidden lg:block md:block sm:opacity-0 md:opacity-100 lg:opacity-100 opacity-0"
                loading="lazy"
              />
              <div className="p-full w-[100%] h-[60%] flex flex-row justify-center text-center pt-3 md:pt-7">
                <LinkedinIcon
                  size={28}
                  className="p-full text-[#dfdfdf] w-[100%] h-[60%] flex items-center justify-center hover:text-blue-400 transition-colors duration-200 md:scale-100 scale-75 cursor-pointer"
                  onClick={openLinkedIn}
                  aria-label="Open LinkedIn profile"
                />
                <GithubIcon
                  size={28}
                  className="p-full text-[#dfdfdf] w-[100%] h-[60%] flex items-center justify-center hover:text-gray-400 transition-colors duration-200 md:scale-100 scale-75 cursor-pointer"
                  onClick={openGithub}
                  aria-label="Open GitHub profile"
                />
                <TwitterIcon
                  size={28}
                  className="p-full text-[#dfdfdf] w-[100%] h-[60%] flex items-center justify-center hover:text-blue-400 transition-colors duration-200 md:scale-100 scale-75 cursor-pointer"
                  onClick={openTwitter}
                  aria-label="Open X (Twitter) profile"
                />
                <InstagramIcon
                  size={28}
                  className="p-full text-[#dfdfdf] w-[100%] h-[60%] flex items-center justify-center hover:text-pink-400 transition-colors duration-200 md:scale-100 scale-75 cursor-pointer"
                  onClick={openInstagram}
                  aria-label="Open Instagram profile"
                />
              </div>

              <div className="flex flex-col gap-1 md:gap-2 mt-2 md:mt-3">
                <p className="text-neutral-600 text-shadow-sm text-xs md:text-sm text-pretty">
                  UPDATED
                </p>
                <h2 className="text-[#dfdfdf] font-bold text-xl md:text-2xl">
                  Social Profiles
                </h2>
              </div>
            </div>

            {/* -------------------------------  grid-8  ----------------------------------------------------------------experience */}
            <div className="grid-8 grid-default-color p-4 md:p-6 border border-transparent hover:border-gray-400 hover:shadow-md grid grid-cols-3 gap-2 md:gap-5 col-span-2 md:order-6">
              <ExperienceCard
                number={"15"}
                string={"DAYS INTERNSHIP EXPERIENCE"}
              />
              <ExperienceCard
                number={"3"}
                string={"CLIENTS WORLDWIDE"}
                prifix={"+"}
              />
              <ExperienceCard
                number={"4"}
                string={"TOTAL PROJECTS"}
                prifix={"+"}
              />
            </div>

            {/* ----------------------------------  grid-9  -------------------------------------------------------------contact */}
            <div 
               data-cursor="click me"
              data-cursor-bg="#7a57db"
              data-cursor-fg="#ffffff"
                data-cursor-tail="#7a57db"
  data-cursor-tail-border="#000000"
              className="grid-9 grid-default-color md:absolute border border-transparent hover:border-lavender hover:shadow-md hover:bg-gray-800/50 transition-all duration-200 cursor-pointer col-span-2 md:order-7"
              onClick={openContactModal}
            >
              <img
                src={starLines}
                alt="background image"
                className="md:w-[9%] sm:w-[10%] absolute bottom-10 right-10 hidden lg:block md:block sm:opacity-0 md:opacity-100 lg:opacity-100 opacity-0"
                loading="lazy"
              />
              <div className="w-full h-auto md:h-full">
                <WorldMap
                  dots={worldMapDots}
                />
              </div>
              <div className="md:absolute bottom-4 md:bottom-6 lg:bottom-10 left-4 md:left-6 lg:left-10 p-3 md:p-0">
                <h2 className="text-[#dfdfdf] text-lg md:text-3xl lg:text-5xl">
                  Let's
                </h2>
                <div className="flex flex-row gap-2 md:gap-5 items-center">
                  <h3 className="text-[#dfdfdf] text-lg md:text-3xl lg:text-5xl">
                    Work <span className="text-lavender">together. </span>
                  </h3>
                  <AirplaneIcon className="text-lavender" size={28} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* About Modal */}
      {isHidden && (
        <AboutCard closeModal={closeProjectModal} />
      )}

      {/* Skills Modal */}
      {showSkills && (
        <SkillsCard closeModal={closeSkillsModal} />
      )}

      {/* Contact Modal */}
      {showContact && (
        <ContactCard closeModal={closeContactModal} />
      )}
    </>
  );
}

export default App;


