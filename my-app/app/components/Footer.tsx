import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="w-full container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">QuickReach AI</h3>
            <p className="text-sm text-gray-400">Delivering Fast Results with AI-Powered Innovation</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Brand Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  AI Chatbots
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61573038855087" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/quickreach.ai/" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/quick-reach-ai/ " className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} QuickReach AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

