'use client'

import Link from 'next/link'
import { useState } from 'react'

const menuItems = [
  { href: '/', label: 'ホーム' },
  { href: '/products', label: 'プロダクト' },
  { href: '/about', label: '私たちについて' },
  { href: '/blog', label: 'ブログ' },
  { href: '/contact', label: 'お問い合わせ' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="absolute inset-0 bg-white/90 shadow-sm"></div>
      <div className="relative container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link 
            href="/" 
            className="text-2xl font-extralight tracking-[0.2em] text-neutral-800 hover:text-neutral-600 transition-colors"
          >
            クリーンライフ
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-1">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block px-4 py-2 text-sm text-neutral-600 hover:text-neutral-900
                      rounded-full hover:bg-neutral-100 transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden p-2 text-neutral-600 hover:text-neutral-900
              hover:bg-neutral-100 rounded-lg transition-colors"
            aria-label="メニュー"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden absolute left-0 right-0 top-20 bg-white shadow-lg transition-all duration-200
            ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
        >
          <nav className="py-3">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50
                  transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
} 