import { Container, Logo, LogoutBtn } from '../index'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const location = useLocation();
  const{ pathname:path } = location
  
  const navItems = [
    { name: 'Home', slug: "/", active: true }, 
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ]

  return (
    <header className="sticky top-4 z-50 flex justify-center">
      <Container>
        <nav
          className="flex items-center justify-between px-6 py-3 
                     rounded-full shadow-lg
                     bg-white/30 backdrop-blur-md border border-white/20"
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Logo width="60px" />
              <span className="text-xl font-bold text-gray-800">Chirp</span>
            </Link>
          </div>

          {/* Nav Items */}
          <ul className="flex items-center gap-4">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className={` ${path === item.slug?"bg-blue-500 text-white":undefined} px-4 py-2 text-sm font-medium text-gray-700 rounded-full 
                               transition-all hover:bg-blue-500 hover:text-white cursor-pointer`}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
