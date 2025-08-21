import { Mail, Phone } from "lucide-react";
import { XIcon } from "./Icons";

export default function ContactCard({ closeModal }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-md bg-black/50">
      <div className="relative max-w-sm mx-auto p-6 rounded-2xl shadow-lg grid-default-color border border-white/20 bg-gradient-to-br from-gray-900/95 to-gray-800/95">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-6 right-6 hover:bg-[#3a3a3a]/80 text-white/80 hover:text-white rounded-lg border border-white/10 z-10"
        >
          <XIcon className="cursor-none" />
        </button>

        {/* Title */}
        <div className="text-center mb-8">
          <h4 className="text-white font-bold text-3xl md:text-4xl mb-2">
            Contact
          </h4>
          <div className="w-24 h-0.5 bg-[#7a57db] mx-auto mb-6"></div>
        </div>
        
        {/* Description */}
        <p className="text-gray-300 mb-6">
          Get in touch with me and let's build something great together.
        </p>

        {/* Email */}
        <div className="flex items-center space-x-3 mb-3">
          <Mail className="w-5 h-5 text-gray-300" />
          <span className="text-white">harshil23kachhadiya@gmail.com</span>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-gray-300" />
          <span className="text-white">+91 9924415780</span>
        </div>
      </div>
    </div>
  );
}
