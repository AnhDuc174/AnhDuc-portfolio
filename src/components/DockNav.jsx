import { FiHome, FiMail } from 'react-icons/fi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

function DockNav() {
    return (
        <nav className="dock-nav">
            <a href="#home" className="dock-nav__item dock-nav__item--active" title="Home">
                <FiHome />
            </a>
            <a
                href="https://www.linkedin.com/in/anh-duc-nguyen"
                target="_blank"
                rel="noopener noreferrer"
                className="dock-nav__item"
                title="LinkedIn"
            >
                <FaLinkedinIn />
            </a>
            <a
                href="https://github.com/AnhDuc174"
                target="_blank"
                rel="noopener noreferrer"
                className="dock-nav__item"
                title="GitHub"
            >
                <FaGithub />
            </a>
            <a href="mailto:robertoducdz1704@gmail.com" className="dock-nav__item" title="Email">
                <FiMail />
            </a>
        </nav>
    )
}

export default DockNav
