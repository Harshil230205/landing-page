import { motion } from "motion/react";
import { XIcon } from "./Icons";

const AboutCard = ({ closeModal }) => {
  const heading = "Creativity bleeds from the pen of inspiration.";
  const paragraphs = [
    'I am a passionate <strong>Web Developer</strong> skilled in <strong>front‑end</strong> and <strong>back‑end</strong> development. I create responsive and user‑friendly websites using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>. I focus on writing clean code and delivering smooth, high‑performing web experiences.',
    "I'm constantly learning new technologies to stay updated in this fast‑paced field. My goal is to build <strong>simple</strong>, <strong>effective</strong>, and <strong>reliable</strong> web solutions that help businesses grow their online presence.",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-md bg-black/50">
      <motion.div
        className="relative max-w-4xl w-full mx-4 border shadow-2xl rounded-3xl grid-default-color border-white/20 bg-gradient-to-br from-gray-900/95 to-gray-800/95 max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-6 right-6  hover:bg-[#3a3a3a]/80 text-white/80 hover:text-white rounded-lg border border-white/10 z-10"
        >
          <XIcon className="cursor-none" />
        </button>

        <div className="p-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h4 className="text-white font-bold text-3xl md:text-4xl mb-2">
              About Me
            </h4>
            <div className="w-24 h-0.5 bg-[#7a57db] mx-auto mb-6"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-xl md:text-2xl mb-4 text-center">
              {heading}
            </h4>
            <div className="space-y-4">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-neutral-300 leading-relaxed text-lg"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutCard;
