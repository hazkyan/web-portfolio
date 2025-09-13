'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { ModeToggle } from './mode-toggle'
import { ThemeLogo } from './theme-logo'

const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Tech Stack', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (href: string) => {
        const targetId = href.replace('#', '')
        const targetElement = document.getElementById(targetId)
        
        if (targetElement) {
            // Close mobile menu if open
            setMenuState(false)
            
            // Get the header height to offset the scroll position
            const headerHeight = 80 // Approximate header height
            const elementPosition = targetElement.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight

            // Enhanced smooth scroll
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
            
            // Add a subtle flash effect to the target section
            targetElement.style.transform = 'scale(1.005)'
            targetElement.style.transition = 'transform 0.3s ease-out'
            
            setTimeout(() => {
                targetElement.style.transform = 'scale(1)'
                setTimeout(() => {
                    targetElement.style.transition = ''
                }, 300)
            }, 100)
        }
    }

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className={`fixed z-50 w-full border-b transition-all duration-300 ${
                    scrolled 
                        ? 'bg-background/95 backdrop-blur-md shadow-lg shadow-black/5' 
                        : 'bg-background/50 backdrop-blur-3xl'
                }`}>
                <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="group flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5">
                                <div className="relative">
                                    <ThemeLogo 
                                        width={24} 
                                        height={24} 
                                        className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-20 -z-10" />
                                </div>
                                <span className="text-sm font-semibold tracking-wide bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600">
                                    hazkyan
                                </span>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden transition-transform duration-200 hover:scale-110 active:scale-95">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <button
                                                onClick={() => scrollToSection(item.href)}
                                                className="group relative text-muted-foreground hover:text-accent-foreground block duration-300 transition-all hover:-translate-y-0.5 cursor-pointer">
                                                <span className="relative">
                                                    {item.name}
                                                    <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
                                                </span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <button
                                                onClick={() => scrollToSection(item.href)}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150 w-full text-left cursor-pointer">
                                                <span>{item.name}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <ModeToggle/>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="group relative overflow-hidden border-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-400 dark:hover:border-purple-400">
                                    <Link href="/login">
                                        <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-purple-500 font-medium">
                                            Login
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
