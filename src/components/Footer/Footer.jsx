import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-7">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo + Copyright */}
          <div className="flex flex-col justify-between">
            <div className="flex items-center">
              <Logo width="90px" />
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-gray-400">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link className="hover:text-white transition-colors" to="/">
                  Features
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" to="/">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" to="/">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" to="/">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-gray-400">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link className="hover:text-white transition-colors" to="/">
                  Account
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" to="/">
                  Help
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" to="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" to="/">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legals */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-gray-400">
              Legals
            </h3>
            <ul className="space-y-3">
              <li>
                <Link className="hover:text-white transition-colors" to="/">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" to="/">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        {/* <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          Built with ❤️ using React & Tailwind
        </div> */}
      </div>
    </footer>
  )
}

export default Footer
