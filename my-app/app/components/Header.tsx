"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Link as ScrollLink } from "react-scroll"
import type React from "react" // Added import for React

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "light"
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
      setTheme(savedTheme)
    }
  }, [setTheme])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme)
      document.documentElement.classList.toggle("dark", newTheme === "dark")
    }
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md dark:bg-gray-900" : "bg-transparent"
      }`}
    >
      <nav className="container w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="text-xl sm:text-2xl font-bold text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer"
          >
            QuickReach AI
          </ScrollLink>
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            <NavLink to="hero">Home</NavLink>
            <NavLink to="services">Services</NavLink>
            <NavLink to="about">About Us</NavLink>
            <NavLink to="why-us">Why Us</NavLink>
            <NavLink to="portfolio">Portfolio</NavLink>
            <NavLink to="team">Team</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              aria-label="Toggle theme"
            >
              {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-4 w-full">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <NavLink to="home" onClick={toggleMobileMenu}>
              Home
            </NavLink>
            <NavLink to="services" onClick={toggleMobileMenu}>
              Services
            </NavLink>
            <NavLink to="about" onClick={toggleMobileMenu}>
              About Us
            </NavLink>
            <NavLink to="why-us" onClick={toggleMobileMenu}>
              Why Us
            </NavLink>
            <NavLink to="portfolio" onClick={toggleMobileMenu}>
              Portfolio
            </NavLink>
            <NavLink to="team" onClick={toggleMobileMenu}>
              Team
            </NavLink>
            <NavLink to="contact" onClick={toggleMobileMenu}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

const NavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) => (
  <ScrollLink
    to={to}
    smooth={true}
    duration={500}
    className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer"
    onClick={onClick}
  >
    {children}
  </ScrollLink>
)

export default Header

