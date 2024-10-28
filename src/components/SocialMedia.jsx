import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"  
import { GoDownload } from "react-icons/go"

export default function SocialMedia() {
  return (
    <ul className="flex items-center mt-9 lg:mt-0 gap-4">
      <li>
        <a href="https://www.linkedin.com/in/raffi-ananta-b96a492ba/" target="_blank" aria-label="Connect my LinkedIn profile">
          <FaLinkedin
            size={28}
            className="hover:text-bone-white transition-all cursor-pointer"
          />
        </a>
      </li>
      <li>
        <a href="https://github.com/takagixnishikata" target="_blank" aria-label="Connect my Github respitory">
          <FaGithub
            size={28}
            className="hover:text-bone-white transition-all cursor-pointer"
          />
        </a>
      </li>
      <li>
        <a href="mailto:raffiesnew@gmail.com" aria-label="Connect me via Email">
          <FaEnvelope
            size={28}
            className="hover:text-bone-white transition-all cursor-pointer"
          />
        </a>
      </li>
      <li className="group">
      <a href="#" aria-label="View full my resume" className="bg-aquamarine group-hover:text-aquamarine border-2 border-aquamarine group-hover:border-aquamarine group-hover:bg-slate-950 transition-all text-slate-950 inline-flex cursor-pointer gap-1 font-semibold rounded-full items-center px-3 py-1 text-sm">
          <span>Resume</span>
          <GoDownload
            size={20}
            className="text-slate-950 group-hover:text-aquamarine cursor-pointer"
          />
        </a>
      </li>
    </ul>
  )
}