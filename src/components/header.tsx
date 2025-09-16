'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { ModeToggle } from './mode-toggle'
import { ThemeLogo } from './theme-logo'
import { MENU_ITEMS } from '@/constants'
import { scrollToSection } from '@/utils/navigation'

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const [touchStart, setTouchStart] = React.useState<number | null>(null)
    const [touchEnd, setTouchEnd] = React.useState<number | null>(null)

    const minSwipeDistance = 50

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null)
        setTouchStart(e.targetTouches[0].clientX)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isRightSwipe = distance < -minSwipeDistance
        
        if (isRightSwipe && !menuState) {
            setMenuState(true)
        }
    }

    const handleScrollToSection = (href: string) => {
        scrollToSection(href, () => setMenuState(false))
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
                <div className="mx-auto max-w-7xl px-6 transition-all duration-300">
                    <div className="relative flex items-center justify-between py-2 lg:grid lg:grid-cols-3 lg:gap-8">
                        <div className="flex items-center">
                            <Link
                                href="/"
                                aria-label="home"
                                className="group flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5">
                                <div className="relative">
                                    <ThemeLogo 
                                        width={28} 
                                        height={28} 
                                        className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-30 -z-10" />
                                </div>
                                <span className="text-base font-bold tracking-wide bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                                    hazkyan
                                </span>
                            </Link>
                        </div>

                        <div className="hidden lg:flex justify-center">
                            <div className="flex items-center gap-1 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-full px-1 py-1 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                                {MENU_ITEMS.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleScrollToSection(item.href)}
                                        className="group relative px-4 py-2.5 min-h-[44px] text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-full hover:bg-white/80 dark:hover:bg-gray-700/80 hover:shadow-md touch-manipulation whitespace-nowrap">
                                        <span className="relative z-10">
                                            {item.name}
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-3 ml-auto">
                            <ModeToggle/>
                            <Button
                                asChild
                                variant="outline"
                                size="sm"
                                className="hidden sm:flex min-h-[44px] px-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-700/80 touch-manipulation">
                                <Link href="/login">
                                    Login
                                </Link>
                            </Button>
                            
                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 flex lg:hidden p-3 min-h-[44px] min-w-[44px] rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 transition-all duration-200 hover:scale-110 hover:bg-white/80 dark:hover:bg-gray-700/80 active:scale-95 touch-manipulation justify-center items-center">
                                <Menu className={`size-5 transition-all duration-200 ${menuState ? 'rotate-180 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
                                <X className={`absolute size-5 transition-all duration-200 ${menuState ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-0 opacity-0'}`} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
                    menuState 
                        ? 'bg-black/20 backdrop-blur-sm opacity-100 pointer-events-auto' 
                        : 'opacity-0 pointer-events-none'
                }`} 
                onClick={() => setMenuState(false)}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                />

                <div className={`lg:hidden fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-l border-gray-200/50 dark:border-gray-700/50 shadow-2xl transform transition-transform duration-300 ${
                    menuState ? 'translate-x-0' : 'translate-x-full'
                }`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}>
                    <div className="p-6 space-y-6">
                        {/* Mobile Menu Header */}
                        <div className="flex items-center justify-between pb-6 border-b border-gray-200/50 dark:border-gray-700/50">
                            <span className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                                Navigation
                            </span>
                            <button
                                onClick={() => setMenuState(false)}
                                className="p-2 min-h-[44px] min-w-[44px] rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors touch-manipulation flex items-center justify-center"
                            >
                                <X className="size-5" />
                            </button>
                        </div>

                        {/* Mobile Menu Items */}
                        <nav className="space-y-2">
                            {MENU_ITEMS.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleScrollToSection(item.href)}
                                    className="w-full text-left px-6 py-4 min-h-[56px] rounded-xl text-muted-foreground hover:text-foreground hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-200 group touch-manipulation">
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium text-base">{item.name}</span>
                                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                    </div>
                                </button>
                            ))}
                        </nav>

                        {/* Mobile Menu Footer */}
                        <div className="pt-6 border-t border-gray-200/50 dark:border-gray-700/50 space-y-3">
                            <Button
                                asChild
                                variant="outline"
                                className="w-full min-h-[48px] bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm touch-manipulation">
                                <Link href="/login" onClick={() => setMenuState(false)}>
                                    Login
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
