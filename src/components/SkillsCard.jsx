import { motion } from "motion/react";
import { XIcon } from "./Icons";

const SkillsCard = ({ closeModal }) => {
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
              Skills
            </h4>
            <div className="w-24 h-0.5 bg-[#7a57db] mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Frontend Technologies */}
              <div>
                <h5 className="text-white font-semibold text-lg mb-2">
                  Frontend Technologies
                </h5>
                <p className="text-neutral-300">
                  HTML, CSS, JavaScript, TypeScript, Tailwind CSS, ReactJS,
                  Next.js
                </p>
              </div>

              {/* Programming Languages */}
              <div>
                <h5 className="text-white font-semibold text-lg mb-2">
                  Programming Languages
                </h5>
                <p className="text-neutral-300">C, C++, JAVA</p>
              </div>

              {/* Data Structures & Algorithms */}
              <div>
                <h5 className="text-white font-semibold text-lg mb-2">
                  Data Structures & Algorithms
                </h5>
                <p className="text-neutral-300">Java with DSA</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Backend Technologies */}
              <div>
                <h5 className="text-white font-semibold text-lg mb-2">
                  Backend Technologies
                </h5>
                <p className="text-neutral-300">NodeJS, Express</p>
              </div>

              {/* Database Management */}
              <div>
                <h5 className="text-white font-semibold text-lg mb-2">
                  Database Management
                </h5>
                <p className="text-neutral-300">MongoDB, SQL, MySQL</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsCard;
